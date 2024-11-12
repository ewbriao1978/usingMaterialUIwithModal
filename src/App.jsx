import { useState } from 'react'
//import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import myImage from './assets/download.png';
import { BarChart } from '@mui/x-charts/BarChart';

import './App.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function App() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [nome, setNome] = useState("Entre com o nome")
  const [email, setEmail] = useState("Entre com o e-mail")


  const doSomething = async (e) => {

    window.console.log("Recebi dados:");
    window.console.log("Nome:"+nome);
    window.console.log("Email:"+email);
    handleOpen() 
  
    
  }


  return (
    <>
      <div>
       <h1> TESTE DE MATERIALUI</h1>

       <Box component="form" sx={{ '& > :not(style)': { m: 1, width: '40ch' } }}
        noValidate
        autoComplete="off"
      >
      <TextField id="outlined-basic" label="Nome" variant="outlined" 
          defaultValue={nome} onChange={ (e) => setNome(e.target.value) }/>

      <TextField id="outlined-basic" label="email" variant="outlined" 
      defaultValue={email} onChange={ (e) => setEmail(e.target.value) }/>

      </Box>
      <Button variant="contained"  onClick={doSomething}  >Enviar
</Button>


<h2> Nome: {nome} </h2>

<Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Data received.<br></br>
            Nome:{nome} <br></br>
            Email:{email}
          </Typography>
          <img src={myImage} width="60" height="80"></img>
          <ImportContactsIcon />
          <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={400}
      height={200}
    />
        </Box>
      </Modal>



      </div>





    </>
  )
}

export default App
