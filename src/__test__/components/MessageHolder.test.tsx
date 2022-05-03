import {fireEvent, render, screen} from "@testing-library/react";
import MockAppComponent from "./MockAppComponent";
import ChatHolder from "../../components/ChatHolder/ChatHolder";
import {act} from "react-dom/test-utils";
import {mockFetchLatest, mockPostMessage} from "../mockQueries";
import {UserId} from "../../interfaces/interfaces";
import ChatWindow from "../../components/ChatHolder/ChatWindow/ChatWindow";
import MessageHolder from "../../components/ChatHolder/MessageHolder/MessageHolder";


Element.prototype.scrollTo = () => {
}


const responseMessage = {
  postMessage: {
    userId: UserId.JOYSE,
    text: `test message, not send`,
    messageId: '456'
  }
}

const userMessage = [{
  text: `test message`,
  messageId: `123`,
  userId: UserId.JOYSE,
  datetime: new Date(),
}]

const otherUserMessage = [{
  text: `test message`,
  messageId: `123`,
  userId: UserId.SAM,
  datetime: new Date(),
}]

const errorMessage = [{
  text: 'test message, not send',
  messageId: '456',
  userId: UserId.JOYSE,
  datetime: new Date(),
  error: true,
}]

describe('TextBox', () => {
  it('Renders without problem', (done) => {

    render(
      <MockAppComponent
        mocks={[]}
      >
        <ChatHolder/>
      </MockAppComponent>
    )

    const readMoreButton = document.getElementById('send-button')
    expect(readMoreButton).toBeTruthy()
    done()
  })

  it('render other users messages', async () => {

    render(
      <MockAppComponent
        mocks={[]}
        mockChat={otherUserMessage}
      >
        <MessageHolder
          messageId={'123'}
          text={'test message'}
          userId={UserId.SAM}
          datetime={new Date()}
        />
      </MockAppComponent>
    );

    const user = screen.queryAllByText(/Sam/i);
    expect(user).toBeTruthy()

  })

  it('render selected user bubble', async () => {
    act(() => {
      render(
        <MockAppComponent
          mockSelectedUserId={UserId.JOYSE}
          mocks={[mockFetchLatest('1', userMessage)]}
        >
          <ChatWindow/>
        </MockAppComponent>
      );
    })
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })
    const messages = document.getElementsByTagName('li')
    expect(messages.length).toBe(1)
    const sendMessage = screen.getByText(/Sent/i);
    expect(sendMessage).toBeTruthy()

  })

  it('render error message', async () => {


    render(
      <MockAppComponent
        mockSelectedUserId={UserId.JOYSE}
        mocks={[]}
        mockChat={errorMessage}
      >
        <ChatWindow/>
      </MockAppComponent>
    );


    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })


    const messages = document.getElementsByTagName('li')
    expect(messages.length).toBe(1)

    const sendMessage = screen.getByText(/Error/i);
    expect(sendMessage).toBeTruthy()

  })

  it('resend message', async () => {
    act(() => {
      render(
        <MockAppComponent
          mocks={[
            mockPostMessage('1', 'test message, not send', responseMessage)
          ]}
          mockChat={errorMessage}
          mockSelectedUserId={UserId.JOYSE}
        >
          <ChatHolder/>
        </MockAppComponent>
      );
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 10));
    })

    const messages = document.getElementsByTagName('li')
    expect(messages.length).toBe(1)

    const sendMessage = screen.getByText(/Error/i);
    expect(sendMessage).toBeTruthy()

    const resendButton = document.getElementById('resend-button') as HTMLButtonElement


    act(() => {
      fireEvent.click(resendButton)
    })

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 100));
    })

    const successMessage = screen.getByText(/Sent/i);
    expect(successMessage).toBeTruthy()
  })

})
