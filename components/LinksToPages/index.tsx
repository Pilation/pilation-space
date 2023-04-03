// "use client";

import Link from "next/link";
import styles from "./styles.module.css";

export default function LinksToPages() {
  return (
    <div className={styles.card}>
      <h2>Page Navigation</h2>
      <ul className={styles.linksList}>
        <Link href={"/"} passHref>
          <li className={styles.link}>Index</li>
        </Link>
        <Link href={"/about"} passHref>
          <li className={styles.link}>About</li>
        </Link>
        <Link href={"/blog"} passHref>
          <li className={styles.link}>Blog</li>
        </Link>
        <Link href={"/editor"} passHref>
          <li className={styles.link}>Editor</li>
        </Link>
        <Link href={"/resourcelist"} passHref>
          <li className={styles.link}>Resourcelist</li>
        </Link>
        <Link href={"/spaces"} passHref>
          <li className={styles.link}>Spaces</li>
        </Link>
        <Link href={"/test"} passHref>
          <li className={styles.link}>test</li>
        </Link>
        <Link href={"/graphs"} passHref>
          <li className={styles.link}>graphs</li>
        </Link>
      </ul>
    </div>
  );
}
