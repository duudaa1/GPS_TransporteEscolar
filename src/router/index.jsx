
import AppRoutes from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../context";

export default function RootRoutes(){
    const {user, isAuthenticateCadastro} = useAuth()
    
    return(
         user != null || isAuthenticateCadastro ? <AuthRoutes/> : <AppRoutes/>
    )
}
