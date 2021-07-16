import React, { useState, useEffect } from "react";
import { Header, CardsContainer, CardItem } from "./Components";
import Spinner from "./Assets/Images/Rolling.gif";
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
  const [loaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    const getDataFromAPI = async () => {
      axios
        .get<IData[]>("https://thronesapi.com/api/v2/Characters")
        .then((res) => {
          setData(res.data);
          setIsLoaded(true);
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

      {loaded ? (
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
      ) : (
        <div className="loadingSpinner">
          <img src={Spinner} alt="Loading..." />
        </div>
      )}
    </div>
  );
}

export default App;
