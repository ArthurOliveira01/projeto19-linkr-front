import styled from "styled-components"
import { LogoutMenu } from "../LogoutMenu"
import { useState } from "react"

export function TestPage() {

    const [menu, setMenu] = useState(true)

    function exitMenu() {
        if(!menu) setMenu(true)
    }

    return (
        <TestPageContainer onClick={exitMenu}>
            <TestPageHeader onClick={exitMenu}>
                <LogoutMenu menu={menu} setMenu={setMenu}/>
            </TestPageHeader>
            <TestPagePostsContainer>
                <h1>timeline</h1>
                <TestPagePostElementContainer>
                    <TestPagePostInfosContainer>
                        <FotoContainer>
                            <img src="https://images2.alphacoders.com/649/649995.jpg"/>
                        </FotoContainer>
                        <PostInfoContainer>
                            <h2>What are you going to share today?</h2>
                            <input placeholder="https://..."></input>
                            <textarea cols={40} rows={4} placeholder="Awesome article about ..."></textarea>
                        </PostInfoContainer>
                    </TestPagePostInfosContainer>
                    <TestPagePostButtonContainer>
                        <button>Publish</button>
                    </TestPagePostButtonContainer>
                </TestPagePostElementContainer>
            </TestPagePostsContainer>
        </TestPageContainer>
    )
}

const TestPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cccccc;
`

const TestPageHeader = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #151515;
`

const TestPagePostsContainer = styled.div`
    width: 60vw;
    height: 90vh;
    position: fixed;
    top: 10vh;
    left: 0;
    background-color: #333333;

    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 0 10px;

    h1 {
        width: 70%;
        padding: 30px 25px;
        font-size: 43px;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        line-height: 64px;
        color: #ffffff;
    }
`

const TestPagePostElementContainer = styled.div`
    width: 70%;
    height: 210px;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const TestPagePostInfosContainer = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
`

const TestPagePostButtonContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex; 
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    padding-right: 15px;

    button {
        width: 112px;
        height: 31px;
        background: #1877f2;
        border-radius: 5px;
        border: none;

        font-size: 14px;
        color: #ffffff;
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        
    }
`

const FotoContainer = styled.div`
    width: 60px;
    height: 160px;
    display: flex;
    justify-content: center;
    padding: 8px 0;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`

const PostInfoContainer = styled.div`
    width: 460px;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 0 0 0;

    h2 {
        height: 40px;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: 300;
        color: #707070;
    }

    input {
        width: 460px;
        height: 30px;
        background: #efefef;
        border-radius: 5px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 300;
        color: #949494;

        ::placeholder,
        ::-webkit-input-placeholder {
            padding-left: 13px;
        }
    }

    textarea {
        width: 100%;
        height: 65px;
        background-color: #efefef;
        border-radius: 5px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 300;
        color: #949494;

        ::placeholder,
        ::-webkit-input-placeholder {
            padding:5px 13px;
        }
    }
`
