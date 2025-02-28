import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PageviewIcon from '@mui/icons-material/Pageview';
import {createGame} from '../../actions/GameActions'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const cards = [
   {
     id: 1,
     title: 'Create a New Room',
     description: 'Start a new room and invite friends to join',
   },
   {
     id: 2,
     title: 'Join Existing Room',
     description: 'Use a code to join an existing room',
   }
 ];

const HomePage = () => {
   
   const navigate = useNavigate();
   const dispatch = useDispatch()

   const activeGame = useSelector((state) => state.gameReducer.activeGame)


   useEffect(() => {
      if(activeGame && activeGame.id) {
         navigate(`/game/${activeGame.id}`)
      }
   }, [activeGame]);

   return  <div>
         <Typography variant="h1" component="h2">
            Codenames <PageviewIcon sx={{ fontSize: 60 }}></PageviewIcon>
         </Typography>
         <Box
         sx={{
         width: '90%',
         display: 'grid',
         gridTemplateColumns: 'repeat(auto-fill, minmax(min(40%, 80%), 1fr))',
         gap: 4,
         margin: 'auto'
         }}
      >
         {cards.map((card, index) => 
            (<Card>
               <CardActionArea
               onClick={() => dispatch(createGame())}
               sx={{
                  height: '100%',
                  '&[data-active]': {
                     backgroundColor: 'action.selected',
                     '&:hover': {
                     backgroundColor: 'action.selectedHover',
                     },
                  },
               }}
               >
               <CardContent sx={{ height: '100%' }}>
                  <Typography variant="h5" component="div">
                     {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     {card.description}
                  </Typography>
               </CardContent>
            </CardActionArea>
         </Card>))}
      </Box>
   </div>
}


export default HomePage;
