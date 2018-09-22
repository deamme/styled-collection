import styled from 'styled-components';
import { animated } from 'react-spring';
import {
  height,
  width,
  space,
  color,
  flex,
  flexDirection,
  flexWrap,
  display,
  alignSelf,
  alignItems,
  justifyContent,
  borders,
  borderRadius
} from 'styled-system';

export default styled(animated.div)`
  ${height}
  ${width}
  ${space}
  ${color}
  ${flex}
  ${flexDirection}
  ${flexWrap}
  ${display}
  ${alignSelf}
  ${alignItems}
  ${justifyContent}
  ${borders}
  ${borderRadius}
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow}`};
`;
