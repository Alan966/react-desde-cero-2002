import { useContext } from "react";
import { GroupContext } from "../App";
import GroupMembers from "./GroupMembers";

const Group = () => {
    const { searchGroupMember } = useContext(GroupContext)

    return (
        <section>
            <input type="search" 
            placeholder="Buscar miembros"
            onKeyUp={searchGroupMember}
            />
            <GroupMembers />
        </section>
    )
}

export default Group;