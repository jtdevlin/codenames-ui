import React from 'react';
import { TextField, Button } from '@mui/material';
import { useState } from 'react';
import { addPromptForGame } from '../../actions/GameActions';
import { useDispatch } from 'react-redux';

const Prompt = ({prompt, gameId}) => {
   const dispatch = useDispatch();
   
   const [newPrompt, setNewPrompt] = useState({});
   console.log("Prompt component: ", newPrompt)

   const handlePromptSubmit = (e) => {
      e.preventDefault();
      console.log("PRompt: ", newPrompt)
      dispatch(addPromptForGame(newPrompt, gameId))
   }


   if(prompt && !newPrompt.clue) {
      console.log("setting")
      setNewPrompt(prompt)
   }
   return (
      
      <form onSubmit={handlePromptSubmit}>
         <TextField
            helperText="Clue"
            value={newPrompt.clue}
            onChange={(e) => setNewPrompt({
               ...newPrompt,
               clue: e.target.value}
            )}
            disabled={prompt}
            sx={{
               "&.Mui-disabled": {
                 background: "#eaeaea",
                 color: "#c0c0c0"
               }
             }}
            required
         />
         <TextField
            helperText="Number of cards"
            type="number"
            value={newPrompt.number}
            onChange={(e) => setNewPrompt({
               ...newPrompt,
               number: e.target.valueAsNumber}
            )}
            disabled={prompt}
            sx={{
               "&.Mui-disabled": {
                 background: "#eaeaea",
                 color: "#c0c0c0"
               }
             }}
            required
         /><br/>
         {!prompt && <Button type="submit" variant="contained" color="primary">
            Submit Clue
         </Button> }
      </form>
   );
}

export default Prompt;
