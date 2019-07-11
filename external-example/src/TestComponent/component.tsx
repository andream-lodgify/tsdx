import React from 'react';

import './styles.scss';

interface Props {
  message?: string;
}

export const Component = ({ message }: Props = { message: 'Hello world' }) => (
  <div className="test-component">{message}</div>
);
