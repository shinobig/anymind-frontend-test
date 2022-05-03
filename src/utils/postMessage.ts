import {ChannelId, Message} from "../interfaces/interfaces";


export const postMessage = async (newMessage: Message, channelId: ChannelId, createMessage: any, test?: boolean) => {
  try {
    const {data} = await createMessage({
      variables: {
        userId: newMessage.userId,
        channelId: channelId,
        text: newMessage.text
      }
    })

    newMessage.messageId = data.postMessage.messageId;
  } catch (e: any) {

    newMessage.error = true
  }

  return newMessage
}
