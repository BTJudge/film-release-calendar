import React from 'react';
import { style, keyframes } from 'typestyle';

const Animations = {
  spin: keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' }
  })
}

const Classes = {
  loader: style({
    border: '8px solid rgba(0,0,0,0)',
    borderTop: '8px solid #797c84',
    borderRadius: '50%',
    width: '10vh',
    height: '10vh',
    animationName: Animations.spin,
    animationDuration: '1s',
    animationTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    animationIterationCount: 'infinite',
    opacity: '0.2',
    marginTop: '5em',
    marginLeft: 'auto',
    marginRight: 'auto'
  })
}

export default class Loader extends React.Component {
  render() {
    return <div className={Classes.loader}></div>;
  }
}
