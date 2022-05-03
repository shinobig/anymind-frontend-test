import {selectIcon} from "../../utils/IconSelector";
import {render} from "@testing-library/react";
import {UserId} from "../../interfaces/interfaces";

describe('Icon Selector', () => {

  test('Render Russel Icon', () => {
    render(
      <>
        {selectIcon(UserId.RUSSEL)}
      </>
    )
    const icon = document.getElementById('russel-icon');
    expect(icon).toBeTruthy()
  })

  test('Render Sam Icon', () => {
    render(
      <>
        {selectIcon(UserId.SAM)}
      </>
    )
    const icon = document.getElementById('sam-icon');
    expect(icon).toBeTruthy()
  })

  test('Render Joyse Icon', () => {
    render(
      <>
        {selectIcon(UserId.JOYSE)}
      </>
    )
    const icon = document.getElementById('joyse-icon');
    expect(icon).toBeTruthy()
  })

  test('Render Sam as default', () => {
    render(
      <>
        {selectIcon(undefined)}
      </>
    )
    const icon = document.getElementById('sam-icon');
    expect(icon).toBeTruthy()
  })
})
