import React from 'react'
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from '@theme/CodeBlock';
import '../css/layout.css'
import '../css/sprout.css'


export default function Layout({ title, options, preview, html, jsx, next }) {
    return (
        <>
            <h3>{title}</h3>
            <Options options={options} />
            <Code
                preview={<div className="flex">
                    {preview[0]}
                </div>}
                html={html}
                jsx={jsx}
                next={next}
            />
        </>
    )
}


function Code({ preview, html, jsx, next }) {
    return (
        <Tabs>
            <TabItem value="preview" label="Preview" default>
                {preview}
            </TabItem>
            <TabItem value="html" label="HTML">
                <CodeBlock language="html">{html}</CodeBlock>
            </TabItem>
            <TabItem value="jsx" label="React JSX">
                <CodeBlock language="jsx">{jsx}</CodeBlock>
            </TabItem>
            <TabItem value="next" label="Next JSX">
                <CodeBlock language="jsx">{next}</CodeBlock>
            </TabItem>
        </Tabs>
    );
}


function Options({ options }) {
    return (
        <div className="options">
            <div className="class">{options.desc}</div>
            {options.options.map(option => {
                return (
                    <div className="row">
                        <h4>{option.name}: </h4>
                        <div className="choices">
                            {option.choices.split(' ').map(choice => {
                                return <Class class={choice} />
                            })}
                        </div>
                    </div>
                )
            })}
            <br />
        </div>
    )
}

function Class(props) {
    return (
        <button className="btn" onClick={() => navigator.clipboard.writeText(props.class)}
        >
            {props.class}
        </button>
    )
}