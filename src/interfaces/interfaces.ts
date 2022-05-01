import {Dispatch, SetStateAction} from "react";

export enum UserId {
  SAM = 'Sam',
  JOYSE = 'Joyse',
  RUSSEL = 'Russell'
}

export enum ChannelNames {
  GENERAL = 'General Channel',
  TECHNOLOGY = 'Technology Channel',
  LGTM = 'LGTM Channel'
}

export type ChannelId = '1' | '2' | '3'

export interface Message {
  text: string
  messageId: string
  dateTime: Date
  userId: UserId
}

export interface ChannelProperties {
  channelId: ChannelId
  channelName: ChannelNames
}

export interface ChatContext {
  selectedUserId: UserId,
  channel: ChannelProperties
  setSelectedUserId?: Dispatch<SetStateAction<UserId>>
  setChannel?: Dispatch<SetStateAction<ChannelProperties>>
}
