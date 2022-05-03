import {UserId} from "../interfaces/interfaces";
import {FETCH_LATEST_MESSAGES, FETCH_MORE_MESSAGES} from "../graphql/queries";
import {POST_MESSAGE} from "../graphql/mutations";


export const testMessage = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => ({
  text: `test message no ${num}`,
  messageId: `${num}`,
  userId: UserId.JOYSE,
  datetime: new Date(),
}))

export const returnMessages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map(num => ({
  text: `test message no ${num}`,
  messageId: `${num}`,
  userId: UserId.JOYSE,
  datetime: new Date(),
}))


export const errorMessages = testMessage.map(message => ({
  text: null,
  messageId: null,
  userId: UserId.JOYSE,
  datetime: message.datetime,
}))

export const mockFetchMore = (channelId: string, messageId: string, returnMessages: Array<any>) => ({
  request: {
    query: FETCH_MORE_MESSAGES,
    variables: {
      channelIdSearch: channelId,
      oldestAvailableMessage: messageId
    },
  },
  result: {
    data: {
      fetchMoreMessages: returnMessages
    }
  }
})

export const mockFetchLatest = (channelId: string, returnMessages: Array<any>) => ({
  request: {
    query: FETCH_LATEST_MESSAGES,
    variables: {
      channelIdSearch: channelId
    }
  },
  result: {
    data: {
      fetchLatestMessages: returnMessages
    }
  }
})

export const mockPostMessage = (channelId: string, text: string, postedMessage: any, userId?: UserId) => ({
  request: {
    query: POST_MESSAGE,
    variables: {
      channelId: channelId,
      text: text,
      userId: userId ? userId : UserId.JOYSE
    }
  },
  result: {data: postedMessage}
})
