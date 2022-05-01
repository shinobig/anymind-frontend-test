import React, {useState} from 'react';
import {ChannelId, ChannelNames, ChannelProperties, UserId} from "./interfaces/interfaces";
import {ChatContextManager} from "./context/chatContext";
import styled from 'styled-components'
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

import ChatHolder from "./components/ChatHolder/ChatHolder";

const Main = styled.main`
  display: grid;
  grid-gap: 0;
  row-gap: 0;
  grid-template-columns:  repeat(12, 1fr);
  grid-template-rows: 100px 1fr;
  grid-auto-flow: dense;
  width: 80vw;
  margin: 2vh auto;
  max-height: 90vh;
  min-height: 90vh;
`

function App() {

  const [selectedUserId, setSelectedUserId] = useState<UserId>(UserId.SAM);
  const [channel, setChannel] = useState<ChannelProperties>({channelId: '1', channelName: ChannelNames.GENERAL});


  return (
    <ChatContextManager.Provider
      value={{
        selectedUserId,
        channel,
        setSelectedUserId,
        setChannel
      }}
    >
      <Main>
        <Header/>
        <Menu/>
        <ChatHolder/>
      </Main>
    </ChatContextManager.Provider>
  );
}

export default App;
