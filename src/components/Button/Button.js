import React from 'react';

import './Button.css';

export default ({ children, ...rest }) => (
  <a className="-rounded" styleName="button -secondary -outline -large" {...rest}>{children}</a>
);
