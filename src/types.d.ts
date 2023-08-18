
export interface State{
    user: string,
    messageUser: string,
    arrChat: Array<Answer>,
    loading: boolean,
}

export type Action =
| { type: 'SET_FROM_CLIENT', payload: string }
| { type: 'SET_FROM_BOT', payload: string }
| { type: 'SET_ARR_CHAT', payload: Answer }

export interface Answer{
    role: string,
    content: string,
}