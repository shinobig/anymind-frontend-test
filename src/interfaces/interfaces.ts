import {Dispatch, SetStateAction} from "react";


export enum UserId {
  SAM = 'Sam',
  JOYCE = 'Joyce',
  RUSSEL = 'Russell'
}

export type ChannelId = '1' | '2' | '3'

export interface Message{
  text: string
  messageId: string
  dateTime: Date
  userId: string
}

export interface ChatContext {
  userId: UserId,
  channelId: ChannelId,
  setUserId?: Dispatch<SetStateAction<UserId>>
  setChannelId?: Dispatch<SetStateAction<ChannelId>>
}
