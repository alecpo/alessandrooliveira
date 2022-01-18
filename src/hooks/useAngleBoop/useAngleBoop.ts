import useBoop from '../useBoop'
import { normalize } from './utils'

export default function useAngledBoop (index: number) {
  // Our star has 5 points across a 360-degree area.
  // Our first point should shoot out at 0 degrees,
  // our second at 72 degrees (1/5th of 360),
  // our third at 144 degrees, and so on.
  let angle = index * (360 / 5)
  // By default in JS, 0-degrees is the 3-o'clock
  // position, but I want my animation to start at
  // the 12-o'clock position, so I'll subtract
  // 90 degrees
  angle -= 90
  // Trigonometry methods in JS use radians, not
  // degrees, so we need to convert.
  const angleInRads = (angle * Math.PI) / 180
  // If this was meant to be reusable, this would
  // be configurable, but it's not, so it's
  // hardcoded. The # of pixels from the center
  // that our circle will bounce.
  const distance = 42
  // Convert polar coordinages (angle, distance)
  // to cartesian ones (x, y), since JS uses
  // a cartesian coordinate system:
  const x = distance * Math.cos(angleInRads)
  const y = distance * Math.sin(angleInRads)
  // `normalize` is commonly called "lerp",
  // as well as Linear Interpolation. It
  // maps a value from one scale to another.
  // In this case, I want the time to vary
  // between 450ms and 600ms, with the first
  // point being the slowest, and the last
  // one being the fastest.
  //
  // It's defined below
  let timing = normalize(index, 0, 4, 450, 600)
  // `normalize` produces linear interpolation,
  // but I want there to be a *bit* of an ease;
  // I want it to appear to be slowing down,
  // as we get further into the circles.
  timing *= 1 + index * 0.22
  const friction = normalize(index, 0, 4, 15, 40)
  const boop = useBoop({
    x,
    y,
    timing,
    scale: 1.4,
    springConfig: { tension: 180, friction }
  })
  return boop
}
