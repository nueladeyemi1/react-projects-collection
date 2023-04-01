import { RiDeleteBinLine } from "react-icons/ri";
import { FiEdit2 } from "react-icons/fi";

export const buttons = [
  {
    id: 1,
    buttonName: "Edit",
    icon : <FiEdit2 />
  },
  {
    id: 2,
    buttonName: "Delete",
    icon : <RiDeleteBinLine />
  },
  {
    id: 3,
    buttonName: "Create Parameter",
    icon : ''
  },
];


export const tabsLink = [{
    id : 1,
    name : 'My Parameters'
}, 
{
    id : 2,
    name : 'Public'
},
{
    id : 3,
    name : 'Configurations'
}]