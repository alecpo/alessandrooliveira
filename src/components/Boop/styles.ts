import styled from 'styled-components'
import { StyledSpanProps } from './types'

export const StyledSpan = styled.span<StyledSpanProps>`
  display: 'inline-block';
  backface-visibility: 'hidden';
  transform: ${({ isBooped, rotation }) => isBooped ? `rotate(${rotation}deg)` : 'rotate(0deg)'};
  transition: ${({ timing }) => `transform ${timing}ms`};
`
