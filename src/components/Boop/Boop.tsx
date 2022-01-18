import { memo, useEffect, useState, PropsWithChildren } from 'react'
import { StyledSpan } from './styles'
import { BoopProps } from './types'

const defaultProps: BoopProps = {
  rotation: 0,
  timing: 150
}

function Boop({ children, ...boopProps }: PropsWithChildren<BoopProps>) {
  const { timing } = boopProps

  const [isBooped, setIsBooped] = useState(false)

  const trigger = () => {
    setIsBooped(true)
  }

  useEffect(() => {
    if (!isBooped) {
      return
    }
    console.log('teste')

    const timeoutId = window.setTimeout(() => {
      setIsBooped(false)
    }, timing)

    return () => {
      window.clearTimeout(timeoutId)
    }
  }, [isBooped, timing])

  return (
    <StyledSpan
      onMouseEnter={trigger}
      isBooped={isBooped}
      {...defaultProps}
      {...boopProps}
    >
      {children}
    </StyledSpan>
  )
}

export default memo(Boop)
