import { Link } from "react-router-dom"
import styled from "styled-components"

export default function SignupPage() {
    return (

        <SignupPageContainer>
            <SignupPageLeft>
                <h2>linkr</h2>
                <p>save, share and discover the best links on the web</p>
            </SignupPageLeft>
            <SignupPageRight>
                <input placeholder="e-mail"/>
                <input placeholder="password"/>
                <input placeholder="username"/>
                <input placeholder="picture url"/>
                <button>Sign Up</button>
                <Link><p>Switch back to login</p></Link>
                
            </SignupPageRight>
        </SignupPageContainer>
    )
}

const SignupPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const SignupPageLeft = styled.div`
    width: 60vw;
    height: 100vh;
    background-color: #151515;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding-left: 10vw;
    position: fixed;
    top: 0;
    left: 0;

    h2 {
        font-family: 'Passion One', cursive;
        font-weight: 700;
        font-size: 100px;
    }

    p {
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 45px;
        line-height: 60px;
        width: 25vw;
    }
    color: #ffffff;

    @media (max-width: 800px) {
        width: 100%;
        height: 25vh;
        align-items: center;
        padding-left: 0;

        h2 {
            font-size: 70px;
        }

        p {
            font-size: 23px;
            line-height: 34px;
            width: 80%;
            text-align: center;
        }
        color: #ffffff;
    }
`

const SignupPageRight = styled.div`
    width: 40vw;
    height: 100vh;
    background-color: #333333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 60vw;

    input {
        width: 30vw;
        height: 7vh;
        margin: 8px 0;
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 25px;
        color: #9f9f9f;
        border-radius: 6px;
        ::placeholder,
        ::-webkit-input-placeholder {
            padding-left: 20px;
        }
    }

    button {
        width: 30.3vw;
        height: 8vh;
        margin: 8px 0;
        background-color: #1877f2;
        border-radius: 6px;
        color: #ffffff;

        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 25px;
    }

    p {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px; 
        color: #ffffff;
        text-decoration: underline;
        text-decoration-color: #ffffff;
    }

    @media (max-width: 800px) {
        width: 100%;
        height: 75vh;
        top: 25vh;
        left: 0;

        input {
            width: 90vw;
        }

        button {
            width: 90.3vw;
        }
    }
`