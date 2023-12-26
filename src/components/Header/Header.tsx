import React, { FC } from 'react'
import styled from 'styled-components';
import Logo from './Logo/Logo';
import orgIcon from '../../assets/orgIcon.svg';
import Profile from './Profile/Profile';

const Header: FC = () => {
  return (
    <HeaderStyles>
      <Logo />
      <NavStyled>
        <MyOrganization href='/'>
          <img src={orgIcon} alt="job" />
          <p>Моя организация</p>
        </MyOrganization>
        <Profile/>
      </NavStyled>
    </HeaderStyles>
  )
}

const HeaderStyles = styled.header`
  padding: 1rem 1.6rem;
  margin: 34px 25px;
  background-color: var(--color-gray);
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 17px;
`;

const NavStyled = styled.nav`
  flex-grow: 1;
  display: flex;
  margin-left: 44px;
  justify-content: space-between;
`


const MyOrganization = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;

  p {
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    color: var(--color-white);
  }
`
export default Header