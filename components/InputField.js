import styled from 'styled-components';
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
  borderRadius,
  fontSize
} from 'styled-system';

export default styled.input`
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
  ${fontSize}
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  ${({ boxShadow }) => boxShadow && `box-shadow: ${boxShadow}`};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",Helvetica, Arial, sans-serif,"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  &:focus {
    border: 2px #007FFF solid
  }
  `;
