import styled from "styled-components"

export default function Hashtag({hashtags}) {

    function show() {
        console.log(hashtags)
    }

    return (
        <HashtagsContainer>
                <HashtagElement>
                    <HashtagTitleContainer>
                        <h2>trending</h2>
                    </HashtagTitleContainer>
                    <HashtagItensContainer>
                        {hashtags && hashtags.map(el=> <p id={el.hashtag}># {el.hashtag}</p>)}
                    </HashtagItensContainer>
                    
                </HashtagElement>
            </HashtagsContainer>
    )
}

const HashtagsContainer = styled.div`
    width: 40vw;
    height: auto;
    margin-top: 10vh;    
`

const HashtagElement = styled.div`
    width: 25vw;
    height: 45vh;
    background-color: #171717;
    margin-top: 15vh;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 10px;    
`

const HashtagTitleContainer = styled.div`
    width: 25vw;
    height: 7vh;
    /* background-color: blue */;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #484848;
    
    h2 {
        font-family: 'Oswald', sans-serif;
        font-size: 27px;
        font-weight: 700;
        line-height: 27px;
        color: #ffffff;
        padding-left: 16px;
        
    }
`

const HashtagItensContainer = styled.div`
    width: 25vw;
    height: 38vh;
    display: flex;
    flex-direction: column;
    margin-top: 1.5vh;

    p {
        font-family: 'Lato', sans-serif;
        font-size: 19px;
        font-weight: 700;
        line-height: 27px;
        color: #ffffff;
        padding-left: 16px;
    }
`