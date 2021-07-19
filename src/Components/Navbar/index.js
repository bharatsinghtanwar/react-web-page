import React from 'react'
import { FaBars } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

import { Nav, NavbarContainer, NavLogo, MobileIcon, NavManu, NavItems, NavLinks, Btn, BtnText } from './NavbarElements'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>Tripupp Hr</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavManu>
                        <NavItems>
                            <NavLinks to='/'>Home</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='/payroll'>Payroll</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='/Benefits'>Benefits</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='/Pricing'>Pricing</NavLinks>
                        </NavItems>
                        <NavItems>
                            <NavLinks to='/Work'>Work with us</NavLinks>
                        </NavItems>
                        
                    </NavManu>
                    <Btn>
                        <BtnText> Sign in</BtnText>
                        <FaChevronRight />
                    </Btn>
                    
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
