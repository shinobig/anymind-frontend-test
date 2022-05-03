import {act, fireEvent, render, screen} from "@testing-library/react";
import MockAppComponent from "./MockAppComponent";
import ChannelButton from "../../components/Menu/ChannelButton";
import {ChannelNames, UserId} from "../../interfaces/interfaces";
import {Channel} from "diagnostics_channel";
import ChatHeader from "../../components/ChatHolder/ChatHeader/ChatHeader";
import Menu from "../../components/Menu/Menu";


Element.prototype.scrollTo = () => {
}
describe('Menu', () => {

  beforeEach(() => {
    render(
      <MockAppComponent mocks={[]}>
        <Menu/>
        <ChatHeader/>
      </MockAppComponent>
    )
  })

  it('render without error', () => {
    // render(
    //   <MockAppComponent mocks={[]}>
    //     <ChannelButton channelId={'1'} channelName={ChannelNames.GENERAL}/>
    //   </MockAppComponent>
    // )

    const channelButton = document.getElementById('button-General Channel')
    expect(channelButton).toBeTruthy()

  })

  it('Change the channel when click on channel button', () => {
    //
    // render(
    //   <MockAppComponent mocks={[]}>
    //     <Menu/>
    //     <ChatHeader/>
    //   </MockAppComponent>
    // )

    const channelButton = document.getElementById('button-Technology Channel') as HTMLButtonElement
    expect(channelButton).toBeTruthy();

    act(() => {
      fireEvent.click(channelButton)
    })

    const title = document.getElementById('channel-title') as HTMLElement
    expect(title).toHaveTextContent(ChannelNames.TECHNOLOGY)
  })

  it('Change user when using Drop Down Select', () => {
    const selectUser = document.getElementById('select-user') as HTMLSelectElement

    act(() => {
      fireEvent.change(selectUser, {target: {value: UserId.RUSSEL}})
    })

    expect(selectUser.value).toBe(UserId.RUSSEL)

  })

})
