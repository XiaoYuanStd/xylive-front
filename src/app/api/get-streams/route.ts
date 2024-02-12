import { joinURL } from 'ufo';

export const dynamic = 'force-dynamic';
export async function GET() {
  try {
    const res = await (
      await fetch(joinURL(process.env.SRS_API, 'streams'), {
        cache: 'no-cache',
      })
    ).json();
    return Response.json(res['streams']);
  } catch (e) {
    return Response.json([]);
  }
}
