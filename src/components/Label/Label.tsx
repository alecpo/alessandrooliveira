import { memo, PropsWithChildren } from 'react'
import Row from '../Row'
import { StyledLabel } from './styles'
import { LabelProps } from './types'

const defaultProps: LabelProps = {
  size: 'sm',
  noMargin: false
}

function Label({ children, ...labelProps }: PropsWithChildren<LabelProps>) {
  return (
    <Row marginBottom={labelProps.noMargin ? 0 : 8}>
      <StyledLabel {...defaultProps} {...labelProps}>
        {children}
      </StyledLabel>
    </Row>
  )
}

export default memo(Label)
