import { UseSpringProps, useSpring, SpringConfig } from 'react-spring'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { UseBoopParameters } from './types'

export default function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10
  } as SpringConfig
}: UseBoopParameters) {
  const [isBooped, setIsBooped] = useState(false)

  const config: UseSpringProps = useMemo(
    () => ({
      display: 'inline-block',
      backfaceVisibility: 'hidden' as any,
      transform: isBooped
        ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
        : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
      config: springConfig
    }),
    [isBooped, rotation, scale, springConfig, x, y]
  )

  const style = useSpring(config)

  const trigger = useCallback(() => {
    setIsBooped(true)
  }, [])

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

  return [style, trigger] as [Record<string, any>, () => void]
}
