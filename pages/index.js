import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ animal: animalInput }),
    });
    const data = await response.json();
    setResult(data.result);
    setAnimalInput("");
  }
  


  return (
    <div>
      <Head>
        <title>Haustiernamen-Finder</title>
        <link rel="icon" href="/pettag.svg" />
      </Head>

      <main className={styles.main}>
        <img src="/supercat.svg" className={styles.icon} />
        <h3>Benenn dein Super-Haustier</h3>
                <p>Keine Katze muss Muschi heißen. Unsere Haustiere sind Superhelden! Drück auf den Button und finde für deinen neuen Mitbewohner einen Superheldennamen. Inspiriert von den bewunderten Stars aus deinen Lieblingsfilmen und unserer einzigartigen Künstlichen Intelligenz. Hast du eine gelbe Katze, einen schwarzen Hund oder ein karriertes Meerschweinchen?</p>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="animal"
            placeholder="Gib ein Tier ein"
            value={animalInput}
            onChange={(e) => setAnimalInput(e.target.value)}
          />
          <input type="submit" value="Finde einen Namen" />
        </form>

        <div className={styles.result}>{result}</div>
                    <a target="_blank" href="https://www.amazon.de/b?_encoding=UTF8&tag=wissensjakobv-21&linkCode=ur2&linkId=cfc1b40bcfc854da7647c2bc20db8c2c&camp=1638&creative=6742&node=340852031">Hast du Futternapf, Spielzeug, Bett? Die besten Dinge für deinen Liebling gibts auf amazon. (Affiliate-Link)</a>

      </main>
    </div>
    
  );

}

