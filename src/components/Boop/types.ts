import { SpringConfig } from 'react-spring'

export interface BoopProps {
  x?: number;
  y?: number;
  rotation?: number;
  scale?: number;
  springConfig?: SpringConfig;
  timing: number;
}
