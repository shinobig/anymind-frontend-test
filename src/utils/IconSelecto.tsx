import {ReactComponent as RusselIcon} from '../Icons/RusselIcon.svg'
import {ReactComponent as SamIcon} from '../Icons/SamIcon.svg'
import {ReactComponent as JoyseIcon} from '../Icons/JoiseIcon.svg'
import {UserId} from "../interfaces/interfaces";

export const selectIcon = (userId: UserId) => {

  switch (userId) {
    case UserId.SAM:
      return <SamIcon/>
    case UserId.RUSSEL :
      return <RusselIcon/>
    case UserId.JOYSE:
      return <JoyseIcon/>
    default:
      return <SamIcon/>
  }

}
