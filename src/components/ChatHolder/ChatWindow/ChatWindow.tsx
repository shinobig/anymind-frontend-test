import React, {MutableRefObject, RefObject, useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import MessageHolder from "../MessageHolder/MessageHolder";
import ChatHeader from "../ChatHeader/ChatHeader";
import {Message, UserId} from "../../../interfaces/interfaces";
import {useLatestMessage} from "../../../Hooks/Hooks";
import {ChatContextManager} from "../../../context/chatContext";
import Spinner from "../../Spinner/Spinner";


const ChatWindowContainer = styled.ul<{ ref?: MutableRefObject<HTMLUListElement> }>`
  grid-row: 2;
  padding: 1em;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #d6dee1;
    border-radius: 20px;
    border: 6px solid transparent;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a8bbbf;
  }
`

const ChatWindow = () => {

  const messageList = useRef() as MutableRefObject<HTMLUListElement>;
  const {channel, chat, setChat} = useContext(ChatContextManager);
  const {data, loading, error} = useLatestMessage(channel.channelId)

  useEffect(() => {
    if (data?.fetchLatestMessages && setChat) {
      let reversedArray = [...data.fetchLatestMessages]
      setChat(reversedArray.reverse())
    }
  }, [data]);

  useEffect(() => {
    // Ensure that chat goes to bottom when loading and posting new messages
    messageList.current.scrollTo(0, messageList.current.scrollHeight)
  }, [chat]);

  return (
    <ChatWindowContainer
      ref={messageList}
    >
      {
        loading ?
          <Spinner/> :
          <>
            {
              chat.map(({text, userId, messageId, datetime, error}: Message, index) => {
                  return (
                    <MessageHolder
                      text={text}
                      messageId={userId}
                      datetime={new Date(datetime)}
                      userId={userId as UserId}
                      key={messageId ? messageId : `${index}-${userId}`}
                      error={error}
                    />
                  )
                }
              )
            }
          </>
      }
    </ChatWindowContainer>
  );
};

export default ChatWindow;
