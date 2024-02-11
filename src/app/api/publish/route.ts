import { Callback, PermitResponse, DenyResponse, Database } from '@/utils/api';
import { getAll } from '@vercel/edge-config';

export async function POST(request: Request) {
  try {
    const req = (await request.json()) as Callback;
    if (req.action != 'on_publish') return DenyResponse();
    const conf = (await getAll()) as Database;
    if (
      req.app != conf.app ||
      !req.param.startsWith(conf.token) ||
      !conf.streams.some((value) => value.name == req.stream)
    )
      return DenyResponse();
    const token = req.param.slice(conf.token.length);
    if (!conf.streams.some((value) => value.token == token))
      return DenyResponse();
    return PermitResponse();
  } catch (e) {
    return DenyResponse();
  }
}
