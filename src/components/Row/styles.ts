import styled from 'styled-components'
import { RowProps } from './types';

export const StyledRow = styled.div<RowProps>`
  display: flex;
  flex-direction: row;
  justify-content: ${({justify}) => justify};
  align-items: ${({align}) => align};
`;
