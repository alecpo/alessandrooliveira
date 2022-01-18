import { IconProps } from '../Icon'

export interface CircleProps {
  color: string;
}

export type AnimatedIconProps = IconProps & {
  primaryColor?: string;
  secondaryColor?: string;
}
