import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"
import { LogoutMenu } from "./LogoutMenu"
import PostElement from "./Tests/PostElement"
import TimelinesPosts from "./Tests/TimelinePostElement"
import Hashtag from "./Tests/HashtagsElement"
import { HeaderTestPage } from "./HeaderTestPage";

export default function HashTagPage () {
    const [menu, setMenu] = useState(true)
    const [hashtags, setHashtags] = useState()
    const [top, setTop] = useState()

    useEffect(()=>{
        axios.get("https://linkr-nb8w.onrender.com/hashtags")
        .then(res=>{
            setHashtags(res.data)
            setTop(res.data[0].hashtag)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    function exitMenu() {
        if(!menu) setMenu(true)
    }

    return (
        <HashTagPageContainer>
           <HeaderTestPage />

            <HahshtagPagePostsContainer>
                <h1># {top && top}</h1>
                <TimelinesPosts/>
            </HahshtagPagePostsContainer>

            <Hashtag hashtags={hashtags}/>
            
        </HashTagPageContainer>
    )
}

const HashTagPageContainer = styled.div`
    width: 100%;
    height: auto;
    min-height: 100vh;
    background-color: #333333;
    display: flex;
    overflow: scroll;
`

const HashtagPageHeader = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #151515;
    position: fixed;
    top: 0;
    left: 0;
`


const HahshtagPagePostsContainer = styled.div`
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
/*  <HashtagPageHeader>
                <LogoutMenu menu={menu} setMenu={setMenu}/>
            </HashtagPageHeader> */