import {useLazyQuery, useQuery} from "@apollo/client";
import {FETCH_LATEST_MESSAGES, FETCH_MORE_MESSAGES} from "../graphql/queries";
import {ChannelId} from "../interfaces/interfaces";

export const useLatestMessage = (channelId: ChannelId) => {

  return useQuery(FETCH_LATEST_MESSAGES, {
    fetchPolicy: 'network-only',
    variables: {
      channelIdSearch: channelId,
    }
  });
}

export const useFetchMore = () => {
  return useLazyQuery(FETCH_MORE_MESSAGES, {
    fetchPolicy: 'network-only'
  })
}
