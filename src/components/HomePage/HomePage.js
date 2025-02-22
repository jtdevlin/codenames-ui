import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import PageviewIcon from '@mui/icons-material/Pageview';
import {createGame} from '../../actions/GameActions'
import { connect } from 'react-redux'

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

class HomePage extends React.Component {
   render() {
      const {createGame} = this.props;
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
                  onClick={() => createGame()}
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
}

function mapDispatchToProps(dispatch) {
   return({
       createGame: () => {dispatch(createGame)}
   })
}

function mapStateToProps(state) {}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)