import { useState } from "react";
import Form from "../components/Form";
import { Main, Card, MinMax } from "./style";

const Home = () => {
  const [data, setData] = useState([]);

  const onDataSubmit = (props) => {
    setData(props);
  };

  console.log();
  return (
    <>
      <Form data={onDataSubmit} />
      {data.length === 0 ? (
        <></>
      ) : (
        <Main>
          <Card>
            <div>
              <h1>{data.name}</h1>
              <h2>
                {Math.floor(data.main.temp - 273.15)}
                <span>ºC</span>
              </h2>
              <p>{data.weather[0].main}</p>
              <MinMax>
                <div>
                  <p>Min</p>
                  <span>{Math.floor(data.main.temp_min - 273.15) + "ºC"}</span>
                </div>
                <div>
                  <p>Max</p>
                  <span>{Math.floor(data.main.temp_max - 273.15) + "ºC"}</span>
                </div>
              </MinMax>
            </div>
          </Card>
        </Main>
      )}
    </>
  );
};

export default Home;
