import React, {FC, useContext} from 'react';
import {ChannelProperties} from "../../interfaces/interfaces";
import {ChatContextManager} from "../../context/chatContext";
import GeneralButton from "../SharedStyles/GeneralButton";

const ChannelButton: FC<ChannelProperties> = ({channelName, channelId}) => {
  const {channel, setChannel} = useContext(ChatContextManager);

  const changeChannelId = () => {
    setChannel && setChannel({channelId: channelId, channelName: channelName})
  }

  return (
    <GeneralButton
      selected={channel.channelId === channelId}
      onClick={changeChannelId}
      id={`button-${channelName}`}
    >
      {channelName}
    </GeneralButton>
  );
};

export default ChannelButton;
