import React from 'react'
import Draggable from 'react-draggable'

const Text = () => {

    const [editMode, setEditMode] = React.useState(false);
    const [val, setVal] = React.useState("Drag & 2x Click");

    return (
        <Draggable>

            {editMode ? (
                <input
                    type="text"
                    onChange={(e) => setVal(e.target.value)}
                    onDoubleClick={() => setEditMode(false)}
                    className="m-2 text-center border-1 border-slate-900 rounded-md font-medium text-gray-900"
                    placeholder="Edit & 2x Click"
                    style={{
                        width: "max-content",
                        padding: '2px 10px',
                    }}
                />
            ) : (
                <div
                    onDoubleClick={() => setEditMode(true)}
                    id='val'
                    className="absolute m-2 text-center font-medium text-gray-900"
                    style={{
                        width: "max-content",
                        margin: 0,
                        padding: '2px 10px',
                    }}>
                    {val}
                </div>
            )}
        </Draggable>
    )
}

export default Text;
