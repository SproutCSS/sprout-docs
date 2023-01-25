import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import Cards from "../components/Cards/Cards";

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
      title: "v1.1.0",
      body: `- Improved styling syntax`,
    },
  ];

  return (
    <Layout
      title={`${siteConfig.title}`}
      description="A Tiny CSS Component Library"
    >
      <main>
        <div className={styles.heroBanner}>
          <h1>Welcome to Sprout 🌱</h1>
          <p>An Open Source Collection of CSS Blueprints</p>
          <div className={styles.install}>
            <button
              onClick={() => navigator.clipboard.writeText("npm i sproutcss")}
            >
              npm i sproutcss
            </button>
          </div>
        </div>
        <Cards cardData={cardData} />
      </main>
    </Layout>
  );
}
