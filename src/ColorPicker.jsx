import React, {useState} from 'react';

export default function ColorPicker() {
    const [color, setColor] = useState('#ffffff');

    const handleChange = (e) =>{
        setColor(e.target.value);
    }

  return (
    <div className='color-picker-container'>
        <h1>Color Picker</h1>
        <div className='color-display' style={{backgroundColor: color}}>
            <p>Selected Color: {color}</p>
        </div>
        <label>Select a Color:</label>
        <input type="color" value={color} onChange={handleChange}></input>
    </div>
  )
}
