
import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import PostElement from "./Tests/PostElement";
import TimelinesPosts from "./Tests/TimelinePostElement";
import { HeaderTestPage } from "./HeaderTestPage";


export function TimelinePage(){
    const [picture, setPicture] = useState('');
    const local = localStorage.getItem('token');
    const header = { headers: { Authorization: `Bearer ${local}` } };
    useEffect(
        () => {
            axios.get(`http://localhost:5000/info`, header)
            .then(
                (res) => {
                    setPicture(res.data.foto);
                }
            )
            .catch(
                (err) => {
                    alert(err.response.message)
                }
            )
        }
    , [])
   

    return(
        <>
        <HeaderTestPage picture={picture} />
        <Main>
            <InfoContainer>
                <h1>timeline</h1>
            </InfoContainer>
            <PostContent>
                <PostElement header={header} picture={picture} />
            </PostContent>
            <ContentWrapper>
                <TimelinesPosts header={header} />
            </ContentWrapper>
        </Main>
        </>
    )
}

const Main = styled.main`
background: #333333;
width: 100%;
min-height: 99vh;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 15px;
gap: 41px;
`
const PostContent = styled.div`
width: 65%;
display: flex;
gap: 2.6%;
justify-content: center;

`

const InfoContainer = styled.div`
width: 45.5%;
text-align: center;
display: flex;
justify-content: left;
gap: 18px;
h1{
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #FFFFFF;
}

img{
    width: 50px;
    height: 50px;
    border-radius: 100%;
}
`

const ContentWrapper = styled.div`
width: 65%;
display: flex;
gap: 2.6%;
align-items: center;
flex-direction: column;
`
