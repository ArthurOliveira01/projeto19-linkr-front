
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import PostElement from "./Tests/PostElement";
import TimelinesPosts from "./Tests/TimelinePostElement";
import arrowUp from "../Assets/arrow-142-32.png";
import arrowDown from "../Assets/arrow-204-32.png";



export function TimelinePage({token, setToken}){

    const [picture, setPicture] = useState('');
    setToken('8403e4f7-dd67-4455-b2d0-8c245210cc32');
    console.log(token);
    const header = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(
        () => {
            console.log(header);
            axios.get(`http://localhost:5000/info`, header)
            .then(
                (res) => {
                    setPicture(res.data.foto);
                    console.log(picture);
                    console.log(res.data.foto);
                }
            )
            .catch(
                (err) => {
                    alert(err.response.status)
                }
            )
        }
    , [])
   

    return(
        <>
        <Header picture={picture} />
        <Main>
            <InfoContainer>
                <h1>timeline</h1>
            </InfoContainer>
            <PostContent>
                <PostElement header={header} />
            </PostContent>
            <ContentWrapper>
                <TimelinesPosts />
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

const Header = (props) => {

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
                <Arrow src={arrowDown} />
                <img src={props.picture} />
            </UserIcon>
        </HeaderContainer>
    )
}

const Arrow = styled.img`
    width: 40px;
    height: 40px;
    left: 50%;
    top: 50%;
`

const HeaderContainer = styled.header`
width: 100%;
height: 72px;
background: #151515;
display: flex;
padding-left: 28px;
padding-right: 28px;
align-items: center;
justify-content: space-evenly;

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
    display: flex;
    width: 80%;
    justify-content: center;

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

img:last-child{
    width: 53px;
    height: 53px;
    border-radius: 100%;
    margin-left: 15px;
}
`

const UserList = styled.div`

`