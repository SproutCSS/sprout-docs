import React from "react";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeBlock from "@theme/CodeBlock";
import "./layout.css";
import "../../../sproutcss/sprout.css";

export default function Layout({ options, preview, html, jsx }) {
  return (
    <>
      <Options options={options} />
      <Code preview={preview} html={html} jsx={jsx} />
    </>
  );
}

function Code({ preview, html, jsx }) {
  return (
    <Tabs>
      <TabItem value="preview" label="Preview" default>
        {preview.map((row) => {
          return <div className="flex">{row}</div>;
        })}
      </TabItem>
      <TabItem value="html" label="HTML">
        <CodeBlock language="html">{html}</CodeBlock>
      </TabItem>
      <TabItem value="jsx" label="JSX">
        <CodeBlock language="jsx">{jsx}</CodeBlock>
      </TabItem>
    </Tabs>
  );
}

function Options({ options }) {
  return (
    <div className="options">
      {options.desc !== null ? (
        <div className="class">{options.desc}</div>
      ) : null}
      {options.options.map((option) => {
        return (
          <div className="row">
            <div className="name">{option.name}</div>
            <div className="choices">
              {option.choices.split(" ").map((choice) => {
                return <Class class={choice} />;
              })}
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
}

function Class(props) {
  return (
    <button
      className="choice-btn"
      onClick={() => navigator.clipboard.writeText(props.class)}
    >
      {props.class}
    </button>
  );
}
