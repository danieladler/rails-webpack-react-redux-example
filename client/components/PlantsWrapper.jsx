import React  from 'react';
import PlantInstance from './PlantInstance.jsx';

class PlantsWrapper extends React.Component {
  render() {
    const plants = this.props.plants.all.map((plant, index) => {
      return (
        <li key={index}>
          <PlantInstance plant={plant}/>
        </li>
      )
    });

    return (
      <div>
        <h1> Here are all the plants: </h1>
        <ul>
          {plants}
        </ul>
      </div>
    );
  }
}

export default PlantsWrapper;
