import React, {useContext} from 'react'
import styled from 'styled-components'
import {UserId, ChannelNames, ChannelId} from "../../interfaces/interfaces";
import ChannelButton from "./ChannelButton";
import {ChatContextManager} from "../../context/chatContext";

const MenuContainer = styled.div`
  grid-column: 1/4;
  background-color: #90caf9;
  grid-row: 2/-1;
  padding: 1em;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  border-right: 1px solid #64b5f6;
`

const SelectUser = styled.select`
  margin: .5em 0;
  padding: .5em;
  border-radius: 5px;
  background-color: #e3f2fd;
  width: 100%;
  border: none;
  font-size: 20px;
  box-shadow: 0 2px 10px #64b5f6;
  outline: none;
  cursor: pointer;
`


const Menu = () => {

  const {setSelectedUserId} = useContext(ChatContextManager);

  const users = Object.values(UserId)
  const channels = Object.values(ChannelNames).map((channel, index) => ({
    channelName: channel,
    channelId: `${index + 1}` as ChannelId
  }))

  const switchUser = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUserId && setSelectedUserId(event.target.value as UserId)
  }


  return (
    <MenuContainer>
      <label>1. Choose your user</label>
      <SelectUser
        id='select-user'
        onChange={switchUser}
      >
        {
          users.map(user => <option value={user} key={user} id={user}>{user}</option>)
        }
      </SelectUser>

      <p>2. Choose your Channel</p>
      {
        channels.map(({channelName, channelId}) =>
          <ChannelButton
            key={channelId}
            channelName={channelName}
            channelId={channelId}/>)
      }

    </MenuContainer>
  )
}

export default Menu
