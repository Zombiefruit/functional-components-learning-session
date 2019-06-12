import * as React from "react";

export class MyClassComponent extends React.Component {
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
      }&appid=6088f2500a16b34a3f7c37f217c9cab4`
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const tempInCelsius = Math.round(data.main.temp - 273.15);
        this.setState({ temperature: tempInCelsius });
      });
  };

  private onChange = event => {
    this.setState({ city: event.target.value });
    this.getWeather();
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
            <span> {this.state.temperature}˚ Celsius</span>.
          </section>
        </div>
      </>
    );
  }
}
