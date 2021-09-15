import React, { useEffect, useState } from 'react';
import showdown from 'showdown';
import parse from 'html-react-parser';
import readme from '../blog-post1.md';

export default function ComponentName() {
    const [html, setHTML] = useState("");

    //Use componentDidMount(): if class based component to load md file
    useEffect(() => {
        fetch(readme)
            .then(data => data.text())
            .then(text => {
                const converter = new showdown.Converter();
                setHTML(converter.makeHtml(text));
            })
    }, []);

    return (
        <div>{parse(html)}</div>
    )
}
