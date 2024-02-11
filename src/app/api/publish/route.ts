import {Callback, PermitResponse, DenyResponse} from "@/utils/api";


export async function POST(request:Request){
    try{
        const req = await request.json() as Callback
        if(req.action != 'on_publish'){
            return DenyResponse()
        }
        return PermitResponse()
    }catch (e){
        return DenyResponse()
    }
}