import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14pt;
    border-radius: 0 0 1.5rem 1.5rem;
    border-bottom: 2px solid var(--borderColor);
    border-left: 1px solid var(--borderColor);
    border-right: 2px solid var(--borderColor);
    padding: 1rem;
    min-height: 600px;
    min-width: 400px;

& label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
& input {
    width: 100%;
    outline: none;
    border: 1.5px solid var(--borderColor);
    border-radius: 0.250rem;
    font-size: 14pt;
    padding: 0.250rem;

    }
    & input:focus {
        box-shadow: 0px 0px 4px 0.1px var(--zyColor);
    }

`
const Section = styled.section`
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 250px;
    flex-direction: column;
    

    & button:hover {
        color: rgba(255, 255, 255, 0.733);
    }
`

interface Props {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any
}

const LoginForm = (props: Props) => {

    return (
        <Form action="/log">
            <Section>
                    {props.children}
            </Section>
        </Form>
    )
}

export default LoginForm