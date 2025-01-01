import React from 'react'
import Draggable from 'react-draggable'

const Text = () => {

    const [editMode, setEditMode] = React.useState(false);
    const [val, setVal] = React.useState("Drag-Click Twise to toggle");

    const lastTap = React.useRef(0);

    const handleTouchStart = () => {
        const now = Date.now();
        const DOUBLE_TAP_DELAY = 300;
        if (now - lastTap.current < DOUBLE_TAP_DELAY) {
            setEditMode(true);
        }
        lastTap.current = now;
    };

    return (
        <Draggable>
            {
                editMode
                    ? (
                        <input
                            onDoubleClick={() => { setEditMode(false) }}
                            id='input'
                            type="text"
                            placeholder='click to edit'
                            onChange={(e) => {
                                setVal(e.target.value)
                                document.getElementById('input').style.position = "fixed";
                            }}
                            className='title-font w-44 m-2 text-center border-2 border-slate-900 rounded-md text-lg font-medium text-gray-900 mb-3' />
                    )
                    : (
                        <h1
                            onTouchStart={handleTouchStart}
                            onClick={() => setEditMode(true)}
                            id="val"
                            className="absolute left-24 title-font text-center text-lg font-medium text-gray-900 mb-3">{val}</h1>
                    )
            }
        </Draggable>
    )
}

export default Text