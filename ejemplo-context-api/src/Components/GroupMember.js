import { GroupContext } from "../App";
import { useContext } from "react";

const GroupMember = ({ name }) =>  {
    
    const { removeGroupMember } = useContext(GroupContext)

    return(
    <li className="group_member" onClick={() => removeGroupMember(name)}>
        <span className="group_name">{ name }</span>
        <span className="group_delete">Eliminar</span>
    </li>
    ) 
}

export default GroupMember;