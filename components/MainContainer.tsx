import Image from "next/image";
import React, { useState } from "react";
import burgerIcon from "./assets/burger.png";
import closeIcon from "./assets/close.png";
import styles from "./stylesContainer.module.css";
import { HEADER_ITEMS } from "../utils/constants";
import HeaderItem from "./HeaderItem";
import Logo from "./Logo";

const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarItemOpen, setSidebarItemOpen] = useState("");
  return (
    <>
      <div className={styles.header + " base_padding"}>
        <Logo/>
        <div
          className={`${styles.content_header} ${
            sidebarOpen ? "" : styles.none
          }`}
        >
          {HEADER_ITEMS.map((item, i) => (
            <HeaderItem
              title={item.title}
              inner={item.inner}
              key={i}
              open={sidebarItemOpen === item.title}
              setOpen={setSidebarItemOpen}
            />
          ))}
          <div
            onClick={() => {
              setSidebarOpen(false);
            }}
          >
            <Image
              alt="close icon"
              src={closeIcon}
              width={200}
              height={200}
              className={styles.burger}
            />
          </div>
        </div>
        <div onClick={() => setSidebarOpen(true)}>
          <Image
            className={styles.burger}
            alt="menu"
            src={burgerIcon}
            width={20}
            height={20}
          />
        </div>
      </div>
      {children}
    </>
  );
};

export default MainWrapper;
