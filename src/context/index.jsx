import { useContext, createContext, useState } from "react";
import { LoginRequest } from "./utils";

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [userCadastro, setUserCadastro] = useState(null)

    const hundleCadastro = ({nome, cpf, data, deficiencia, responsavel, parentesco, email, password, casa, escola, serie, turma})=>{
        setUserCadastro({nome, cpf, data, deficiencia, responsavel, parentesco, email, password, casa, escola, serie, turma})
    }
    
    async function authenticate(email, password){
        try{
            const response = await LoginRequest(email, password)
            if(response){
                setUser(response)
                console.log(response)
            }else{
                console.log("erradoo")
                console.log(response)
            }
        }catch(erro){
            console.log("errado")
        }
    }

    return (
        <AuthContext.Provider value={{
            user: user,
            authenticate,  
            hundleCadastro,
            userCadastro: userCadastro,
            isAuthenticateCadastro: !!userCadastro         
        }}>
            {children}
        </AuthContext.Provider>
    );    
};

export const useAuth = () => {
    return useContext(AuthContext);
};
