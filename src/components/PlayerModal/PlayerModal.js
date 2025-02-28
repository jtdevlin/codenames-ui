import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch } from 'react-redux';
import {addUserToGame} from '../../actions/GameActions'

const PlayerModal = ({gameId}) => {

   const [open, setOpen] = React.useState(true);
   const dispatch = useDispatch()
 
   const handleClose = () => {
     setOpen(false);
   };

   return (
   <div>
      <Dialog
         open={open}
         slotProps={{
            paper: {
            component: 'form',
            onSubmit: (event) => {
               event.preventDefault();
               handleClose();
               dispatch(addUserToGame(gameId, event.target[0].value))
            },
            },
         }}
      >
         <DialogTitle>Enter Your Name</DialogTitle>
         <DialogContent>
            <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Player Name"
            fullWidth
            variant="standard"
            />
         </DialogContent>
         <DialogActions>
            <Button type="submit">Enter</Button>
         </DialogActions>
      </Dialog>
   </div>);

}

export default PlayerModal;
