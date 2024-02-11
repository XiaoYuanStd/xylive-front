export interface Callback{
    server_id:string,
    service_id:string,
    client_id:string,
    ip:string,
    action:'on_publish'|'',
    app:string,
    tcUrl:string,
    stream:string,
    stream_url:string,
    stream_id:string,
    param:string
}

export const PermitResponse = () => Response.json({code:0})
export const DenyResponse = () => Response.json({code:-1})