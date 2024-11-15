import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <iframe
        className={styles["myIframe"]}
        src="https://checkout.square.site/merchant/MLP0WXSWXNRE4/checkout/PIUGPDM24JEXKJD7CMT2GGII?src=sheet"
      ></iframe>
    </div>
  );
}
