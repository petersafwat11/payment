"use client";
import { useEffect, useRef } from "react";
import styles from "./page.module.css";

export default function Home() {
  const ref = useRef(null);
  // useEffect(() => {
  //   const iframe = ref.current;
  //   iframe.onload = () => {
  //     try {
  //       const iframeDocument =
  //         iframe.contentDocument || iframe.contentWindow.document;
  //       const targetP = Array.from(
  //         iframeDocument.querySelectorAll("p.text")
  //       ).find((p) => p.textContent === "Secure payment by Square");
  //       if (targetP) {
  //         // Do something with the targeted <p> element
  //         targetP.style.display = "none"; // Example action
  //       }
  //     } catch (error) {
  //       console.error("Cannot access iframe content:", error);
  //     }
  //   };
  // }, []);

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
