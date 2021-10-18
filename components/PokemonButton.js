import React from 'react';
import { Button } from 'react-native-paper';

const PokemonButton = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      dark={props.dark || true}
      style={{ borderColor: '#355FA0', ...props.style }}
      mode={props.mode || 'contained'}
      color={props.color || '#F9C934'}
      labelStyle={{ color: '#355FA0', fontWeight: 'bold', ...props.labelStyle }}
    >
      {children}
    </Button>
  )
}

export default PokemonButton;