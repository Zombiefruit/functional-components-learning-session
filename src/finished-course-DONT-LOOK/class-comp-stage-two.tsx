import * as React from "react";

export interface IMyClassComponentProps {
  fahrenheit: boolean;
}

export class MyClassComponent extends React.Component<
  IMyClassComponentProps,
  {}
  > {
  state = {
    city: "Toronto",
    temperature: 0
  };

  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
      this.state.city
      }&appid=your_api_key`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        let temp;
        if (this.props.fahrenheit) {
          temp = Math.round(((data.main.temp - 273.15) * 9) / 5 + 32);
        } else {
          temp = Math.round(data.main.temp - 273.15);
        }

        this.setState({ temperature: temp });
      });
  };

  private onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ city: event.target.value }, () => {
      this.getWeather();
    });
  };

  render() {
    return (
      <>
        <select value={this.state.city} onChange={this.onChange}>
          <option value="Toronto">Toronto</option>
          <option value="Jerusalem">Jerusalem</option>
          <option value="Colombo">Colombo</option>
        </select>
        <div>
          <section>
            The current temperature in {this.state.city} is:
            <span>
              {" "}
              {this.state.temperature}˚{" "}
              {this.props.fahrenheit ? "Fahrenheit" : "Celsius"}
            </span>
            .
          </section>
        </div>
      </>
    );
  }
}
