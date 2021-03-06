import Particles from 'react-tsparticles'
import avatar from '../assets/avatar.jpg'
import { Boop, Icon, Label } from '../components'
import Row from '../components/Row'
import { Container, Content, InfoContainer } from '../styles/pages/Home'
import theme from '../styles/theme'
import { getAge, particleProps } from '../utils'
import Head from 'next/head'
import Aos from 'aos'
import { useEffect, useMemo } from 'react'
import 'aos/dist/aos.css'
import AnimatedIcon from '../components/AnimatedIcon'

const { options: defaultOptions } = particleProps

function Home() {
  const age = useMemo(() => {
    return getAge(new Date('07-19-1996'))
  }, [])

  useEffect(() => {
    Aos.init({ duration: 1500 })
  }, [])

  return (
    <Container>
      <Head>
        <title>Alessandro Oliveira</title>
      </Head>
      <Particles id="tsparticles" options={defaultOptions}></Particles>
      <Content>
        <Row data-aos="fade-up" align="center">
          <img
            alt=""
            src={avatar.src}
            style={{
              width: 150,
              height: 150,
              marginRight: 32,
              borderRadius: 150 / 6,
              borderWidth: 6,
              borderStyle: 'outset',
              borderColor: theme.colors.primary
            }}
          />
          <InfoContainer>
            <Label size="md" underlineColor={theme.colors.dracula.pink}>
              Info
            </Label>
            <Label>Alessandro Oliveira</Label>
            <Label>{age} anos</Label>
            <Label noMargin>⚡ Coffeing and coding ☕</Label>
          </InfoContainer>
        </Row>
        <Row justify="space-around">
          <AnimatedIcon
            href="https://github.com/alecpo"
            icon={{ prefix: 'fab', iconName: 'github' }}
            size="2x"
            primaryColor={theme.colors.gitHub.primary}
            secondaryColor={theme.colors.gitHub.secondary}
          />
          <AnimatedIcon
            href="https://www.linkedin.com/in/alessandrocezar/"
            icon={{ prefix: 'fab', iconName: 'linkedin' }}
            size="2x"
            primaryColor={theme.colors.linkedIn.primary}
            secondaryColor={theme.colors.linkedIn.secondary}
          />
          <AnimatedIcon
            href="https://www.youtube.com/channel/UC4gvSF1eNe2QHinnipYTv6Q"
            icon={{ prefix: 'fab', iconName: 'youtube' }}
            size="2x"
            primaryColor={theme.colors.youTube.primary}
            secondaryColor={theme.colors.youTube.secondary}
          />
        </Row>
      </Content>
    </Container>
  )
}

export default Home
