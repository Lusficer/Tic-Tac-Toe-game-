import { useState } from "react";
export default function Player({initialName, symbol, isActive}){
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    function handleClick() {
        setIsEditing((editing) => !editing);
    }

    function handleChange(e){
        setPlayerName(e.target.value);
    }

    let ediablePlayerName = <span className="player-name">{playerName}</span>
    // let btnCaption = 'Edit'
    if(isEditing){
        ediablePlayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        // btnCaption = 'Save'
    }
    return(
        <li className={isActive ? "active": undefined}>
            <span className="player">
                {ediablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick}>{isEditing ? 'Save': 'Edit'}</button>
        </li>
    );
}