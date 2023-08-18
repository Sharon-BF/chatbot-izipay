import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useEffect, useState } from 'react';
import { useStore } from './hooks/useStore';
import { response } from './services/response';
import { Answer } from './types';

const arr: Array<Answer> = [
  {
    role: 'bot',
    content: 'Hello'
  },
  {
    role: 'client',
    content: 'Hi'
  },
  {
    role: 'bot',
    content: 'How are you?'
  }
]


function App() {
  const { arrChat, messageUser, setFromClient, setFromBot} = useStore();

  const [user_text, setUserText] = useState('');

  const handleChange = (event: any) => {
    setUserText(event.target.value); 
  }

  const handleSend = () =>{
    setFromClient(user_text);
    setUserText('');
    
  }

  useEffect(()=>{
    if(arrChat.length === 1) return;

    // setFromBot('translate');
    // response(messageUser)
    //   .then( res => {
    //       console.log(res);
    //       if(res == null) return
    //       setFromBot(res);
    //     }
    //   )
    //   .catch( err => setFromBot(err));
    
    
    
  }, [messageUser]);

  return (
    <>
      <h1>Hackaizi</h1>

      <div className='chat-content'>
        {
          arr.map((message, index) => {

            const {role, content}= message;

            return (
              <div key={index} className='chat-content-user' >
                <p>{role}</p>
                <p>{content}</p>
              </div>
            )
          })
        }

        <input type="text" onChange={handleChange} value={user_text}/>
        <button 
          onClick={handleSend}
        >Send</button>

      </div>
      
    </>
  )
}

export default App
