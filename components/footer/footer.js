import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://www.youtube.com/channel/UCCyxBPhe_gCIFx85BLXsUMA/featured"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image
            src="/nft-choose.svg"
            alt="Vercel Logo"
            width={171}
            height={25}
          />
        </span>
      </a>
    </footer>
  );
};

export default Footer;
