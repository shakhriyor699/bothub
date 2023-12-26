import { FC, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../../hooks'
import { loadUser } from '../../slices/User/userSlice'
import axios from 'axios'
import { API } from '../../api/api'

const Table: FC = () => {

  // const cols = useMemo(() => {
  //   return 
  // }, [])

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadUser)
    const res = axios.get('https://test.gefara.xyz/api/v1/user/list?page=2&orderBy=tokens%3Aasc')
    console.log(res);
  }, [])


  return (
    <TableContainer>
      <TableBlock>
        <thead>
          <tr>
            <Th>

            </Th>
          </tr>
        </thead>
      </TableBlock>
    </TableContainer>
  )
}

const TableContainer = styled.div`
   overflow: auto;
`

const TableBlock = styled.table`
  border-spacing: 0;

`

const Th = styled.th`
  
`

export default Table