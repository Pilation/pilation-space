// 'use client'
// import Head from 'next/head'
// import Image from "next/image";
import { use } from "react";

// import PrimaryNav from "../sections/PrimaryNav";
// import TextEditor from "../sections/TextEditor";
import styles from "../styles/Home.module.css";
import axios from "../utils/axios";
// import { useEffect, useState } from 'react'

async function getPages() {
  // const pages = await axios.get("http://localhost:3000/api/pages");
  // console.log(pages.data);
  // const result = await fetch("https://rickandmortyapi.com/api/character");
  const result = await fetch("http://localhost:3000/api/pages");
  // const resultJson = await result.json();
  // return resultJson;
  console.log(result.response);
  return result;
  // return pages.data;
}

export default async function Home() {
  const pages = await getPages();
  console.log(pages);
  return (
    <main className={styles.main}>
      {/* <PrimaryNav pages={pages} /> */}

      {/* <section className={"px-6 py-3 grow"}>
          <TextEditor />
        </section> */}
    </main>
  );
}

// export default Home
