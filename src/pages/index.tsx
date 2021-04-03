import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "./../styles/pages/Home.module.css";
import Header from "./../components/Header";
import Footer from "./../components/Footer";
import MainWord from "./../components/MainWord";
import axios from "axios";

export default function Home() {
  const [listJokes, setListJokes] = useState([]);
  const [joke, setJoke] = useState([]);

  function GetJokes() {
    axios
      .get("api/GetJokes")
      .then((response) => {
        setListJokes(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function randomJoke(listJokes) {
    const arrayJoke = listJokes.map((joke) => {
      return joke.piada;
    });

    setJoke(arrayJoke[~~(arrayJoke.length * Math.random())]);
  }

  useEffect(() => {
    GetJokes();
  }, []);

  useEffect(() => {
    randomJoke(listJokes);
  }, [listJokes]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Piadas ruins | Uma melhor do que a outra</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        ></link>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Lobster&display=swap"
        ></link>

        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      </Head>
      <main className={styles.main}>
        <div className={styles.backgroundGradient}>
          <Header />
          <MainWord listJokes={listJokes} joke={joke} />
          <div className={styles.footerButton}>
            <div className={styles.containerFooter}>
              <button
                className={styles.buttonStyle}
                onClick={() => randomJoke(listJokes)}
              >
                <span>Manda outra!</span>
              </button>
            </div>
          </div>
          {/* <Footer anotherJoke={() => randomJoke(listJokes)} /> */}
        </div>
      </main>
    </div>
  );
}
