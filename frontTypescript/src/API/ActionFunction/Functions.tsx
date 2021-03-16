import client from '../Config/DefaultConfig'

export const getFunction = async (url: string, params?: string[]) => {

    const response:any = await client.get(`${url}/${params?.join('/')}`)

    if(response){
        return response
    }else{
        return false
    }
}

export const postFunction = async (url: string, body?: any) => {
    return client.post(url, body).then((data) => {
        return data
    })
}

