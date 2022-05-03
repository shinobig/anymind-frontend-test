import React, {useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import {ChatContextManager} from "../../../context/chatContext";
import GeneralButton from "../../SharedStyles/GeneralButton";
import {AiOutlineArrowUp} from "react-icons/ai";
import {useFetchMore} from "../../../Hooks/Hooks";

const ChatHeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #90caf9;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
`

const ChatHeader = () => {

  const {channel, chat, setChat} = useContext(ChatContextManager);
  const [fetchMore] = useFetchMore()
  const [successfullyFetched, setSuccessfullyFetched] = useState(false);

  const readMoreMessages = () => {
    if (chat[0].messageId) {
      fetchMore({
        variables: {
          channelIdSearch: channel.channelId,
          oldestAvailableMessage: chat[0].messageId
        }
      }).then(
        response => {
          if (response?.data?.fetchMoreMessages.length > 0) {
            let currentChat = [...response.data.fetchMoreMessages, ...chat]
            setChat && setChat(currentChat)
            setSuccessfullyFetched(true)
          }
        }
      )
    }
  }

  useEffect(() => {
    if (successfullyFetched) {
      setTimeout(() => {
        setSuccessfullyFetched(false)
      }, 2000)
    }
  }, [successfullyFetched]);


  return (
    <ChatHeaderHolder
      id="chat-header-holder"
    >
      <h2 id='channel-title'>
        {channel.channelName}
      </h2>
      {
        successfullyFetched &&
        <p id='success-message'>More messages successfully loaded.</p>
      }
      <GeneralButton
        onClick={readMoreMessages}
        width={25}
        disabled={chat.length < 10}
        id='read-more-button'
      >
        Read More&nbsp;<AiOutlineArrowUp/>
      </GeneralButton>
    </ChatHeaderHolder>
  );
};

export default ChatHeader;
