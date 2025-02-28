import axios from "axios";
import { loadGame, setActiveUser } from '../redux/gameReducer'

export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';


export const createGame = () => {
    return (dispatch) => {
        axios
        .post(
            'http://localhost:8080/games',
            {}
        )
            // Handle the response from backend here
            .then((response) => {
                console.log("Here is my response from the Action: ", response)
                dispatch(loadGame(response.data))
            })

            // Catch errors if any
            .catch((err) => {console.log(err)});
    }
};

export const getGameForId = (gameId) => {
    return (dispatch) => {
        axios
        .get(
            `http://localhost:8080/games/${gameId}`
        )
            // Handle the response from backend here
            .then((response) => {
                dispatch(loadGame(response.data))
            })

            // Catch errors if any
            .catch((err) => {console.log(err)});
    }
};

export const startGame = (gameId) => {
    return (dispatch) => {
        axios
        .patch(
            `http://localhost:8080/games/${gameId}`,
            {}
        )
            // Handle the response from backend here
            .then((response) => {
                dispatch(loadGame(response.data))
            })

            // Catch errors if any
            .catch((err) => {console.log(err)});
    }
}

export const addPromptForGame = (prompt, gameId) => {
    console.log("Prompt request: ", prompt)
    return (dispatch) => {
        axios
        .post(
            `http://localhost:8080/games/${gameId}/prompt`,
            prompt
        )
            .then((response) => {
                console.log("Prompt response: ", response.data)
                dispatch(loadGame(response.data))
            })

            // Catch errors if any
            .catch((err) => {console.log(err)});
    }
}

export const addUserToGame = (gameId, name) => {
    const user = {
        name: name,
        isSpyMaster: false
    }
    return (dispatch) => {
        axios
        .patch(
            `http://localhost:8080/games/${gameId}/users`,
            user
        )
            // Handle the response from backend here
            .then((response) => {
                console.log("Here is my response from the user Action: ", response)
                dispatch(loadGame(response.data))
                dispatch(setActiveUser(user))
            })

            // Catch errors if any
            .catch((err) => {console.log(err)});
    }
}

export const selectCard = (gameId, cardValue, user) => {
    return (dispatch) => {
        axios
        .patch(
            `http://localhost:8080/games/${gameId}/cards/${cardValue}`,
            user
        )
            // Handle the response from backend here
            .then((response) => {
                dispatch(loadGame(response.data))
            })

            // Catch errors if any
            .catch((err) => {console.log(err)});
    }
}