import React, {useState} from 'react';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import {Controlled as ControlledEditor} from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import './Editor.css'

const Editor = ({ displayName, language, onChange, value }) => {

    const [open,setOpen] = useState(true);

    function handleChange(editor, data, value) {
        onChange(value);
    }

    return (
        <div className={`editor-container ${open ? '' : 'collapsed'}`}>
            <div className="editor-title">
                {displayName}
                <button onClick={() => setOpen(prevOpen => !prevOpen)} type="button" className="editor-title__expand-compress">
                    <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
                </button>
            </div>
                <ControlledEditor
                    onBeforeChange={handleChange}
                    value={value}
                    className="code-mirror-wrapper"
                    options={{
                        lineWrapping: true,
                        lint: true,
                        mode: language,
                        lineNumbers: true,
                        theme: 'material'
                    }}
                />
        </div>
    );
};

export default Editor;