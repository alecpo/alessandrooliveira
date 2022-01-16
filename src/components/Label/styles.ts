import styled from 'styled-components'
import { LabelProps } from './types';

export const StyledLabel = styled.h1<LabelProps>`
  font-weight: ${({strong}) => strong ? '700' : '400'};
  color: ${({theme}) => theme.colors.text};
`;
