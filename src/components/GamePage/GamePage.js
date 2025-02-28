import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux'
import PlayerModal from '../PlayerModal/PlayerModal';
import GameCard from '../GameCard/GameCard';
import { getGameForId, startGame, addPromptForGame } from '../../actions/GameActions';
import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { Button, TextField } from '@mui/material';
import Prompt from '../Prompt/Prompt';

const GamePage = () =>  {
   const dispatch = useDispatch()
   const activeGame = useSelector((state) => state.gameReducer.activeGame)
   const activeUser = useSelector((state) => state.gameReducer.activeUser)
   const { gameId } = useParams();

   // const [prompt, setPrompt] = useState({ clue: undefined, number: undefined });

   useEffect(() => {
      if(!activeGame || !activeGame.cards) {
         dispatch(getGameForId(gameId))
      }
      //Stop polling if the game is completed
      if(activeGame && activeGame.state === 'Completed') {
         clearInterval(pollingRef.current);
      }
   }, [activeGame]);

   const pollingRef = useRef(null);

   //Poll the api for updates from other players

   useEffect(() => {
      const startPolling = () => {
      pollingRef.current = setInterval(() => {
         dispatch(getGameForId(gameId))
         }, 1000);
      };
      startPolling();

      return () => {
         clearInterval(pollingRef.current);
      };
   
   }, []);

   const titleMessage = () => {
      switch(activeGame.state) {
         case "Created":
            return "Waiting for more players to join..."
         case "Ready":
            return "Ready to start!"
         case "Started":
            return `Team Guessing: ${activeGame.turn}`
         case "Completed":
            return `${activeGame.winner} team wins!`
         default:
            return "Welcome to Codenames!"
      }
   }

   return (
   <div>
      {activeUser && <Typography variant="h3" component="h2">
         Welcome, {activeUser.name}!
      </Typography>}
      {activeUser && activeUser.team && activeUser.team !== 'unassigned' && <Typography variant="h3" component="h2">
         You are on team: {activeUser.team}
      </Typography>}
      <Typography variant="h3" component="h2">
         {titleMessage()}
      </Typography>
      {activeGame && 
      (activeGame.state === 'Ready' || activeGame.state === 'Created') 
      &&<PlayerModal gameId={activeGame?.id}/>}
      <Box
            sx={{
            width: '80%',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            margin: 'auto'
            }}
         >
            {activeGame.cards && new Map(Object.entries(activeGame.cards))
               .values()
               .map((card, index) => <GameCard card={card} gameId={activeGame?.id}/>)}
         </Box>
          <Typography variant="h3" 
         component="h2"
         sx={{
            paddingBottom: "10px"
            }}
         >
            Players in game: {activeGame?.users?.map((user, index) => {
               let stringName = user.name 
               if(index < activeGame.users.length - 1) {
                  stringName += ', '
               }
               return stringName
            })}
         </Typography>
         { activeGame.state === 'Ready' && <Button 
          variant="contained"
          size="large"
          onClick={() => dispatch(startGame(activeGame.id))}
          >
            Start Game
         </Button> }
         { activeUser && !activeGame.prompt
         && activeUser.isSpyMaster
         && activeUser.team === activeGame.turn 
         && activeGame.state === 'Started' 
         && (
            <Prompt prompt={activeGame.prompt} gameId={gameId}/>
         )} 
         { activeGame.prompt &&  
            <Typography variant="h3" 
               component="h2">
                  Clue - {activeGame.prompt.clue}, {activeGame.prompt.number}
            </Typography>
            }
      </div>
   );

}


export default GamePage