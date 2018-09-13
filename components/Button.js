import Box from './Box'

export default Box.withComponent('button').extend`
  outline: none;
  transition: all 0.15s ease;
  &:hover {
    box-shadow: 0px 2px 4px 0px rgba(72, 89, 102, 0.25);
    transform: translateY(-4px);
    cursor: pointer;
    ${({ hoverBg }) => hoverBg && `background: ${hoverBg}`};
    ${({ hoverColor }) => hoverColor && `color: ${hoverColor}`};
  }
`
