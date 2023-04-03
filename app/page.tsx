// "use client";

// import Head from 'next/head'
// import Image from "next/image";
import { use, useEffect } from "react";
import Divider from "../components/Divider";
// import { useEffect } from "react";
import PrimaryNav from "../sections/PrimaryNav";
// import TextEditor from "../sections/TextEditor";
import styles from "../styles/Home.module.css";
import axios from "../utils/axios";
// import { useEffect, useState } from 'react'

async function getPages() {
  //  const result = await axios.get(
  //   "https://rickandmortyapi.com/api/character"
  // );
  const result = await axios.get("http://localhost:3000/api/pages");
  // console.log(result.data);
  return result.data;
}

export default async function Home() {
  const pages = await getPages();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     // const result = await axios.get(
  //     //   "https://rickandmortyapi.com/api/character"
  //     // );
  //     const result = await axios.get("http://localhost:3000/api/pages");
  //     console.log(result.data);
  //     return result;
  //   };

  //   fetchData();
  // }, []);
  return (
    <main className={styles.main}>
      {/* <Divider pages={pages} /> */}
      <PrimaryNav pages={pages} />

      {/* <section className={"px-6 py-3 grow"}>
          <TextEditor />
        </section> */}
    </main>
  );
}

// export default Home
