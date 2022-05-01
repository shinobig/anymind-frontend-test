import React, {FC, useContext} from 'react';
import styled from "styled-components";
import UserIcon from "./UserIcon";
import MessageBubble from "./MessageBubble";
import MessageStatus from "./MessageStatus";
import {Message, UserId} from "../../../interfaces/interfaces";
import {ChatContextManager} from "../../../context/chatContext";

const MessageHolderComponent = styled.div<{ isCurrentUser: boolean }>`
  width: 90%;
  padding: 1em;
  display: flex;
  justify-content: ${({isCurrentUser}) => isCurrentUser ? 'flex-end' : 'flex-start'};

`
const MessageHolder: FC<Message> = ({
                                      userId,
                                      text,
                                      dateTime,
                                      messageId
                                    }) => {


  const {selectedUserId} = useContext(ChatContextManager);

  const isCurrentUser = selectedUserId === userId

  if (isCurrentUser) {
    return (
      <MessageHolderComponent isCurrentUser={isCurrentUser}>
        <MessageStatus
          isCurrentUser={isCurrentUser}
          dateTime={dateTime}
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
          dateTime={dateTime}/>
      </MessageHolderComponent>
    );
  }

};

export default MessageHolder;
