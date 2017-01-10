import React from 'react';

class PlantInstance extends React.Component {
  render() {
    const {plant} = this.props;
    return (
      <div>
        <p> <strong>Name:</strong> {plant.name_common} </p>
        <p> Water every <strong>{plant.water_interval}</strong> days </p>
        <br/>
      </div>
    )
  }
}

export default PlantInstance;
