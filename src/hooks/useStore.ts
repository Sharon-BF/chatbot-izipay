import { useReducer } from 'react';
import {type State, type Action, Answer} from '../types.d';

const init_message: Answer = {
    role: 'bot',
    content: 'Hola, soy botipay tu asistente virtual'
  }

const init_state: State = {
    user: 'bot',
    messageUser: '',
    arrChat: [init_message],
    loading: false
  }
  
function reducer (state: State, action: Action){
    const { type } = action;

    if( type === 'SET_FROM_CLIENT'){

        const chat = {
            role: 'client',
            content: action.payload
        }

        return {
            ...state,
            user: 'client',
            messageUser: action.payload,
            arrChat: [...state.arrChat, chat],
        }
    }

    if( type === 'SET_FROM_BOT'){

        const chat = {
            role: 'bot',
            content: action.payload
        }

        return{
            ...state,
            user:'bot',
            arrChat: [...state.arrChat, chat],
            loading: true
        }
    }

    if( type === 'SET_ARR_CHAT'){

        return{
        ...state,
        arrChat: [...state.arrChat, action.payload],
        }
    }

    return state;
}

export function useStore () {
    const [{
        user,
        messageUser,
        arrChat,
        loading
    }, dispatch] = useReducer(reducer, init_state);

    const setFromClient = (payload: string) => {
        dispatch({ type: 'SET_FROM_CLIENT', payload });
    }

    const setFromBot = (payload: string) => {
        dispatch({ type: 'SET_FROM_BOT', payload });
    }

    // const setArrChat = (payload: string) => {
    //     dispatch({ type: 'SET_ARR_CHAT', payload });
    // }

    return{
        user,
        messageUser,
        arrChat,
        loading,
        setFromClient,
        setFromBot,
        // setArrChat
    }
}