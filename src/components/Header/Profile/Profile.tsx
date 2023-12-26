import React, { FC } from 'react'
import Avatar from './Avatar'
import styled from 'styled-components'

const Profile: FC = () => {
  return (
    <ProfileBlock>
      <Avatar />
      <ProfileInfo>
        <ProfileStatus>Вы авторизованы</ProfileStatus>
        <ProfileName>Администратор</ProfileName>
      </ProfileInfo>
    </ProfileBlock>
  )
}

const ProfileBlock = styled.div`
  display: flex;  
  align-items: center;
  gap: 12px;
  max-width: 178px;
  width: 100%;
  border: 1px solid var(--color-gray3);
  border-radius: 6px;
  padding: 8px 14px;
  cursor: pointer;
`

const ProfileInfo = styled.div``

const ProfileStatus = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px; 
`

const ProfileName = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`

export default Profile