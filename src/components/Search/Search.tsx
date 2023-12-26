import { FC } from 'react'
import styled from 'styled-components'
import SearchIcon from './SearchIcon'

const Search: FC = () => {
  return (
    <SearchBlock>
      <SearchIcon />
      <SearchInput placeholder='Поиск' />
    </SearchBlock>
  )
}


const SearchBlock = styled.label`
  border: 1px solid var(--color-gray2);
  border-radius: 8px; 
  margin: 0px 34px 24px 34px;
  cursor: text;
  padding: 14px 16px;
  display: flex;
  gap: 10px;
`

const SearchInput = styled.input`
  border: none;
  width: 100%;
  background: transparent;
  color: var(--color-white);
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  outline: none;

  &::placeholder {
    color: var(--color-gray2);
    font-weight: 900;
  }
`

export default Search