import { FormEvent, useState, useEffect } from "react";
import Card from "../components/Card";
import MainWrapper from "../components/MainContainer";
import { CARDS, DESCRIPTION, TITLE } from "../utils/constants";
import { getCards } from "../api/cards";

const Index = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(CARDS);
  let timeout: NodeJS.Timeout;
  function inputHandler(e: FormEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    // clearTimeout(timeout);
    // timeout = setTimeout(() => {

    // }, 300);
  }
  useEffect(()=>{
    getCards(search).then(({data})=> {setFilter(data.data); console.log(data)});
  },[search])
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
