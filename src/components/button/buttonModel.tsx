import styled from "styled-components"

export interface Props {
    title?: string
    children?: string
    status?: boolean
}


const Button = styled.button`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    font-weight: 600;
    background: #323366;
    color:#EEEEEE;
    height: 50px;
    width: 120px;
    padding: 4px;
    color: #fff;
`

export const ButtonModel = (props: Props) => {

    return (
        <Button className="btn-model-style" id="btn-model" onClick={props.event}>
            {props.children}
        </Button>
    )
}