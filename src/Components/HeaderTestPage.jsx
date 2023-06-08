import { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';

export const HeaderTestPage = () => {

    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [logout, setLogout] = useState(false);
    const navigate = useNavigate();

    function handleLogout(e){
        if(logout === false){
            setLogout(true)
        }
        else{
            setLogout(false)
        }
    }

    useEffect(() => {console.log(users)}, [users])

    function searchusers(e){
        console.log(e.target.value)
        axios.get("http://localhost:5000/users", {headers: {search: e.target.value}})
        .then(
            (res) => {
                setUsers(res.data)
            }
        )
        .catch(
            (err) => {alert(err.response.status)}
        )
    }

    function logoutfunc(){
        localStorage.setItem("token", "");
        navigate("/");
    }


    return(
        <HeaderContainer>
            <h1>linkr</h1>
            <SearchContainer search={users}>
            <DebounceInput minLength={3} debounceTimeout={300} onChange={searchusers} type="text" name="search" placeholder="Search for people" />
            {users.length === 0 ?
            <></>:
            <UserList>
                {users.map(
                    (u) => <User name={u.name} foto={u.foto} />
                )}
                </UserList>}
            </SearchContainer>
            <UserIcon>
            <ion-icon onClick={handleLogout} name="chevron-down-outline"></ion-icon>
            <img src="https://i.imgur.com/RBviXsl.jpeg" />
            {logout ? <LogoutDiv onClick={logoutfunc}>Logout</LogoutDiv> : <></>}
            </UserIcon>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
position: fixed;
z-index: 1000;
top: 0;
width: 100%;
height: 72px;
background: #151515;
display: flex;
padding-left: 28px;
padding-right: 28px;
align-items: center;
justify-content: space-between;
box-sizing: border-box;

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
position: relative;
width: 40%;
@media (max-width: 768px) {
    display: none;
  }
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

const UserIcon = styled.div`
position: relative;
display: flex;
height: 53px;
img{
    width: 53px;
height: 53px;
border-radius: 100%;

}

ion-icon{
    color: white;
    font-size: 32px;
    align-self: center;
}
`

const LogoutDiv = styled.div`
position: absolute;
top: 53px;
border-radius: 0px 0px 20px 20px;
height: 47px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Lato';
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 20px;
letter-spacing: 0.05em;

color: #FFFFFF;
background:#171717;
`

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
            <img src={props.foto} />
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