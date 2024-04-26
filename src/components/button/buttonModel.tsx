import { useState } from "react"
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

    const [isWorking, setWorking] = useState(true)
    const changeStatus = () => {
        setWorking(!isWorking)
    }

    return (
        <Button className="btn-model-style" id="btn-model" onClick={changeStatus}>
            {props.children}
        </Button>
    )
}