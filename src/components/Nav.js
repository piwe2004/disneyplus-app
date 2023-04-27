import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const NavWrapper = styled.nav`
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:70px;
  background-color:${props => props.handleShow ? "#090b13" : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 36px;
  letter-spacing:16px;
  z-index:3;
`;

const Logo = styled.a`
  padding:0;
  width:80px;
  margin-top:4px;
  max-height:70px;
  font-size:0;
  display:inline-block;
  img{
    display: block;
    width:100%;
  }
`

function Nav() {

  const [handleShow, setHandleShow] = useState(false)

  useEffect(() => {
      window.addEventListener('scroll', (e)=> {
        if(window.scrollY > 1){
            setHandleShow(true)
        }else{
          setHandleShow(false)
        }
      })
    return () => {
      window.removeEventListener('scroll', ()=>{})
    }
  }, [])
  
  return (
    <NavWrapper handleShow={handleShow}>
      <Logo>
        <img alt="Disney Plus Logo" src="/images/logo.svg" onClick={()=>(window.location.href="/")} />
      </Logo>
    </NavWrapper>
  )
}

export default Nav
