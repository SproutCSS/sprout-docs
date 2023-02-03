import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Cards from "../components/Cards/Cards";
import Waves from "../assets/wave.png";

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  const cardData = [
    {
      path: "/heya",
      blank: false,
      title: "Heya,",
      body: "Thanks for stopping by!",
    },
    {
      path: "docs/intro",
      blank: false,
      title: "Get Started",
      body: `Install Sprout and view the components.`,
    },
    {
      path: "/changelog",
      blank: false,
      title: "New in v1.3.0",
      body: `No more unused styling. Generate a custom CSS stylesheet 🎉`,
    },
  ];

  return (
    <Layout title="Welcome" description="A Tiny CSS Component Library">
      <main>
        <div className={styles.heroBanner}>
          <h1>Welcome to Sprout 🌱</h1>
          <p>An Open Source Collection of CSS Blueprints</p>
          <div className={styles.install}>
            <button
              onClick={() =>
                navigator.clipboard.writeText(
                  "npm install --save-dev sproutcss"
                )
              }
            >
              npm install --save-dev sproutcss
            </button>
          </div>
        </div>
        <Cards cardData={cardData} />
      </main>
      <img className={styles.waves} src={Waves} alt="wave pattern" />
    </Layout>
  );
}
