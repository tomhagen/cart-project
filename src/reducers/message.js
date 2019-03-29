import * as types from './../constants/actionType'
import * as Message from './../constants/message'

var initialState = Message.MESSAGE_WELCOME;

const message = (state = initialState, action) => {
    switch(action.type){
        case types.CHANGE_MESSAGE:
            return action.message;
            console.log(action.message);
       default: return state;
           
    }
}

export default message;