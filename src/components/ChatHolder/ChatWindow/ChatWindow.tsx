import React, {MutableRefObject, RefObject, useEffect, useRef} from 'react';
import styled from "styled-components";
import MessageHolder from "../MessageHolder/MessageHolder";
import ChatHeader from "../ChatHeader/ChatHeader";
import {UserId} from "../../../interfaces/interfaces";


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

  useEffect(() => {
   messageList.current.scrollTo(0, messageList.current.scrollHeight)
  }, []);


  return (
    <ChatWindowContainer
      ref={messageList}
    >

      <MessageHolder
        text='Hola'
        userId={UserId.RUSSEL}
        dateTime={new Date()}
        messageId='1'
      />
      <MessageHolder
        text='Hola saodjoasjdoasijdoajsdoijasodjoasj oasijdoiasjdoia joiasdjoia joasijdo iasjdoas jdoasijd oasijd oaisjdoia sjdoiasj doiasjd oiasjdo iasjdoiasj doiasjdo iajsoidj aso'
        userId={UserId.JOYSE}
        dateTime={new Date()}
        messageId='1'
      />
      <MessageHolder
        text='Hola'
        userId={UserId.SAM}
        dateTime={new Date()}
        messageId='1'
      />
      <MessageHolder
        text='Hola'
        userId={UserId.SAM}
        dateTime={new Date()}
        messageId='1'
      /><MessageHolder
      text='Hola'
      userId={UserId.SAM}
      dateTime={new Date()}
      messageId='1'
    /><MessageHolder
      text='Hola'
      userId={UserId.SAM}
      dateTime={new Date()}
      messageId='1'
    />

    </ChatWindowContainer>
  );
};

export default ChatWindow;
