import logo from './logo.svg';
import './App.css';
import Group from './Components/Group';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const GroupContext = createContext();

function App() {

  const [group, setGroup] = useState(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch("http://localhost:3000/names")
    .then(res => res.json())
    .then(members => {
      console.log(members)
      setGroup(members)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  function searchGroupMember (e) {
    setSearch(e.target.value)
  }

  function removeGroupMember (name){
    const memebrsFilter = group.filter(member => member.name !== name)
    setGroup(memebrsFilter)
  }

  return (
    <GroupContext.Provider value={{
      group, 
      search, 
      searchGroupMember, 
      removeGroupMember
    }}>
      <Group />
    </GroupContext.Provider>
  );
}

export default App;
