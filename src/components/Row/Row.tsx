import { memo, PropsWithChildren } from 'react'
import { StyledRow } from './styles'
import { RowProps } from './types'

function Row({ children, ...rowProps }: PropsWithChildren<RowProps>) {
  return <StyledRow {...rowProps}>{children}</StyledRow>
}

export default memo(Row)
