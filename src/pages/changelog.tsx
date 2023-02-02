import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Changelog(): JSX.Element {
  return (
    <Layout title="Change Log" description="A Tiny CSS Component Library">
      <main className={styles.changelogContainer}>
        <h1>Change Log</h1>
        <div className={styles.changelog}>
          <h2>1.3.0</h2>
          <h3>Whats Changed</h3>
          <ul>
            <li>
              The SproutCSS module is no longer needed in production. It can now
              be
              <a href="/docs/intro"> installed as a dev dependency.</a>
            </li>
            <li>
              More customization options.
              <a href="/docs/Components/Buttons">
                {" "}
                Colors, hover styles, and borders.
              </a>
            </li>
            <li>
              If a component color is not specified, Sprout will now default to
              the primary color
            </li>
          </ul>
          <h3>Whats New</h3>
          <ul>
            <li>
              <em style={{ backgroundColor: "rgb(255, 251, 0, 0.2)" }}>
                No more unused styling 🥳
              </em>{" "}
              Sprout now
              <a href="/docs/custom-stylesheet">
                {" "}
                generates a custom css file.
              </a>
            </li>
            <li>
              New color options. Choose from primary, black, grey, red, orange,
              yellow, green, blue, purple, and pink.
            </li>
          </ul>
          <br />
          <h2>1.2.0</h2>
          <h3>Whats Changed</h3>
          <ul>
            <li>Shorter class names: text-i becomes txt-i.</li>
            <li>Better component darkmode styling.</li>
            <li>New greyscale colors.</li>
          </ul>
          <h3>Whats New</h3>
          <ul>
            <li>
              <a href="/docs/Components/Inputs">Number inputs</a>
            </li>
            <li>
              <a href="/docs/Components/Buttons">New buttons styles</a>
            </li>
            <li>
              <a href="/docs/Components/Cards">Cards</a>
            </li>
          </ul>
          <br />
          <h2>1.1.0</h2>
          <h3>Whats Changed</h3>
          <ul>
            <li>Simplified styling. No more btn-lg, just lg.</li>
            <li>Sizing syntax. Choose from xs, sm, md, lg, and xl.</li>
          </ul>
          <h3>Whats New</h3>
          <ul>
            <li>
              <a href="/docs/Components/Inputs">Text inputs</a>
            </li>
          </ul>
          <br />
          <h2>1.0.0</h2>
          <h3>Whats New</h3>
          <ul>
            <li>
              A <a href="/docs/Components/Buttons">button</a> ✨
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  );
}

function HiLi({ text }) {
  return <div className={styles.highlight}>{text}</div>;
}
