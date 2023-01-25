import React from "react";
import styles from "./Cards.module.css";

const Cards = ({ cardData }) => {
  return (
    <div className={styles.cards}>
      {cardData.map((card) => (
        <Card
          title={card.title}
          blank={card.blank}
          body={card.body}
          path={card.path}
        />
      ))}
    </div>
  );
};

export default Cards;

interface CardProps {
  path: string;
  blank: boolean;
  title: string;
  body: string;
}

const Card = ({ path, blank, title, body }: CardProps) => {
  return (
    <a href={path} target={blank ? "_blank" : null} className={styles.card}>
      <h2>{title}</h2>
      <p>{body}</p>
    </a>
  );
};
