import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {ChannelId, UserId} from "./interfaces/interfaces";
import {ChatContextManager} from "./context/chatContext";

function App() {

  const [userId, setUserId] = useState<UserId>(UserId.SAM);
  const [channelId, setChannelId] = useState<ChannelId>('1');


  return (
    <ChatContextManager.Provider
      value={{
        userId,
        channelId,
        setUserId,
        setChannelId
      }}
    >
      <div className="container">

      </div>
    </ChatContextManager.Provider>
  );
}

export default App;
