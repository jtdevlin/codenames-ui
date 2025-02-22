import axios from "axios";


export const CREATE_NEW_GAME = 'CREATE_NEW_GAME';


export const createGame = () => {
    console.log("calling api")
    axios
    .post(
        'http://localhost:8080/games',
        {}
    )
        // Handle the response from backend here
        .then(    console.log("data")
    )

        // Catch errors if any
        .catch((err) => {console.log(err)});
};