import {fireEvent, render} from "@testing-library/react";
import MockAppComponent from "./MockAppComponent";
import ChatHolder from "../../components/ChatHolder/ChatHolder";
import {act} from "react-dom/test-utils";
import {text} from "stream/consumers";
import TextBox from "../../components/ChatHolder/TextBox/Textbox";
import {mockFetchLatest, mockPostMessage, testMessage} from "../mockQueries";
import {UserId} from "../../interfaces/interfaces";

Element.prototype.scrollTo = () => {
}

const responseMessage = {
  postMessage: {
    userId: UserId.SAM,
    text: 'Test Message',
    messageId: '99'
  }
}

describe('TextBox', () => {

  beforeEach(async () => {
    act(() => {
      render(
        <MockAppComponent
          mocks={[
            mockFetchLatest('1', testMessage),
            mockPostMessage('1', 'Testing message', responseMessage)
          ]}
        >
          <ChatHolder/>
        </MockAppComponent>
      );
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })
  })

  it('Render messages', () => {
    render(
      <MockAppComponent mocks={[]}>
        <TextBox/>
      </MockAppComponent>
    )

    const textArea = document.getElementById('chat-text-area') as HTMLTextAreaElement
    act(() => {
      fireEvent.change(textArea, {target: {value: 'test'}})
    })
    expect(textArea.value).toBe('test')
  })

  it('Send Message when click on send button', async () => {


    const textArea = document.getElementById('chat-text-area') as HTMLTextAreaElement

    act(() => {
      fireEvent.change(textArea, {target: {value: 'Test Message'}})
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const sendButton = document.getElementById('send-button') as HTMLButtonElement;

    act(() => {
      fireEvent.click(sendButton)
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const allMessages = document.getElementsByTagName('li');
    expect(allMessages.length).toBe(11)

  })

  it('Send message when pressing Enter', async () => {

    const textArea = document.getElementById('chat-text-area') as HTMLTextAreaElement

    act(() => {
      fireEvent.change(textArea, {target: {value: 'Test Message'}})
    })

    act(() => {
      fireEvent.keyDown(textArea, {key: 'Enter', code: 'Enter', charCode: 13})
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const allMessages = document.getElementsByTagName('li');
    expect(allMessages.length).toBe(11)

  })

  test('Does not send message if there is no message', async () => {
    const textArea = document.getElementById('chat-text-area') as HTMLTextAreaElement

    act(() => {
      fireEvent.keyDown(textArea, {key: 'Enter', code: 'Enter', charCode: 13})
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const allMessages = document.getElementsByTagName('li');
    expect(allMessages.length).toBe(10)

  })

  test('Does not send message if the user press shift', async () => {

    const textArea = document.getElementById('chat-text-area') as HTMLTextAreaElement
    act(() => {
      fireEvent.change(textArea, {target: {value: 'Test Message'}})
    })
    act(() => {
      fireEvent.keyDown(textArea, {key: 'Shift', code: 'Shift', charCode: 16})
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const allMessages = document.getElementsByTagName('li');
    expect(allMessages.length).toBe(10)
  })

})


