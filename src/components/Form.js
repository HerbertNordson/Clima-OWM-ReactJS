import { useEffect, useState } from "react";
import { Container } from "./style";

const Form = (props) => {
  const [city, setCity] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    props.data(result);
  }, [result, props]);

  const onHandlerSubmit = (ev) => {
    ev.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0db79103c7da30a2c20be3a512a2551`
    )
      .then((response) => response.json())
      .then((response) => setResult(response));
  };

  return (
    <Container>
      <form onSubmit={onHandlerSubmit}>
        <input
          type="text"
          placeholder="City"
          value={city}
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <button type="submit">Enter</button>
      </form>
    </Container>
  );
};

export default Form;
