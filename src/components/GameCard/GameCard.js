import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { selectCard } from '../../actions/GameActions';
import { useDispatch, useSelector } from 'react-redux';


const GameCard = ({gameId, card}) => {
   const dispatch = useDispatch()
   const activeUser = useSelector((state) => state.gameReducer.activeUser)

   const handleSelect = () => {
      if(!card.selected && activeUser && !activeUser.isSpyMaster) {
         dispatch(selectCard(gameId, card.value, activeUser))
      }
   }

   function determineColor() {
      if (card.selected || activeUser?.isSpyMaster) {
         switch (card.type) {
            case 'assassin':
               return 'grey'
            case 'blue':
               return 'lightblue'
            case 'red':
               return 'lightcoral'
            default:
               return 'khaki'
         }
      }
      else {
        return 'white'

      }
   }

   return (
      <Card 
         key={card.value}
         style={{
            backgroundColor: determineColor(),
            border: '1px solid gray', 
            borderRadius: 2
         }}
         >
         <CardActionArea
         onClick={() => handleSelect()}
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
               <Typography variant="h6" component="div">
                  {card.value}
               </Typography>
            </CardContent>
         </CardActionArea>
      </Card>
   );
}
export default GameCard;
