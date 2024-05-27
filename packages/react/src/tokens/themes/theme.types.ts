import { Colors } from '../palettes/palette';
import { BreakpointsType, Typography } from './theme.constants';

export interface Theme {
  fontSize?: number;
  fontFamily?: string;
  spaceUnit?: object;
  fontWeight?: number;
  colors?: Colors;
  typography?: Typography;
  breakpoints?: BreakpointsType;
}
