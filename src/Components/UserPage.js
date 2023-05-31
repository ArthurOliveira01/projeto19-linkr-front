
import { useEffect } from "react";
import { useParams } from "react-router-dom";


export function UserPage(){

    const [posts, setPosts] = useState([]);
    const [trending, setTrending] = useState([]);
    const { id } = useParams();

    useEffect(
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
    , [])
   

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
                    {
                        posts.map(
                            p => <Post />
                        )
                    }
                </PostContainer>
                <TrendingContainer>
                    <h1>trending</h1>
                    <ul>
                        {
                            trending.map(
                                (t) => <TrendItem />
                            )
                        }
                    </ul>
                </TrendingContainer>
            </ContentWrapper>
        </Main>
        </>
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
                {
                    users.map(
                        (u) => <User />
                    )
                }
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