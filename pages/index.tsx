import { FormEvent, useState, useEffect } from "react";
import Card from "../components/Card";
import MainWrapper from "../components/MainContainer";
import { CARDS, DESCRIPTION, TITLE } from "../utils/constants";
import { getCards } from "../api/cards";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { AppState } from "../store/store";

const Index = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(CARDS);

  const loggedIn = useSelector((state: AppState) => state.auth.authState);
  useEffect(() => {
    if (!loggedIn) {
      Router.push("/login");
    }
  }, [loggedIn]);
  function inputHandler(e: FormEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }
  useEffect(() => {
    getCards(search).then((data) => {
      setFilter(data.data.data || []);
    });
  }, [search]);
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
          {filter?.map((card, i) => (
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
