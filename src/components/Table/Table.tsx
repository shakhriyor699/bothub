/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks'
import { loadUser, selectUser } from '../../slices/User/userSlice'
import { useSelector } from 'react-redux'
import { IUser } from '../../types/types'


type DataItem = {
  id: string;
  name: string;
  icon?: ReactNode;
};
const Table: FC = () => {
  const [sortType, setSortType] = useState('tokens:asc')
  const [userData, setUserData] = useState<IUser[]>([])
  const users = useSelector(selectUser)
  const { data } = users
  const theadData: DataItem[] = [
    {
      id: 'email',
      name: 'Email'
    },
    {
      id: 'name',
      name: 'Имя'
    },
    {
      id: 'role',
      name: 'Роль'
    },
    {
      id: 'subscription',
      name: 'Подписка'
    },
    {
      id: 'tokens',
      name: 'Токены',
      icon: <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7357 10.9348C13.9046 11.0931 13.9995 11.3076 13.9995 11.5314C13.9995 11.7551 13.9046 11.9697 13.7357 12.1279L10.1312 15.503C9.96218 15.6611 9.73302 15.75 9.49407 15.75C9.25512 15.75 9.02596 15.6611 8.85698 15.503L5.25247 12.1279C5.08832 11.9688 4.99749 11.7556 4.99955 11.5344C5.0016 11.3132 5.09637 11.1016 5.26345 10.9451C5.43052 10.7887 5.65654 10.6999 5.89281 10.698C6.12908 10.6961 6.35671 10.7811 6.52666 10.9348L8.59295 12.8696L8.59295 3.09376C8.59295 2.86998 8.68789 2.65537 8.85688 2.49713C9.02587 2.3389 9.25508 2.25 9.49407 2.25C9.73307 2.25 9.96227 2.3389 10.1313 2.49713C10.3003 2.65537 10.3952 2.86998 10.3952 3.09376L10.3952 12.8696L12.4615 10.9348C12.6305 10.7767 12.8596 10.6878 13.0986 10.6878C13.3375 10.6878 13.5667 10.7767 13.7357 10.9348Z" fill="#616D8D" />
      </svg>
    },
    {
      id: 'actions',
      name: 'Действия'
    }
  ]


  useEffect(() => {
    const newUserData = data.map((item: any) => {
      return {
        id: item.id,
        email: item.email,
        name: item.name,
        role: item.role,
        subscription: item.subscription.plan.type,
        tokens: item.subscription.tokens
      }
    })
    setUserData(newUserData)
  }, [data, sortType])





  const handleClickSortable = (item: DataItem) => {
    if (item.icon) {
      setSortType(prev => prev == `${item.id}:asc` ? `${item.id}:desc` : `${item.id}:asc`)
    }
  }

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadUser({}))
  }, [])


  return (
    <TableContainer>
      <TableBlock>
        <thead>
          <tr>
            {
              theadData.map(item => (
                <Th key={item.id}>
                  <ThBlock onClick={() => handleClickSortable(item)} sortType={sortType}>
                    {item.name}{item?.icon}
                  </ThBlock>
                </Th>
              ))
            }
          </tr>
        </thead>
        <tbody>

          {
            userData.map(item => (
              <tr key={item.email}>
                <TbodyTd>{item.email}</TbodyTd>
                <TbodyTd>{item.name}</TbodyTd>
                <TbodyTd>{item.role}</TbodyTd>
                <TbodyTd>{item.subscription}</TbodyTd>
                <TbodyTd>{item.tokens}</TbodyTd>
                <TbodyTd>1</TbodyTd>
              </tr>
            ))

          }


        </tbody>
      </TableBlock>
    </TableContainer>
  )
}

const TableContainer = styled.div`
   overflow: auto;
   margin: 0px 34px 24px 34px;
`

const TableBlock = styled.table`
  border-spacing: 0;
  width: 100%;


`

const Th = styled.th`
  background: var(--color-black);
  
  &:first-child {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  &:last-child {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`


const ThBlock = styled.div<{
  sortType?: string
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding: 14px 0;
  
    & svg {
      transform: ${props => props.sortType === 'tokens:asc' ? 'rotate(0deg)' : 'rotate(180deg)'};
    }
`

const TbodyTd = styled.td`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  padding: 23px 0;
  border-bottom: 1px solid var(--color-gray2);
`

export default Table