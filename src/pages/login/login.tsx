import { ButtonModel } from "../../components/button/buttonModel"
import LoginForm from "../../components/loginForm/loginForm"

const Login = () => {

    return (
        <main className="container">
            <section className="general-content">
            <h2>Login</h2>
                <LoginForm>
                        <section className="input-box">
                            <label htmlFor="">
                                Email
                                <input type="email" name="email" id="" />
                            </label>
                            <label htmlFor="">
                                Password
                                <input type="password" name="password" id="" />
                            </label>
                        </section>
                    <ButtonModel>Entrar</ButtonModel>
                </LoginForm>
            </section>
        </main>
    )
}

export default Login