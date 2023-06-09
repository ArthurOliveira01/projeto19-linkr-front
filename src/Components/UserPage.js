import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { HeaderTestPage } from "./HeaderTestPage";
import { DebounceInput } from "react-debounce-input";

export function UserPage(){

    const [posts, setPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([1]);
    const navigate = useNavigate();
    const { id } = useParams(); 
    const [user, setUser]= useState({name: "", img: ""})
    

    useEffect(
        () => {console.log(parseInt(id));
            axios.get(`https://linkr-nb8w.onrender.com/user/${id}`)
            .then(
                (res) => {
                    setPosts(res.data.posts);
                    setUser({name: res.data.name, img: res.data.foto}) 
                }
            )
            .catch(
                (err) => {
                    alert(err.response.status)
                }
            );
            
        }
    , [])

    function searchusers(e){
        console.log(e.target.value);
        axios.get("https://linkr-nb8w.onrender.com/users", {headers: {search: e.target.value}})
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
        <>
        <HeaderTestPage />
        
        <Main>
        <SearchContainer2 search={users}>
            <DebounceInput minLength={3} debounceTimeout={300} onChange={searchusers} type="text" name="search" placeholder="Search for people" />
            {users.length === 0 ?
            <></>:
            <UserList>
                {users.map(
                    (u) => <User name={u.name} foto={u.foto} />
                )}
                </UserList>}
            </SearchContainer2>
            <InfoContainer>
                <img src={user.img} />
                <h1>{user.name}'s posts</h1>
            </InfoContainer>
            <ContentWrapper>
                <PostContainer>
                    {
                        posts.map(
                            (p) => <Post user={user} name={user.name} text={p.description} />
                        )
                    }
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
margin-top: 53px;
flex-direction: column;
align-items: center;
padding-top: 50px;
gap: 41px;
box-sizing: border-box;
`

const InfoContainer = styled.div`
width: 65%;

@media (max-width: 768px) {
    width: 100%;
  }

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
    padding-left: 16px;
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
gap: 5%;
margin-bottom: 16px;
position: relative;
box-sizing: border-box;

@media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`

const PostContainer = styled.div`
width: 65%;
@media (max-width: 768px) {
    width: 100%;
  }
display: flex;
flex-direction: column;
gap: 16px;
box-sizing: border-box;
`

const Post = (props) => {

    return(
        <PostWrapper>
        <ImgandLikes>
        <img src={props.user.img} />
        <ion-icon name="heart-outline"/>
        <h4>13 likes</h4>
        </ImgandLikes>
        <PostContentWrapper>
            <h1>{props.name}</h1>
            <h2>{props.text} <span>{props.hashtags}</span></h2>
            <SnippetContainer data-test="link" onClick={() => { console.log("https://google.com") }}>
                      <div>
                        <h2>Como aplicar o Material UI em um projeto React</h2>
                        <p>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page</p>
                        <a href="https://google.com" target="_blank">https://google.com</a>
                      </div>
                      <img src="https://images2.alphacoders.com/649/649995.jpg" />
            </SnippetContainer>
        </PostContentWrapper>
        </PostWrapper>
    )
}

const PostWrapper = styled.article`
width: 100%;
background: #171717;
border-radius: 16px;
@media (max-width: 768px) {
    border-radius: 0;
    gap: 8%;
  }
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
@media (max-width: 768px) {
    width: 40px;
height: 40px;
  }

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

ion-icon{
    width: 100%;
    display: flex;
    justify-content: center;
    color: white;
    font-size: 20px;
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
@media (max-width: 768px) {
    font-size: 17px;
  }
line-height: 23px;
color: white;
}

h2{
font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 20px;
@media (max-width: 768px) {
    font-size: 15px;
  }
color: #B7B7B7;
}

span{
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    @media (max-width: 768px) {
        font-size: 15px;
      }
    line-height: 20px;
    color: white;
    font-weight: bold;
    }
`

const TrendingWrapper = styled.div`
width: 32.4%;
position: relative;
`

const TrendingContainer = styled.div`
width: 32.4%;
box-sizing: border-box;

@media (max-width: 768px) {
    display: none;
  }

height: 406px;
background: #171717;
border-radius: 16px;
display: flex;
flex-direction: column;
gap: 22px;
padding-left: 5.3%;
box-sizing: border-box;
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

const UserList = styled.div`
width: 100%;
display: flex;
flex-direction: column;
background: #E7E7E7;
border-bottom-right-radius: 8px;
border-bottom-left-radius: 8px;
gap: 20px;
padding-top: 24px;
padding-bottom: 24px;
position: absolute;
top: 100%;
box-sizing: border-box;
z-index: 1000;
`

const User = (props) => {
    return(
        <UserWrapper>
            <img src={props.foto}/>
            <h2>{props.name}</h2>
        </UserWrapper>
    )
}

const UserWrapper = styled.div`
display: flex;
padding-left: 16px;
gap: 12px;
img{
    border-radius: 100%;
    width: 39px;
height: 39px;
}
h2{
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
color: #515151;
}

`
const SearchContainer2 = styled.div`
width: 95%;
position: relative;
@media (max-width: 768px) {
    display: block;
  }
  display: none;
input{
    width: 100%;
    height: 45px;
    background: white;
    border: 0px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: ${props => props.search.length !== 0 ? "0" : "8px"};
    border-bottom-right-radius: ${props => props.search.length !== 0 ? "0" : "8px"};
    font-family: 'Lato';
font-style: normal;
font-weight: 400;
font-size: 19px;
line-height: 23px;
color: #C6C6C6;
padding-right: 14px;
display: flex;
align-items: center;
box-sizing: border-box;
}
`

const SnippetContainer = styled.div`
    width: 98%;
    height: 170px;
    display: flex;
    margin: 0 0 10px 0;
    :hover{
        cursor: pointer;
    }
    div {
        width: calc(100% - 170px);
        border-radius: 11px 0 0 11px;
        border-top: solid 1px #4d4d4d;
        border-left: solid 1px #4d4d4d;
        border-bottom: solid 1px #4d4d4d;
        padding-left: 12px;

        h2 {
            width: 250px;
            font-family: 'Lato', sans-serif;
            font-size: 17px;
            font-weight: 400;
            color: #cecece;

            margin-top: 15px;
        }

        p {
            max-width: 300px;
            font-family: 'Lato', sans-serif;
            font-size: 11px;
            font-weight: 400;
            color: #9b9595;
        }

        a{
            max-width: 300px;
            font-family: 'Lato', sans-serif;
            font-size: 11px;
            font-weight: 400;
            color: #9b9595;
        }
    }

    img {
        width: 170px;
        height: 170px;
        border-radius: 0 11px 11px 0;
    }
`