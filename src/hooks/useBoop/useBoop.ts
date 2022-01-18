import { UseSpringProps, useSpring } from 'react-spring'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { UseBoopParameters } from './types'

export default function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  scale = 1,
  timing = 150
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
      config: {
        tension: 300,
        friction: 10
      }
    }),
    [isBooped, rotation, scale, x, y]
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
