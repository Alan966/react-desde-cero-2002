import { useContext } from "react";
import GroupMember from "./GroupMember";
import { GroupContext } from "../App";

const GroupMembers = () => {

    const context = useContext(GroupContext)

    const filterGroupMmeber = member => member.name.includes(context.search)

    return(
        <ul className="group">
           {
               context.group ? 
               context.group.filter(filterGroupMmeber).map((member) => {
                   return(
                          <GroupMember name={member.name} />
                   )
               }) 
               : 
               <div>Cargandooo....</div>
           }
        </ul>
    )
}

export default GroupMembers;