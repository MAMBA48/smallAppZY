import { useEffect, useState } from "react"
import { ButtonModel } from "../../components/button/buttonModel"
import LoginForm from "../../components/loginForm/loginForm"
import axios from "axios"

interface PropsFunction {
    onClick: () => void
}

const Login = ({onClick}: PropsFunction) => {
    //const [email, setEmail] = useState('')
    //const [password, setPassword] = useState('')

    const requestLogin = async () => {
        const res = await axios.get('http://localhost.com/4813/login')
        return console.log(res.data)
    }

    useEffect(() => {
        requestLogin()
    },[])

    const teste = ():void => alert('boooooom')

    return (
        <main className="container">
            <section className="general-content">
            <h2>Login</h2>
                <LoginForm onClick={onClick}>
                        <section className="input-box">
                            <label htmlFor="">
                                Email
                                <input type="email" name="email" id="" required/>
                            </label>
                            <label htmlFor="">
                                Password
                                <input type="password" name="password" id="" required/>
                            </label>
                        </section>
                        
                        <p>//**CORRIGIR ERRO DE TYPESCRIPT */</p>
                    <ButtonModel event={teste}>Entrar</ButtonModel>
                </LoginForm>
            </section>
        </main>
    )
}

export default Login