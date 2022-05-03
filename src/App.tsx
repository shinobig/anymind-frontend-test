import React, {useState} from 'react';
import {ChannelNames, ChannelProperties, Message, UserId} from "./interfaces/interfaces";
import {ChatContextManager} from "./context/chatContext";
import styled from 'styled-components'
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";

import ChatHolder from "./components/ChatHolder/ChatHolder";
import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from "@apollo/client";

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

const client = new ApolloClient({
  connectToDevTools: true,
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://angular-test-backend-yc4c5cvnnq-an.a.run.app/graphql'
  })
})

function App() {

  const [selectedUserId, setSelectedUserId] = useState<UserId>(UserId.SAM);
  const [channel, setChannel] = useState<ChannelProperties>({channelId: '1', channelName: ChannelNames.GENERAL});
  const [chat, setChat] = useState<Message[]>([]);

  return (
    <ApolloProvider client={client}>

      <ChatContextManager.Provider
        value={{
          selectedUserId,
          channel,
          setSelectedUserId,
          setChannel,
          chat,
          setChat
        }}
      >
        <Main>
          <Header/>
          <Menu/>
          <ChatHolder/>
        </Main>
      </ChatContextManager.Provider>
    </ApolloProvider>
  );
}

export default App;
