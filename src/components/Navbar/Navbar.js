import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';


const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
            <IconContext.Provider value={{ color: 'white' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>Зоряний Двір</NavLogo>
                        <MobileIcon onClick={handleClick}>
                            { click ? <FaTimes /> : <FaBars /> } 
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            <NavItem>
                                <NavLinks to='/'>
                                    Головна
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/rooms'>
                                    Номери
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/services'>
                                    Відпочинок
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='/contacts'>
                                    Контакти
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
