import styled from "styled-components"
import { LogoutMenu } from "../LogoutMenu"
import { useState } from "react"
import PostElement from "./PostElement"
import Hashtag from "./HashtagsElement"

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
                    <PostElement/>
                </TestPagePostsContainer>
                
                <Hashtag/>

        </TestPageContainer>
    )
}

const TestPageContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #333333;
    display: flex;
    overflow: scroll;
   /*  flex-direction: column; */

    
`

const TestPageHeader = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #151515;
    position: fixed;
    top: 0;
    left: 0;
`

const TestPagePostsContainer = styled.div`
    width: 60vw;
    height: auto;
    margin-top: 10vh;
    /* position: fixed;
    top: 10vh;
    left: 0; */

    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 0 15px 0 0;

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