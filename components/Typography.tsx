import * as React from 'react';
import { styled } from '@mui/system';

const StyledH1 = styled('h1')({
  fontFamily: 'Passion One',
  fontSize: 40
});

const StyledH2 = styled('h2')({
  fontFamily: 'Passion One',
  fontSize: 30
});

const StyledH3 = styled('h3')({
  fontFamily: 'Passion One',
  fontSize: 25
});

// @ts-ignore
export const H1: React.FC = ({ children }: { children: React.ReactNode }) => {
  return <StyledH1>{children}</StyledH1>;
};

export function H2() {
  return <StyledH2>Styled H2</StyledH2>;
}

export function H3() {
  return <StyledH3>Styled H3</StyledH3>;
}
