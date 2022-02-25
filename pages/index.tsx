import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const MainStyled = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  min-width: 100vw;
`

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Boilerplate app</title>
        <meta name="description" content="Stripped to the bare minimum" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainStyled>
        <h1>Boilerplate - styled components + ts</h1>
      </MainStyled>
    </>
  )
}

export default Home
