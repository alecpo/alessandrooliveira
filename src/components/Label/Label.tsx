import { memo, PropsWithChildren } from 'react'
import { StyledLabel } from './styles'
import { LabelProps } from './types'

function Label({ children, strong }: PropsWithChildren<LabelProps>) {
  return <StyledLabel strong={strong}>{children}</StyledLabel>
}

export default memo(Label)
