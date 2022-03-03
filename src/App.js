import { ChatEngine } from 'react-chat-engine';
import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
           height="100vh"
           projectID="16784204-2212-4a07-9e4e-888876bb3174"
           userName={localStorage.getItem('username')}
           userSecret={localStorage.getItem('password')}
           renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;