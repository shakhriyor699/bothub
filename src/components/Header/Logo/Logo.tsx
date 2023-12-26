import React, { FC } from 'react'
import styled from 'styled-components'

const Logo: FC = () => {
  return (
    <LogoBlock>BitTest</LogoBlock>
  )
}

const LogoBlock = styled.div`
  font-size: 22px;
  font-weight: 600;
  line-height: 29px; 
  flex-grow: 0;
  margin-right: 26px;
`

export default Logo