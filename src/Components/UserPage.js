
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";


export function UserPage(){

    const [posts, setPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    /* const { id } = useParams(); */

    /* useEffect(
        () => {
            axios.get(`http://localhost:5000/users/${id}`)
            .then(
                (res) => {
                    setPosts(res.data.posts)
                }
            )
            .catch(
                (err) => {
                    alert(err.response.status)
                }
            )
        }
    , []) */
   

    return(
        <>
        <Header />
        <Main>
            <InfoContainer>
                <img />
                <h1>(user)'s posts</h1>
            </InfoContainer>
            <ContentWrapper>
                <PostContainer>
                    <Post name="Juvenal Juvêncio" text="Muito maneiro esse tutorial de Material UI com React, deem uma olhada!" hashtags="#react #material" />
                    <Post name="Juvenal Juvêncio" text="Muito maneiro esse tutorial de Material UI com React, deem uma olhada!" hashtags="#react #material" />
                </PostContainer>
                <TrendingContainer>
                    <h1>trending</h1>
                    <ul>
                        <TrendItem trend="trend1" />
                        <TrendItem trend="trend2" />
                        <TrendItem trend="trend3" />
                        <TrendItem trend="trend4" />
                        <TrendItem trend="trend5" />
                        <TrendItem trend="trend6" />
                    </ul>
                </TrendingContainer>
            </ContentWrapper>
        </Main>
        </>
    )
}

const Main = styled.main`
background: #333333;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 50px;
gap: 41px;
`

const InfoContainer = styled.div`
width: 65%;
text-align: center;
display: flex;
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

`

const PostContainer = styled.div`
width: 65%;
display: flex;
flex-direction: column;
gap: 16px;
`

const Post = (props) => {

    return(
        <PostWrapper>
        <ImgandLikes>
        <img />
        <ion />
        <h4>13 likes</h4>
        </ImgandLikes>
        <PostContentWrapper>
            <h1>{props.name}</h1>
            <h2>{props.text} <span>{props.hashtags}</span></h2>
        </PostContentWrapper>
        </PostWrapper>
    )
}

const PostWrapper = styled.article`
width: 100%;
background: #171717;
border-radius: 16px;
height: 276px;
display: flex;
padding: 3%;
gap: 3%;

`

const ImgandLikes = styled.div`
display: flex;
flex-direction: column;
gap: 19px;
width: 8.1%;
img{
width: 50px;
height: 50px;
border-radius: 100%;
}

h4{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
text-align: center;
color: white;
}

`

const PostContentWrapper = styled.div`
width: 82.9%;
display: flex;
flex-direction: column;
gap: 7px;
h1{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
color: white;
}

h2{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;

color: #B7B7B7;
}

span{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: white;
    font-weight: bold;
    }
`

const TrendingContainer = styled.div`
width: 32.4%;
height: 406px;
background: #171717;
border-radius: 16px;
display: flex;
flex-direction: column;
gap: 22px;
padding-right: 5.3%;
h1{
    font-family: 'Oswald';
font-style: normal;
font-weight: 700;
font-size: 27px;
line-height: 40px;
color: #FFFFFF;
}

ul{
    text-decoration: none;
}

li{
    font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 19px;
line-height: 23px;
letter-spacing: 0.05em;

color: #FFFFFF;
}
`

const TrendItem = (props) => {
    return(
        <li>
            # {props.trend}
        </li>
    )
}

const Header = () => {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([])

function searchusers(e){
        axios.get("http://localhost:5000/users", {search: e.target.value})
        .then(
            (res) => {
                setUsers(res.data)
            }
        )
        .catch(
            (err) => {alert(err.response.status)}
        )
    }


    return(
        <HeaderContainer>
            <h1>linkr</h1>
            <SearchContainer>
            <input onChange={searchusers} type="text" name="search" placeholder="Search for people" />
            {users.length === 0 ?
            <></>:
            <UserList>
                </UserList>}
            </SearchContainer>
            <UserIcon>
                <img />
            </UserIcon>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
width: 100%;
height: 72px;
background: #151515;
display: flex;
padding-left: 28px;
padding-right: 28px;
align-items: center;
justify-content: space-between;

h1{
    font-family: 'Passion One';
font-style: normal;
font-weight: 700;
font-size: 49px;
line-height: 54px;
letter-spacing: 0.05em;
color: #FFFFFF;
}


`

const SearchContainer = styled.div`

input{
    width: 40%;
    height: 45px;
    background: white;
    border-radius: 8px;
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
color: #C6C6C6;
padding-right: 14px;
display: flex;
align-items: center;
}
`

const UserIcon = styled.div`
display: flex;

img{
    width: 53px;
height: 53px;
border-radius: 100%;

}
`

const UserList = styled.div`

`