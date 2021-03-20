import React from 'react'
import styled from 'styled-components'
import Logo from '../image/CryptoNews.png'

const Container = styled.div`
    display:flex;
    align-items:center;
    width:100%;
    height:70px;
    background-color:#111144;
`

const Img = styled.img`
    margin-left:20px;
    margin-top:5px;
`

function Header() {
    return (
        <Container>
            <Img src={Logo} alt='logo'/>
        </Container>
    )
}

export default Header;