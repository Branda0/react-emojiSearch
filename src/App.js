import "./App.css";
import data from "./data/emojiList_mar8cs.json";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="app-container">
      <Search setSearch={setSearch} />
      <div>
        {data
          .filter((element) => element.keywords.includes(search))
          .map((element2, index) => {
            return index < 20 && <Line key={index} symbol={element2.symbol} title={element2.title} />;
          })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
