import { memo } from 'react'
import { IconProps } from './types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

function Icon({ href, ...fontAwesomeIconProps }: IconProps) {
  return (
    <Link href={href ?? '/'}>
      <a>
        <FontAwesomeIcon {...fontAwesomeIconProps} />
      </a>
    </Link>
  )
}

export default memo(Icon)
