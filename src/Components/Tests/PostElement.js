import styled from "styled-components";
import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"

export default function PostElement({header, picture}) {
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [disabled, setDisabled] = useState(false);
    let navigate = useNavigate()

    function sendPost(){
        setDisabled(true);
        if(link.length === 0){
            setDisabled(false);
            return alert('Você deve preencher o link');
        }
        const body = {
            link: link,
            description: description
        }

        axios.post("https://linkr-nb8w.onrender.com/content", body, header)
        .then(res=>{
            navigate("/timeline");
            setDisabled(false);
            return alert('postado com sucesso');
        })
        .catch(err=> {
            console.log(err);
            setDisabled(false);
            return alert(err.response.data);
        })
    }
    return(
        <TestPagePostElementContainer data-test="publish-box">
            <TestPagePostInfosContainer>
                <FotoContainer>
                    <img src={picture} />
                </FotoContainer>
                <PostInfoContainer>
                    <h2>What are you going to share today?</h2>
                    <input data-test="link" placeholder="https://..."onChange={(event) => setLink(event.target.value)}></input>
                    <textarea data-test="description" cols={40} rows={4} placeholder="Awesome article about ..." onChange={(event) => setDescription(event.target.value)}></textarea>
                </PostInfoContainer>
            </TestPagePostInfosContainer>
            <TestPagePostButtonContainer>
                <button disabled={disabled} cor={disabled} onClick={sendPost}>Publish</button>
            </TestPagePostButtonContainer>
        </TestPagePostElementContainer>
    )
}

const TestPagePostElementContainer = styled.div`
    width: 70%;
    height: 210px;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 15px;
    margin-top: 10px;
    background-color: #ffffff;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const TestPagePostInfosContainer = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
`

const FotoContainer = styled.div`
    width: 60px;
    height: 160px;
    display: flex;
    justify-content: center;
    padding: 8px 0;

    img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
`

const PostInfoContainer = styled.div`
    width: 100%;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 15px 0 0 0;

    h2 {
        height: 40px;
        font-family: 'Lato', sans-serif;
        font-size: 20px;
        font-weight: 300;
        color: #707070;
    }

    input {
        width: 100%;
        height: 30px;
        background: #efefef;
        border-radius: 5px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 300;
        color: #949494;

        ::placeholder,
        ::-webkit-input-placeholder {
            padding-left: 13px;
        }
    }

    textarea {
        width: 100%;
        height: 65px;
        background-color: #efefef;
        border-radius: 5px;
        border: none;
        font-family: 'Lato', sans-serif;
        font-size: 15px;
        font-weight: 300;
        color: #949494;

        ::placeholder,
        ::-webkit-input-placeholder {
            padding:5px 13px;
        }
    }
`

const TestPagePostButtonContainer = styled.div`
    width: 100%;
    height: 50px;
    display: flex; 
    justify-content: flex-end;
    align-items: center;
    margin-top: 20px;
    padding-right: 15px;

    button {
        width: 112px;
        height: 31px;
        background-color: ${props=>props.cor ? "hsl(218, 87%, 57%)" : "#1877f2"};
        border-radius: 5px;
        border: none;

        font-size: 14px;
        color: #ffffff;
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        
    }
`