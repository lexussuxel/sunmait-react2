import Image from "next/image";
import { ICard } from "../utils/constants";
import styles from "./stylesCard.module.css";

const Card = ({ icon, title, text }: ICard) => {
  return (
    <div className={styles.item}>
      <Image alt="icon" src={icon} width={20} height={20} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
