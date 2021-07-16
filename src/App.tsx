import React, { useState, useEffect, SetStateAction } from "react";
import { Header, CardsContainer, CardItem } from "./Components";
import axios from "axios";
import "./App.css";
interface IData {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  title: string;
  family: string;
  image: string;
  imageUrl: string;
}
function App() {
  const [data, setData] = useState<IData[]>([]);
  useEffect(() => {
    const getDataFromAPI = async () => {
      axios
        .get<IData[]>("https://thronesapi.com/api/v2/Characters")
        .then((res) => {
          setData(res.data);
        })
        .catch((error) => {
          alert("error");
        });
    };
    getDataFromAPI();
  }, []);

  return (
    <div className="app">
      <Header />
      <CardsContainer>
        {data.map((item) => (
          <CardItem
            key={item.id}
            fullName={item.fullName}
            title={item.title}
            family={item.family}
            imageURL={item.imageUrl}
          />
        ))}
      </CardsContainer>
    </div>
  );
}

export default App;
