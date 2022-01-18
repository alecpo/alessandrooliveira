/* eslint-disable @typescript-eslint/no-explicit-any */
import { ParticlesProps } from 'react-tsparticles'
import theme from '../styles/theme'

export const particleProps: ParticlesProps = {
  options: {
    background: {
      color: {
        value: theme.colors.background
      },
      position: '50% 50%',
      repeat: 'no-repeat',
      size: 'cover'
    },
    fullScreen: {
      zIndex: 1
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push'
        },
        onHover: {
          enable: true,
          mode: 'grab',
          parallax: {
            enable: true,
            force: 60
          }
        }
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        grab: {
          distance: 400
        }
      }
    },
    particles: {
      color: {
        value: theme.colors.primary
      },
      links: {
        color: {
          value: theme.colors.primary
        },
        distance: 150,
        enable: true,
        opacity: 0.4
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200
          }
        },
        enable: true,
        outModes: {
          bottom: 'out',
          left: 'out',
          right: 'out',
          top: 'out'
        } as any
      },
      number: {
        density: {
          enable: true
        }
      },
      opacity: {
        random: {
          enable: true
        } as any,
        value: {
          min: 0.1,
          max: 0.5
        },
        animation: {
          enable: true,
          speed: 3,
          minimumValue: 0.1
        }
      },
      size: {
        random: {
          enable: true
        } as any,
        value: {
          min: 0.1,
          max: 10
        },
        animation: {
          enable: true,
          speed: 20,
          minimumValue: 0.1
        }
      }
    }
  }
}

export function getAge(birthday) {
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}
