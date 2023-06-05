import { FormEvent, useEffect, useState } from "react";
import Card from "../components/Card";
import MainWrapper from "../components/MainContainer";
import { CARDS, DESCRIPTION, TITLE } from "../utils/constants";

const Index = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(CARDS);

  let timeout: NodeJS.Timeout;
  function inputHandler(e: FormEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setFilter(
        CARDS.filter(
          (c) =>
            c.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            c.text.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }, 300);
  }
  return (
    <MainWrapper>
      <div style={{ flexDirection: "column" }}>
        <div className={"base_padding content"}>
          <h1>{TITLE}</h1>
          <span>{DESCRIPTION}</span>
        </div>
        <input
          type="text"
          placeholder="search"
          value={search}
          className="search"
          onInput={(e) => {
            inputHandler(e);
          }}
        />
        <div className="items-wrapper">
          {filter.map((card, i) => (
            <Card
              key={i}
              title={card.title}
              text={card.text}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </MainWrapper>
  );
};

export default Index;
