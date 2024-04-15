import { useState } from "react"
export default function Player({initialName,symbol,isActive,onChangeName}){
const [playerName, setPlayerName] = useState(initialName);
const [ isEditing, setIsEditing ] = useState(false);
function nameEditHandler(){
    setIsEditing((editing)=> !editing);
}

function handleChange(event){
setPlayerName(event.target.value);
if(isEditing){
onChangeName(symbol,playerName);
}
}

let editablePlayerName = <span className="player-name">{playerName}</span>;

if(isEditing){
    editablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>

}
    return(
        <li className={isActive ? "active" : undefined}>
    <span className="player">
  {editablePlayerName}
    <span className="player-symbol">{symbol}</span>
    <button onClick={nameEditHandler}>{isEditing ? "Save" : "Edit"}</button>
</span> 
   </li>
    )
}