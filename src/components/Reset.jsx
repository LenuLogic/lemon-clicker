import {useState} from 'react';

function Reset(props) {
    const [showForm, setShowForm] = useState(false);
    const [value, setValue] = useState("");
    const handleReset = () => {
        props.handleReset();
        setValue("");
    }

    if (showForm) { // jos showForm on totta (oletus on epätosi)
        return (
            <div className="reset reset_box">
                <h2>resetting game data</h2>
                <p>Warning! You are about to remove all your 
                    items and clicks. By proceeding, all your data will
                    reset, and the game will restart from the beginning. </p>
                <p>Type <span>{props.resetvalue}</span> below.</p>
                <div><input type="text" 
                            value={value}
                            onChange={(e) => {setValue(e.target.value)}} /></div>
                <button disabled={props.resetvalue==value?false:true} 
                        onClick={handleReset}>reset game</button>
            </div>
        );
    } else {
        return (
            <div className="reset">
                <button onClick={()=>{setShowForm(true)}}>reset game</button>
            </div>
        );
    }
}

export default Reset;