import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Changelog(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Tiny CSS Component Library"
    >
      <main className={styles.changelogContainer}>
        <h1>Change Log</h1>
        <div className={styles.changelog}>
          <h2>1.2.0</h2>
          <h3>Whats Changed</h3>
          <ul>
            <li>Shorter class names: text-i becomes txt-i.</li>
            <li>Better component darkmode styling.</li>
          </ul>
          <h3>Whats New</h3>
          <ul>
            <li>
              <a href="/docs/Components/Inputs">Number inputs</a>
            </li>
            <li>
              <a href="/docs/Components/Buttons">New buttons styles</a>
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
              A <a href="/docs/Components/Buttons">button</a> 🎉
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
