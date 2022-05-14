import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

// const projectID = 'c0a2f7b1-0458-4b84-8319-964d5f19534a';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    
    <ChatEngine
      height="100vh"
      projectID={"c0a2f7b1-0458-4b84-8319-964d5f19534a"}
      userName={"sethm"}
      userSecret={"bingbong"}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;