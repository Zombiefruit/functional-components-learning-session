import * as React from "react";

export interface IMyClassComponentProps {
  fahrenheit: boolean;
}

export const MyFunctionalComponent = (props: IMyClassComponentProps) => {
  const [temp, setTemp] = React.useState();
  const [city, setCity] = React.useState("Toronto");

  // TODO: Add another prop and see that the lint fails
  React.useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6088f2500a16b34a3f7c37f217c9cab4`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        let temp;
        if (props.fahrenheit) {
          temp = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);
        } else {
          temp = Math.round(data.main.temp - 273.15);
        }

        setTemp(temp);
      });
  }, [props.fahrenheit, city]);

  const onChange = event => {
    setCity(event.target.value);
  };

  return (
    <>
      <select value={city} onChange={onChange}>
        <option value="Toronto">Toronto</option>
        <option value="Jerusalem">Jerusalem</option>
        <option value="Colombo">Colombo</option>
      </select>
      <div>
        <section>
          The current temperature in {city} is:
          <span>
            {" "}
            {temp}˚ {props.fahrenheit ? "Fahrenheit" : "Celsius"}
          </span>
          .
        </section>
      </div>
    </>
  );
};
