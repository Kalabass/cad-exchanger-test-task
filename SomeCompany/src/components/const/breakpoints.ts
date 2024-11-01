import { Breakpoint } from '@mui/material';

export type BreakpointsType = {
  [key in Breakpoint]: number;
};

export const BREAKPOINTS: BreakpointsType = {
  xs: 360,
  sm: 768,
  md: 1240,
  lg: 1920,
  xl: 3240,
} as const;
