import Head from 'next/head'
import Image from 'next/image'
import Fire from '../assets/fire.svg'
import { Container } from '../styles/pages/Home'

function Home() {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>
      <Fire />
      <h1>Alessandro Oliveira</h1>
      <p>Building page...</p>
    </Container>
  )
}

export default Home
