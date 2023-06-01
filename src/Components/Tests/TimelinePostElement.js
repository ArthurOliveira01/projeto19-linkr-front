import styled from "styled-components"
import Heart from "../../Assets/icons8-heart-100.png"
import HeartRed from "../../Assets/icons8-heart-100 (1).png"
import { useState } from "react"

export default function TimelinesPosts() {

    const [liked, setLiked] = useState(false)

    function like() {
        setLiked(!liked)
    }

    return (
        <TimelinePostElementContainer>
            <FotoContainer>
                <img src="https://images2.alphacoders.com/649/649995.jpg"/>
                <LikeContainer>
                    <img src={liked ? HeartRed : Heart} onClick={like}/>
                    <p>10 likes</p>
                </LikeContainer>
            </FotoContainer>

            <TimelinePostInfoContainer>
                <h2>Nome do Usuário</h2>
                <p>Muito maneiro esse tutorial de Material UI com React, deem uma olhada! #react #material</p>
                <SnippetContainer>
                    <div>
                        <h2>Como aplicar o Material UI em um projeto React</h2>
                        <p>Hey! I have moved this tutorial to my personal blog. Same content, new location. Sorry about making you click through to another page</p>
                        <a>https://medium.com/@pshrmn/a-simple-react-router</a>
                    </div>
                    <img src="https://images2.alphacoders.com/649/649995.jpg"/>
                </SnippetContainer>

            </TimelinePostInfoContainer>
        </TimelinePostElementContainer>
    )
}

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
    width: 100%;
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

    
`

const SnippetContainer = styled.div`
    width: 98%;
    height: 170px;
    display: flex;
    margin: 0 0 10px 0;

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