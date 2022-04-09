import Image from "next/image";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <Image src="/nft-choose.svg" alt="Vercel Logo" width={171} height={25} />
      <select>
        <option value="rinkeby">Rinkeby Network</option>
        <option value="ropsten">Ropsten Network</option>
      </select>
    </div>
  );
};

export default Header;
