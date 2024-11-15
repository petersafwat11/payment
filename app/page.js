"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const ref = useRef(null);
  return (
    <div className={styles.page}>
      <p className={styles["span"]}></p>
      <p className={styles["span-2"]}></p>

      <iframe
        ref={ref}
        className={styles["myIframe"]}
        src="https://checkout.square.site/merchant/MLP0WXSWXNRE4/checkout/PIUGPDM24JEXKJD7CMT2GGII?src=sheet"
      ></iframe>
    </div>
  );
}
