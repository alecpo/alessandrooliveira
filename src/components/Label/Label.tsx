import { memo, PropsWithChildren } from 'react'
import Row from '../Row'
import { StyledLabel } from './styles'
import { LabelProps } from './types'

function Label({ children, ...labelProps }: PropsWithChildren<LabelProps>) {
  return (
    <Row marginBottom={8}>
      <StyledLabel {...labelProps}>{children}</StyledLabel>
    </Row>
  )
}

export default memo(Label)
