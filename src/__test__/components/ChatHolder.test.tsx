import {render, fireEvent, screen} from "@testing-library/react";
import MockAppComponent from "./MockAppComponent";
import {act} from "react-dom/test-utils";
import ChatHolder from "../../components/ChatHolder/ChatHolder";
import {errorMessages, mockFetchLatest, mockFetchMore, returnMessages, testMessage} from "../mockQueries";
// import {fireEvent} from "@testing-library/react";


Element.prototype.scrollTo = () => {
}

describe('ChatHolder', () => {

  it('Renders without problem', () => {

    render(
      <MockAppComponent mocks={[]}>
        <ChatHolder/>
      </MockAppComponent>
    )

    const readMoreButton = document.getElementById('read-more-button')
    expect(readMoreButton).toBeTruthy()

  })


  it('renders initial messages', async () => {
    act(() => {
      render(
        <MockAppComponent
          mocks={[mockFetchLatest('1', testMessage)]}
        >
          <ChatHolder/>
        </MockAppComponent>
      );
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const messages = document.getElementsByTagName('li')
    expect(messages.length).toBe(10)
  })

  it('does not fetch if no messageId is found', async () => {

    render(
      <MockAppComponent
        mocks={[mockFetchMore('1', '1', errorMessages)]}
        mockChat={errorMessages}
      >
        <ChatHolder/>
      </MockAppComponent>
    )

    const button = document.getElementById('read-more-button')

    if (button) {
      fireEvent.click(button)
    }

    const chatBubbles = document.getElementsByTagName('li')
    expect(chatBubbles.length).toBe(0)

  })

  it('render more messages', async () => {


    act(() => {
      render(
        <MockAppComponent
          mocks={[mockFetchLatest('1', testMessage), mockFetchMore('1', '9', returnMessages)]}
        >
          <ChatHolder/>
        </MockAppComponent>
      );
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const messages = document.getElementsByTagName('li')
    expect(messages.length).toBe(10)

    const button = document.getElementById('read-more-button')
    act(() => {

      if (button) {
        fireEvent.click(button)
      }
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const chatBubbles = document.getElementsByTagName('li')
    expect(chatBubbles.length).toBe(20)

    const successMessage = document.getElementById('success-message')
    expect(successMessage).toBeTruthy()

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
    })

    const successMessageOff = document.getElementById('success-message')
    expect(successMessageOff).toBeFalsy()

  })

  it('Does not render if response is empty', async () => {


    act(() => {
      render(
        <MockAppComponent
          mocks={[mockFetchLatest('1', testMessage), mockFetchMore('1', '9', [])]}
        >
          <ChatHolder/>
        </MockAppComponent>
      );
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const messages = document.getElementsByTagName('li')
    expect(messages.length).toBe(10)

    const button = document.getElementById('read-more-button')
    act(() => {

      if (button) {
        fireEvent.click(button)
      }
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const chatBubbles = document.getElementsByTagName('li')
    expect(chatBubbles.length).toBe(10)

  })

});
