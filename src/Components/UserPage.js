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
        axios.get("http://localhost:5000/users", {query: e.target.value})
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
                <ion />
                <img />
            </UserIcon>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
width: 100%;

`