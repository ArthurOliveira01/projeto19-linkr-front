import { useState } from "react"
import styled from "styled-components"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

export default function SigninPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [disabled, setDisabled] = useState(false)
    let navigate = useNavigate()

    function submit() {
        setDisabled(true)
        if(!email || !password) {
            setDisabled(false)
            return alert('Todas as informações são necessárias para login')}
        const body = {email: email, password: password}

        axios.post("https://linkr-nb8w.onrender.com/", body)
        .then(res=>{
            let tab = res.data
            tab = tab.token;
            const token = `${tab}`
            console.log(token);
            localStorage.setItem("token", token)
            navigate("/timeline")
        })
        .catch(err=> {
            if(err.response.status === 404) alert('E-mail informado não encontrado')
            if(err.response.status === 409) alert('Senha incorreta')
            setDisabled(false)
        })
    }

    return (
        <SigninPageContainer>
            <SigninPageLeft>
                <h2>linkr</h2>
                <p>save, share and discover the best links on the web</p>
            </SigninPageLeft>
            <SigninPageRight>
                <input data-test="email" placeholder="e-mail" value={email} onChange={e=>setEmail(e.target.value)}/>
                <input data-test="password" placeholder="password" value={password} onChange={e=>setPassword(e.target.value)}/>
                <But data-test="login-btn" onClick={submit} disabled={disabled} cor={disabled}>Sign In</But>
                <Link data-test="sign-up-link" to="/sign-up"><p>First time? Create an account!</p></Link>
            </SigninPageRight>
        </SigninPageContainer>
    )
}

const SigninPageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

const SigninPageLeft = styled.div`
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

const SigninPageRight = styled.div`
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

    p {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 24px; 
        color: #ffffff;
        text-decoration: underline;
        text-decoration-color: #ffffff;
    }
    color: #ffffff;
    @media (max-width: 800px) {
        width: 100%;
        height: 75vh;
        top: 25vh;
        left: 0;
        justify-content: flex-start;
        padding-top: 60px;
        input {
            width: 90vw;

        }
    }
`

const But = styled.button`
    width: 30.3vw;
    height: 8vh;
    margin: 8px 0;
    background: ${props=>props.cor ? "#cccccc" : "#1877f2"};
    border-radius: 6px;
    color: #ffffff;

    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 25px;

    @media (max-width: 800px) {
        width: 90.3vw;
    }
`