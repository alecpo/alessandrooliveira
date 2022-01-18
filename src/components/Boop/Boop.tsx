import { memo, PropsWithChildren } from 'react'
import { animated } from 'react-spring'
import { BoopProps } from './types'
import { useBoop } from '../../hooks'

function Boop({
  children,
  ...useBoopParameters
}: PropsWithChildren<BoopProps>) {
  const [style, onMouseEnter] = useBoop(useBoopParameters)

  return (
    <animated.span onMouseEnter={onMouseEnter} style={style}>
      {children}
    </animated.span>
  )
}

export default memo(Boop)
