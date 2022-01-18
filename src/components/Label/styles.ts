import styled from 'styled-components'
import { fontSizePicker } from '../utils'
import { LabelProps } from './types'

export const StyledLabel = styled.span<LabelProps>`
  display: block;
  font-weight: ${({ strong }) => strong ? '700' : '400'};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ size }) => fontSizePicker[size] ?? fontSizePicker.sm}px;
  border-bottom: ${({ underlineColor }) => underlineColor ? `1.5px solid ${underlineColor}` : ''};
`
