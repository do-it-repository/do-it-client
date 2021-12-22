import React from 'react';
import Button from '@mui/material/Button';
import Tag from './components/Tag.js'

export default function MainScreen() {
  return (
    <div className="ui container">
      <Tag />
      <button className={'ui button'}>Follow me!</button>
      <Button variant="contained">MUI Button</Button>
    </div>
  );
}
