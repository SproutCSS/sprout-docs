import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";

export default function Heya(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title="❤️" description="A Tiny CSS Component Library">
      <main>
        <div className={styles.heroBanner}>
          <h1 className={styles.heya}>❤️🌱</h1>
          <h2>You're The Best</h2>
        </div>
      </main>
    </Layout>
  );
}
