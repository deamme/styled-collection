import styled from 'styled-components'
import Box from './Box'

const elevations = [
    '0px 1px 1px rgba(10, 31, 68, 0.08), 0px 0px 1px rgba(10, 31, 68, 0.08)',
    '0px 3px 4px rgba(10, 31, 68, 0.1), 0px 0px 1px rgba(10, 31, 68, 0.08)',
    '0px 8px 10px rgba(10, 31, 68, 0.1), 0px 0px 1px rgba(10, 31, 68, 0.08)',
    '0px 18px 18px rgba(10, 31, 68, 0.12), 0px 0px 1px rgba(10, 31, 68, 0.1)',
    '0px 26px 26px rgba(10, 31, 68, 0.12), 0px 0px 1px rgba(10, 31, 68, 0.1)',
]

export default styled(Box)`
  box-shadow: ${({ elevation }) => elevations[elevation] || elevations[0]};
`
