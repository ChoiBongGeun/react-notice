import axios from 'axios'
import {END_POINT} from '../Endpoint'

const client = axios.create()

client.defaults.baseURL = END_POINT
client.defaults.headers.common['Authorization'] = localStorage.getItem("AUTH_TOKEN");  //로그인 기능 붙인 후 토큰 발급 받아서 AUTH_TOKEN이라는 변수에 저장되면 주석 풀면됩니다.
client.interceptors.response.use( (response) => {
    const returnError = getErrorCase(response.data.status, response.data.message)

    if (returnError) {
        return Promise.reject(returnError)
    } else {
        return response.data
    }
},  (error) =>  {
    // 401, 500번과 같이 HTTP 자체에서 낸 에러를 처리하는 로직입니다.

    return Promise.reject(error)
})

const getErrorCase = (code: number | string, message?: string) => {
    // API가 정상정으로 리턴되었지만 서버에서 반환해주는 에러 처리하는 로직입니다.
    switch (code) {
        case 200:
            return false
        default:
            return message;
    }
}
export default client
