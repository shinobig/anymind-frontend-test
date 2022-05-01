import React, {FC, useContext} from 'react';
import styled from "styled-components";
import UserIcon from "./UserIcon";
import MessageBubble from "./MessageBubble";
import MessageStatus from "./MessageStatus";
import {Message, UserId} from "../../../interfaces/interfaces";
import {ChatContextManager} from "../../../context/chatContext";
import {postMessage} from "../../../utils/postMessage";
import {useMutation} from "@apollo/client";
import {POST_MESSAGE} from "../../../graphql/mutations";

const MessageHolderComponent = styled.li<{ isCurrentUser: boolean }>`
  width: 90%;
  padding: 1em;
  display: flex;
  justify-content: ${({isCurrentUser}) => isCurrentUser ? 'flex-end' : 'flex-start'};

`
const MessageHolder: FC<Message> = ({
                                      userId,
                                      text,
                                      datetime,
                                      error
                                    }) => {


  const {selectedUserId, channel, chat, setChat} = useContext(ChatContextManager);

  const isCurrentUser = selectedUserId === userId

  const [createMessage] = useMutation(POST_MESSAGE)

  const resendMessage = async () => {
    let currentChat = [...chat]
    let messageToSend: Message = {
      text: text,
      userId: userId,
      datetime: new Date()
    }

    messageToSend = await postMessage(messageToSend, channel.channelId, createMessage)

    currentChat[currentChat.length - 1] = messageToSend
    setChat && setChat(currentChat)

  }

  if (isCurrentUser) {
    return (
      <MessageHolderComponent isCurrentUser={isCurrentUser}>
        <MessageStatus
          isCurrentUser={isCurrentUser}
          dateTime={datetime}
          error={error}
          resendMessage={resendMessage}
        />
        <MessageBubble
          text={text}
          isCurrentUser={isCurrentUser}
        />
        <UserIcon userId={userId as UserId}/>
      </MessageHolderComponent>
    )
  } else {

    return (
      <MessageHolderComponent isCurrentUser={isCurrentUser}>
        <UserIcon userId={userId as UserId}/>
        <MessageBubble
          text={text}
          isCurrentUser={isCurrentUser}
        />
        <MessageStatus
          isCurrentUser={isCurrentUser}
          dateTime={datetime}/>
      </MessageHolderComponent>
    );
  }

};

export default MessageHolder;
