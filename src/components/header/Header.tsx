import styled from "styled-components"

const MyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    height: 64px;
    width: 100%;
    padding: 1rem;
    background:#323366;
    box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);

`

const Header = () => {

    return(
        <MyHeader>
            <div style={{transform: 'rotate(90deg)', cursor:'pointer'}}>
                <b>|||</b>
            </div>
            <span>
                <h2>Local App</h2>
            </span>
        </MyHeader>
    )
}

export default Header