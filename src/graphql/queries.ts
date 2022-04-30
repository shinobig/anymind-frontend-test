import {gql} from "@apollo/client";

export const FETCH_LATEST_MESSAGES = gql`
query MessagesFetchLatest($channelIdSearch: String!){
    fetchLatestMessages(channelId: $channelIdSearch){
      text
      userId
      messageId
    }
  }
`
