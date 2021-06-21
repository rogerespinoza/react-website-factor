import React, { useEffect, useState } from "react";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtnLink,
  NavItemBtn
} from "./Navbar.elements";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {Button} from '../../globalStyles';

export default function Navbar() {
  const [button, setButton] = useState(true);
  const [click, setClick] = useState(false);



  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if(window.innerWidth <= 950) {
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  },[])

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={() => setClick(false)}>
              <NavIcon />
              Factor
            </NavLogo>
            <MobileIcon onClick={handleClick} click={click}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu click={click}>
              <NavItem>
                <NavLinks to="/" onClick={() => setClick(false)}>Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services" onClick={() => setClick(false)} >Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products" onClick={() => setClick(false)}>Products</NavLinks>
              </NavItem>

              <NavItemBtn onClick={() => setClick(false)}>
                {
                  // button ? (
                  //   <NavBtnLink to='/sign-up'>
                  //     <Button primary>
                  //       SIGN UP
                  //     </Button>
                  //   </NavBtnLink>
                  // ) 
                  // :
                  // (
                  //   <NavBtnLink to='/sign-up'>
                  //     <Button fontBig primary>
                  //       SIGN UP
                  //     </Button>
                  //   </NavBtnLink>
                  // )
                }
                <NavBtnLink  to='/sign-up'>
                  <Button fontBig={ button ? false : true}  primary>
                   SIGN UP
                  </Button>
                </NavBtnLink>

              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}
