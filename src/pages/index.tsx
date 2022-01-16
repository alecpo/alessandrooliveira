import Particles from 'react-tsparticles'
import avatar from '../assets/avatar.jpg'
import { Icon, Label } from '../components'
import Row from '../components/Row'
import { Container, Content } from '../styles/pages/Home'
import theme from '../styles/theme'
import { particleProps } from '../utils'

const { options: defaultOptions } = particleProps

function Home() {
  return (
    <Container>
      <Particles id="tsparticles" options={defaultOptions}></Particles>
      <Content>
        <Row align="center">
          <img
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
          <Label>Alessandro Oliveira</Label>
        </Row>
        <Row justify="space-around">
          <Icon
            href="https://github.com/alecpo"
            icon={{ prefix: 'fab', iconName: 'github' }}
            size="2x"
          />
          <Icon
            href="https://www.linkedin.com/in/alessandrocezar/"
            icon={{ prefix: 'fab', iconName: 'linkedin' }}
            size="2x"
          />
          <Icon
            href="https://www.youtube.com/channel/UC4gvSF1eNe2QHinnipYTv6Q"
            icon={{ prefix: 'fab', iconName: 'youtube' }}
            size="2x"
          />
        </Row>
      </Content>
    </Container>
  )
}

export default Home
