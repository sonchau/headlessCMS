import {buildQueryUrl} from './common'


export const getAllClients = () => {
    //get all client from heroku
    return [
        {   
            params: {
                client: 'casey'
            }
        },
        {   
            params: {
                client: 'brisbane'
            }
        },
        {   
            params: {
                client: 'brimbank'
            }
        },
    ]
}

export const getClientData = (client: string) => {
    const data = buildQueryUrl(client)
    return data
}

