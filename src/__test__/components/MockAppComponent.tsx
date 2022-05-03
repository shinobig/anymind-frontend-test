import React, {FC, useState} from 'react';
import {ChannelNames, ChannelProperties, Message, UserId} from "../../interfaces/interfaces";
import {ChatContextManager} from "../../context/chatContext";
import {MockedProvider} from "@apollo/client/testing";

const App: FC<any> = ({
                        mocks,
                        children,
                        mockSelectedUserId = UserId.JOYSE,
                        mockChannel = {channelId: '1', channelName: ChannelNames.GENERAL},
                        mockChat = []
                      }) => {

  const [selectedUserId, setSelectedUserId] = useState<UserId>(mockSelectedUserId);
  const [channel, setChannel] = useState<ChannelProperties>(mockChannel);
  const [chat, setChat] = useState<Message[]>(mockChat);

  return (
    <MockedProvider mocks={mocks} addTypename={false}>

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
        {children}
      </ChatContextManager.Provider>
    </MockedProvider>
  );
}

export default App;
