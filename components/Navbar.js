// src/components/Navbar.js

import React from 'react';
import styled from 'styled-components';
import logo from '../assets/LOGO.jpg'; // Importando a imagem da logo

// Styled Components
const NavbarContainer = styled.nav`
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const Logo = styled.img`
  height: 40px;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    color: #f0a500;
  }
`;

// Navbar Component
const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" /> {/* Exibindo a logo como uma imagem */}
      <NavLinks>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#services">Services</NavLink>
        <NavLink href="#contact">Contact</NavLink>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
