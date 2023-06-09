import styled from "styled-components"
import Heart from "../../Assets/icons8-heart-100.png"
import HeartRed from "../../Assets/icons8-heart-100 (1).png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import trash from "../../Assets/trash-outline.svg";
import pencil from "../../Assets/icons8-edit.svg";
import comment from "../../Assets/chatbubble-ellipses-outline.svg";
import send from "../../Assets/send-outline.svg";
import  Modal  from "react-modal";

export default function TimelinesPosts({header, picture}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [posts, setPosts] = useState([]);
    const [ownerId, setOwnerId] = useState();
    const [editingPost, setEditingPost] = useState(null);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [comments, setComments] = useState([]);
    const [newDescription, setNewDescription] = useState('');
    const [newComment, setNewComment] = useState('');
    let navigate = useNavigate()
    useEffect(
        () => {            
            axios.get(`http://localhost:5000/info`, header)
            .then(
                (res) => {
                    setOwnerId(res.data.id);
                }
            )
            .catch(
                (err) => {
                    console.log(err);
                    alert(err.response)
                }
            )
        }
    , [])

    useEffect(
        () => {
            axios.get(`http://localhost:5000/content`, header)
            .then(
                (res) => {                    
                    setPosts(res.data);
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
        }
    , [])


    function openPage(link){
        window.open(link, '_blank')
    }

    function deletePost(postId){
        axios.delete(`http://localhost:5000/content/${postId}`, header)
        .then(res=>{
            window.location.reload();
        })
        .catch(err=> {
            alert("It wasn't possible to delete the post, try again")
        })
    }

    function handleModal(){
        if(modalIsOpen){
            setModalIsOpen(false);
        } else{
            setModalIsOpen(true);
        }
    }

    function editPost(id, description){
        setEditingPost(id);
        setNewDescription(description);
    }

    function sendNewPost(link){
        const body ={
            postId: editingPost,
            link: link,
            description: newDescription 
        }

        axios.put(`http://localhost:5000/content`, body, header)
        .then(res=>{
            window.location.reload();
        })
        .catch(err=> {
            alert(err.response.message)
        })
    }


    const customModalStyles = {
        overlay: {
          backgroundColor: 'rgba(255, 255, 255, 0.75)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        content: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '700px',
          width: '100%',
          maxHeight: '30vh',
          padding: '20px',
          borderRadius: '50px',
          backgroundColor: '#333333',
          borderColor: '#333333',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
        },
      };

      function handleLike(idPost, currentState){
        if(currentState){
            console.log('teste');
            axios.delete(`http://localhost:5000/like/${idPost}`, header)
            .then(res=>{
                console.log(res)
                window.location.reload();
            })
            .catch(err=> {
                console.log(err.message)
            })
        } else{
            const body = {
                idPost: idPost
            }
            axios.post("http://localhost:5000/like", body, header)
            .then(res=>{
                window.location.reload();
            })
            .catch(err=> {
                console.log(err);
                return alert(err.response.data);
            })
        }
      }

      function handleComment(postID){
        axios.get(`http://localhost:5000/comment/${postID}`, header)
            .then(
                (res) => { 
                    setSelectedPostId(postID);                   
                    setComments(res.data);
                    console.log(res.data);
                }
            )
            .catch(
                (err) => {
                    console.log(err)
                }
            )
      }

      function sendComment(postId){
        console.log(newComment);
        const body = {
            idPost: postId,
            comment: newComment
        }
        axios.post("http://localhost:5000/comment", body, header)
            .then(res=>{
                setNewComment('');
                setSelectedPostId(null);
            })
            .catch(err=> {
                return alert(err.response.data);
            })
      }


    return (
        <>
          {posts.length === 0 ? (
            <None>There are no posts yet</None>
          ) : (
            posts.map((post, index) => {
            if (post.idUser === ownerId) {
              return (
                <>
                    <TimelinePostElementContainer data-test="post" key={index}>
                    <FotoContainer>
                        <img src={post.foto} />
                        <LikeContainer>
                        <img src={post.liked ? HeartRed : Heart} onClick={() => {handleLike(post.id, post.liked)}} />
                        <p>{post.likes} likes</p>
                        <img src={ comment } onClick={() => {handleComment(post.id)}} />
                        <p>{post.comment} comments</p>
                        </LikeContainer>
                    </FotoContainer>
        
                    <TimelinePostInfoContainer>
                        <Top>
                        <h2 data-test="username">{post.username}</h2>
                        <Icons>
                            <img onClick={() => {editPost(post.id, post.description)}} src={pencil} />
                            <img onClick={() => handleModal(post.id)} src={trash} />
                            <Modal
                            isOpen={modalIsOpen}
                            onRequestClose={handleModal}
                            style={customModalStyles}
                            contentLabel="Modal"
                            >
                                <Box>
                                    <h2>Are you sure you want to delete this post?</h2>
                                    <Buttons>
                                        <button onClick={handleModal}>No, go back</button>
                                        <button onClick={() => deletePost(post.id)}>Yes, delete it</button>
                                    </Buttons>
                                </Box>
                            </Modal>
                        </Icons>
                        </Top>
                        {editingPost === post.id ? (
                            <input
                            type="text"
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            onBlur={() => {sendNewPost(post.link)}}
                            />
                        ): (
                            <p data-test="description">{post.description}</p>   
                        )} 
                        <SnippetContainer data-test="link" onClick={() => { openPage(post.link) }}>
                        <div>
                            <h2>{post.metaTitle}</h2>
                            <p>{post.metaDescription}</p>
                            <a href={post.link}>{post.link}</a>
                        </div>
                        <img src={post.metaImg} />
                        </SnippetContainer>
                    </TimelinePostInfoContainer>
                    </TimelinePostElementContainer>
                    {selectedPostId === post.id ? (
                        <Comments>
                            <Profile src={picture} />
                            <input onChange={(e) => setNewComment(e.target.value)} placeholder="write a comment"></input>
                            <SendIcon onClick={() => {sendComment(post.id)}} src={send} />
                        </Comments>
                    ) :(
                        <></>
                    )
                    
                    }

                </>
              );
            } else {
              return (
                <>
                    <TimelinePostElementContainer data-test="post" key={index}>
                    <FotoContainer>
                        <img src={post.foto} />
                        <LikeContainer>
                        <img src={post.liked ? HeartRed : Heart} onClick={() => {handleLike(post.id, post.liked)}} />
                        <p>{post.likes} likes</p>
                        <img src={ comment } onClick={() => {handleComment(post.id)}} />
                        <p>{post.comment} comments</p>
                        </LikeContainer>
                    </FotoContainer>
        
                    <TimelinePostInfoContainer>
                        <h2 data-test="username">{post.username}</h2>
                        <p data-test="description">{post.description}</p>
                        <SnippetContainer data-test="link" onClick={() => { openPage(post.link) }}>
                        <div>
                            <h2>{post.metatitle}</h2>
                            <p>{post.metaDescription}</p>
                            <a href={post.link}>{post.link}</a>
                        </div>
                        <img src={post.metaImg} />
                        </SnippetContainer>
                    </TimelinePostInfoContainer>
                    </TimelinePostElementContainer>
                    {selectedPostId === post.id ? (
                        <Comments>
                            <Profile src={picture} />
                            <input onChange={(e) => setNewComment(e.target.value)} placeholder="write a comment"></input>
                            <SendIcon onClick={() => {sendComment(post.id)}} src={send} />
                        </Comments>
                    ) :(
                        <></>
                    )
                    
                    }
                </>
              );
            }
          }))}
        </>
      )
}

const None = styled.p`
    font-family: 'Oswald';
    font-size: 24px;
    color: #FFFFFF;
`

const Profile = styled.img`
    width: 39px;
    height: 39px;
    border-radius: 100%;
`


const SendIcon = styled.img`
    width: 14px;
`

const Comments = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 72%;
    min-height: 83px;
    background-color: #1e1e1e;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    font-family: 'Lato';
    color: white;
    input{
        width: 83%;
        height: 39px;   
        background-color: #252525;
        border-color: #252525;
        border: 0px;
        font-family: 'Lato';
        color: white;
        border-radius: 8px;
        text-indent: 15px;
        word-break: break-all;
    }
`

const TimelinePostElementContainer = styled.div`
    width: 70%;
    min-width: 500px;
    height: 280px;
    display:flex;
    align-items: center;
    padding: 10px 15px;
    margin-top: 20px;
    background-color: #151515;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Box = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    text-align: center;
    h2{
        font-family: 'Lato';
        font-size: 34px;
        color: #FFFFFF;
        margin-bottom: 18%;
    }
`

const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 34px;
    button{
        border-radius: 5px;
        width: 23%;
        background-color: #1877F2;
        border-color: #1877F2;
        color: #FFFFFF;
        font-family: 'Lato';
        font-weight: 700;
        font-size: 18px;
    }

    button:first-child{
        background-color: #FFFFFF;
        border-color: #FFFFFF;
        color: #1877F2;
    }
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    img{
        width: 27px;
        margin-right: 15px;
    }
`

const Icons = styled.div`
    margin-top: 10px;
`

const FotoContainer = styled.div`
    width: 60px;
    height: 280px;
    display: flex;
    flex-direction: column;
    align-items: center;
    

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin: 8px 0;
    }
`

const LikeContainer = styled.div`
    width: 131%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 0;

    img {
        width: 25px;
        height: 25px;
    }

    p {
        font-family: 'Lato', sans-serif;
        font-size: 11px;
        font-weight: 300;
        color: #ffffff;
    }
`

const TimelinePostInfoContainer = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10px;

    h2 {
        height: 40px;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: 400;
        color: #cccccc;
        display: flex;
        align-items: center;
    }

    p {
        height: 60px;
        font-family: 'Lato', sans-serif;
        font-size: 17px;
        font-weight: 400;
        color: #cccccc;
        padding: 10px 0 0 0;
    }

    input{
        margin-bottom: 15px;
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
        border-right: solid 1px #4d4d4d;
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