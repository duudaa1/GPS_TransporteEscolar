import Api from "../api/api";
import Api_test from "../api/api_test";

export async function LoginRequest(email, password){
    try{
        const request = await Api.post('login', {email, password})
        return request.data
    }catch(erro){
        return null        
    }
}