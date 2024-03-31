import { AiOutlineGlobal } from 'react-icons/ai'
import { PiStudent } from 'react-icons/pi'
import { PiUserCircleLight } from 'react-icons/pi'
import { PiChalkboardTeacherLight } from 'react-icons/pi'
import { PiChalkboardLight } from 'react-icons/pi'

export interface AddressData {
  id: number
  icon: JSX.Element
  text: string
}

export const addressData: AddressData[] = [
  {
    id: 1,
    icon: <AiOutlineGlobal size={25} />,
    text: 'Everyone',
  },
  {
    id: 2,
    icon: <PiStudent size={25} />,
    text: 'Students',
  },
  {
    id: 3,
    icon: <PiUserCircleLight size={25} />,
    text: 'Parents',
  },
  {
    id: 4,
    icon: <PiChalkboardTeacherLight size={25} />,
    text: 'Teachers',
  },
  {
    id: 5,
    icon: <PiChalkboardLight size={25} />,
    text: 'Class',
  },
]
