import axios from 'axios';

export const Add_users = (data) => {
    return (dispatch) => {
        axios.post('http://192.168.0.105:4500/addusers', data)
        .then(response => {
            console.log(response)
            dispatch({
                type: 'POST',
                payload: response
            }) 
        })
        .catch(error => {
            alert(error.message)
            console.log(error);
        });
    }
}


export const fetchUsers = () => {
    return (dispatch) => {
        dispatch({
            type: 'FETCH_USERS_REQUEST',
        })
        axios.get('http://192.168.0.105:4500/allusers')
            .then(response => {
                console.log(response)
                dispatch({
                    type: 'FETCH_USERS_SUCCESS',
                    payload: response.data
                })
            })
            .catch(error => {
                
                dispatch({
                    type: 'FETCH_USERS_ERROR',
                    payload: error
                })
            })
    }
}
