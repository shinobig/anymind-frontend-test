import React, {FC, useContext} from 'react';
import styled from "styled-components";
import {UserId} from "../../../interfaces/interfaces";
import {selectIcon} from "../../../utils/IconSelecto";
import {ChatContextManager} from "../../../context/chatContext";


const UserIconHolder = styled.div<{currentUser?: boolean}>`
  width: 70px;
  height: 70px;
   margin-right: ${props => props.currentUser ? 0 : '2em'};
  margin-left:  ${props => props.currentUser ? '2em' : 0};
  text-align: center;
  color: #2196f3;
`

const UserIcon: FC<{userId: UserId}> = ({userId}) => {

  const {selectedUserId} = useContext(ChatContextManager);

  return (
    <UserIconHolder currentUser={selectedUserId === userId}>
      {selectIcon(userId)}
      {userId}
    </UserIconHolder>
  );
};

export default UserIcon;
