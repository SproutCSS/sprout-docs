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
        <div className={styles.changelog}>
          <h1>Change Log</h1>
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
