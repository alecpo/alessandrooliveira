import { memo, PropsWithChildren } from 'react'
import { StyledRow } from './styles'
import { RowProps } from './types'

function Row({ children, align, justify }: PropsWithChildren<RowProps>) {
  const rowProps = { align, justify }
  return <StyledRow {...rowProps}>{children}</StyledRow>
}

export default memo(Row)
