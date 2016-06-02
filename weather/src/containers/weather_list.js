import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const press = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const {lon, lat} = cityData.city.coord;
    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon}/></td>
        <td>
          <Chart color="red" data={temps} units="K"/>
        </td>
        <td>
          <Chart color="blue" data={press} units="hPa"/>
        </td>
        <td>
          <Chart color="grey" data={humid} units="%"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temp</th>
          <th>Press</th>
          <th>Humid</th>
        </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
