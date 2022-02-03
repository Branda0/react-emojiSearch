import "./App.css";
import data from "./data/emojiList_mar8cs.json";
import Search from "./components/Search";
import Line from "./components/Line";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  console.log({ search });
  return (
    <div className="app-container">
      <Search setSearch={setSearch} />
      <div>
        {data
          .filter((element) => element.keywords.includes(search))
          .map((element2, index) => {
            console.log(element2.title);
            return <Line key={index} symbol={element2.symbol} title={element2.title} />;
          })}
      </div>

      {/* <Footer /> */}
      {/* Hello from <a href="https://www.lereacteur.io">Le Reacteur !</a> */}
    </div>
  );
}

export default App;
