import React  from 'react';
import PlantInstance from './PlantInstance.jsx';

class PlantsWrapper extends React.Component {
  render() {
    return (
      <div>
        <h1> PlantsWrapper visible </h1>
        <PlantInstance {...this.props} />
      </div>
    );
  }
}

export default PlantsWrapper;
