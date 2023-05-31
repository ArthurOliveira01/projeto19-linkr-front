import styled from "styled-components"
import { LogoutMenu } from "../LogoutMenu"
import { useState } from "react"

export function TestPage() {

    const [menu, setMenu] = useState(true)

    function exitMenu() {
        if(!menu) setMenu(true)
    }

    return (
        <TestPageContainer onClick={exitMenu}>
            <TestPageHeader onClick={exitMenu}>
                <LogoutMenu menu={menu} setMenu={setMenu}/>
            </TestPageHeader>
        </TestPageContainer>
    )
}

const TestPageContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cccccc;
`

const TestPageHeader = styled.div`
    width: 100%;
    height: 10vh;
    background-color: #151515;
`