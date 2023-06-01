import styled from "styled-components"
import { LogoutMenu } from "../LogoutMenu"
import { useEffect, useState } from "react"
import PostElement from "./PostElement"
import Hashtag from "./HashtagsElement"
import TimelinesPosts from "./TimelinePostElement"
import axios from "axios"

export function TestPage() {

    const [menu, setMenu] = useState(true)
    const [hashtags, setHashtags] = useState()

    useEffect(()=>{
        axios.get("http://localhost:5000/hashtags")
        .then(res=>{
            setHashtags(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

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
                <TimelinesPosts/>
                <TimelinesPosts/>
                <TimelinesPosts/>
            </TestPagePostsContainer>


            
            <Hashtag hashtags={hashtags}/>

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
