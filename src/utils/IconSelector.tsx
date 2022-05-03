import {ReactComponent as RusselIcon} from '../Icons/RusselIcon.svg'
import {ReactComponent as SamIcon} from '../Icons/SamIcon.svg'
import {ReactComponent as JoyseIcon} from '../Icons/JoiseIcon.svg'
import {UserId} from "../interfaces/interfaces";

export const selectIcon = (userId: UserId | undefined) => {

  switch (userId) {
    case UserId.SAM:
      return <SamIcon id='sam-icon'/>
    case UserId.RUSSEL :
      return <RusselIcon id='russel-icon'/>
    case UserId.JOYSE:
      return <JoyseIcon id='joyse-icon'/>
    default:
      return <SamIcon id='sam-icon'/>
  }

}
