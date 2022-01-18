import { memo } from 'react'
import { useBoop } from '../../hooks'
import useAngledBoop from '../../hooks/useAngleBoop'
import Icon from '../Icon'
import { Button, Circle, IconWrapper, Wrapper } from './styles'
import { AnimatedIconProps } from './types'

function AnimatedIcon({
  primaryColor = 'red',
  secondaryColor = 'red',
  ...iconProps
}: AnimatedIconProps) {
  const [c1s, c1t] = useAngledBoop(0)
  const [c2s, c2t] = useAngledBoop(1)
  const [c3s, c3t] = useAngledBoop(2)
  const [c4s, c4t] = useAngledBoop(3)
  const [c5s, c5t] = useAngledBoop(4)
  const [iconStyle, iconTrigger] = useBoop({
    scale: 1.5,
    timing: 300,
    springConfig: {
      tension: 300,
      friction: 6
    }
  })
  return (
    <Wrapper>
      <Button
        onMouseEnter={() => {
          c1t()
          c2t()
          c3t()
          c4t()
          c5t()
          iconTrigger()
        }}
      >
        <IconWrapper style={iconStyle}>
          <Icon {...iconProps} />
        </IconWrapper>
      </Button>
      <Circle style={c1s} color={primaryColor} />
      <Circle style={c2s} color={secondaryColor} />
      <Circle style={c3s} color={primaryColor} />
      <Circle style={c4s} color={primaryColor} />
      <Circle style={c5s} color={secondaryColor} />
    </Wrapper>
  )
}

export default memo(AnimatedIcon)
