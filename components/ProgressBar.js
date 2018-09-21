import React from 'react';
import styled from 'styled-components';
import { Spring } from 'react-spring';
import AnimatedBox from './AnimatedBox';

import springs from '../utils/springs';

const ProgressBar = styled(AnimatedBox)`
  border-radius: 1rem;
`;

export default props => (
  <Spring
    native
    config={springs.lazy}
    from={{ progress: 0 }}
    to={{ progress: props.progress }}
  >
    {({ progress }) => (
      <ProgressBar
        style={{ width: progress.interpolate(t => `${t * 100}%`) }}
        {...props}
      />
    )}
  </Spring>
);
