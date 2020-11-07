import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import palette from '../utils/palette';

library.add(fas);



function Button(props) {
  const { color, bgColor, icon, children } = props;

  const styles = {
    marginTop:30,
    border: 0,
    padding: '10px 20px',
    color: palette(color),
    backgroundColor: palette(bgColor),
    label: {
      fontWeight: 600
    }
  };

  return (
    <button style={styles}>
      <FontAwesomeIcon icon={['fas', icon]} /> <span style={styles.label}>{children}</span>
    </button>
  );
}

Button.defaultProps = {
  bgColor: 'alizarin',
  color: 'clouds',
  children: 'Just Click',
  icon: 'user'
};

export default Button;
