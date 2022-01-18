import { animated } from 'react-spring'
import styled from 'styled-components'
import { CircleProps } from './types'

export const Wrapper = styled.div`
  position: relative;
  width: min-content;
`
export const Button = styled.button`
  display: 'block';
  margin: 0;
  padding: 0;
  border: none;
  background: black;
  cursor: pointer;
  text-align: left;
  font: inherit;

  &:focus {
    outline: 2px auto var(--color-primary);
    outline-offset: 2px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
position: relative;
z-index: 3;
padding: 8px;
border-radius: 50%;
`

export const IconWrapper = styled(animated.span)`
  display: block;
  svg {
    display: block;
    stroke: var(--color-text) !important;
    fill: var(--color-background) !important;
  }
`

export const Circle = styled(animated.div)<CircleProps>`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  height: 10px;
  margin: auto;
  border-radius: 50%;
  background: ${({ color }) => color};
`
