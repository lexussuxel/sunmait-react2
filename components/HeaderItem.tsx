import { Dispatch, SetStateAction } from "react";
import { IHeaderItem } from "../utils/constants";
import styles from "./stylesHeaderItem.module.css";

interface ISelect {
  open: boolean;
  setOpen: Dispatch<SetStateAction<string>>;
}

const HeaderItem = ({ title, inner, open, setOpen }: IHeaderItem & ISelect) => {
  function clickHandler() {
    if (open) setOpen("");
    else setOpen(title);
  }
  return (
    <div className={styles.wrapper_text}>
      <p className={styles.headertext} onClick={clickHandler}>
        {title}
      </p>
      <div className={`${styles.dropdown} ${open ? styles.open : ""}`}>
        {inner.map((inn, i) => (
          <p key={i}>{inn}</p>
        ))}
      </div>
    </div>
  );
};

export default HeaderItem;
