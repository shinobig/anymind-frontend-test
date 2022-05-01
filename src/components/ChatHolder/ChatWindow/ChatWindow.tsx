import React from 'react';
import styled from "styled-components";
import MessageHolder from "../MessageHolder/MessageHolder";
import ChatHeader from "../ChatHeader/ChatHeader";
import {UserId} from "../../../interfaces/interfaces";


const ChatWindow = () => {

  const ChatWindowContainer = styled.section`
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

  return (
    <ChatWindowContainer>

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
