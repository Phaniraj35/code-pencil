import React, {useState, useEffect} from 'react';
import Editor from "./Editor/Editor";
import UseLocalStorage from "../hooks/useLocalStorage";

function App() {
    const [html,setHtml] = UseLocalStorage('html','');
    const [css,setCss] = UseLocalStorage('css','');
    const [js,setJs] = UseLocalStorage('js','');
    const [srcDoc,setSrcDoc] = useState('');

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setSrcDoc(`<html>
                <body>${html}</body>
                <style>${css}</style>
                <script>${js}</script></html>`
            )
        },250)

        return () => clearTimeout(timeOut);
    }, [html,css,js])

      return (
        <>
            <div className="pane pane__top">
                <Editor
                    language="xml"
                    displayName="HTML"
                    value={html}
                    onChange={setHtml}
                />
                <Editor
                    language="css"
                    displayName="CSS"
                    value={css}
                    onChange={setCss}
                />
                <Editor
                    language="javascript"
                    displayName="Javascript"
                    value={js}
                    onChange={setJs}
                />
            </div>
            <div className="pane">
                <iframe
                    srcDoc={srcDoc}
                    title="output"
                    sandbox="allow-scripts"
                    frameBorder="0"
                    height="100%"
                    width="100%"
                />
            </div>
        </>
      );
}

export default App;
