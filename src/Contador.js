import React,{useState} from 'react'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import './App.css'



const MyButton = styled(Button)({
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',

  });
  const MyButton2 = styled(Button)({
    background: 'linear-gradient(right,green,black)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 4px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  });

export default function Contador() {


const [contador, setContador] = useState(0)

    return (
        <Box mx='auto' m={3} p={5} bgcolor="background.paper">

        <Container  maxWidth="sm">
            <h1 className='Padrao' contador={contador}> {contador}  </h1>
            
            <MyButton variant="contained" color="secondary" onClick={() => setContador(contador+1)}>
        Somar </MyButton>
        <MyButton2 variant='contained' color='primary' onClick={() => setContador(contador-1 )} > Diminuir </MyButton2>
        </Container>
        </Box>
    )
}
