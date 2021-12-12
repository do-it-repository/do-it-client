import React from 'react';
import Button from '@mui/material/Button';
import CustomButton from './component/CutomButton';

export default function MainScreen() {
  return (
    <div className="ui container">
      <button className={'ui button'}>Follow me!</button>
      <Button variant="contained">MUI Button</Button>
      <CustomButton />
    </div>
  );
}
