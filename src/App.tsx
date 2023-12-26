import Header from './components/Header/Header'
import Layout from './components/Layout/Layout'
import Main from './components/Layout/Main'
import TitleOrganization, { TitleUser, UnderLine } from './components/Layout/Title'
import Users from './components/Users/Users'

function App() {

  return (
    <Layout>
      <Header />
      <Main>
        <TitleOrganization>
          Моя организация
        </TitleOrganization>
        <UnderLine />
        <TitleUser>Пользователи</TitleUser>
        <Users />
      </Main>
    </Layout>
  )
}

export default App
