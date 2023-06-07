import styled from "styled-components"
import UpArrow from "../Assets/arrow-142-32.png"
import DownArrow from "../Assets/arrow-204-32.png"
import { useNavigate } from "react-router-dom"


export function LogoutMenu({menu, setMenu}) {
    
    let navigate = useNavigate()

    function clickMenu() {
        setMenu(!menu )
    }

    function logout() {
        localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <LogoutMenuContainer onClick={clickMenu}>
            <img src={menu ? DownArrow : UpArrow}/>
            <Foto/>
            <MenuContainer menu={menu} onClick={logout}>
                <span>Logout</span>
            </MenuContainer>
            
        </LogoutMenuContainer>
    )
}

const LogoutMenuContainer = styled.div`
    width: 7vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 92vw;
    /* background-color: #ffffff; */
    img {
        width: 1.4vw;
        height: 1.4vw;
    }
`

const Foto = () => {
    return (
        <FotoContainer>
            <img src="https://images2.alphacoders.com/649/649995.jpg"/>
        </FotoContainer>
    )
}

const FotoContainer = styled.div`
    width: 10vw;
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
    }
`

const MenuContainer = styled.div`
    width: auto;
    height: auto;
    padding: 5px 25px;
    background-color: #151515;
    font-family: 'Lato', sans-serif;
    color: #ffffff;
    font-size: 17px;
    font-weight: 700;
    border-radius: 0 0 0 20px;
    position: fixed;
    top: 10vh;
    left: 92vw;
    display: ${props=>!props.menu ? "flex" : "none"};
`