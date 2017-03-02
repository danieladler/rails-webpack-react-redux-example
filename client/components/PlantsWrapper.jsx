import React  from 'react';
import PlantInstance from './PlantInstance.jsx';

class PlantsWrapper extends React.Component {
  componentDidMount(){
    this.props.loadPlants();
  }

  render() {
    const plantCount = this.props.plants.all.length;
    var body;
    if (plantCount === 0) {
      body = <h2> Add a plant in the Rails Console! </h2>
    } else {
      body = this.props.plants.all.map((plant, index) => {
        return (
          <li key={index}>
            <PlantInstance plant={plant}/>
          </li>
        )
      });
    }

    return (
      <div>
        <h1> Here are all the plants: </h1>
        <ul>
          { body }
        </ul>
      </div>
    );
  }
}

export default PlantsWrapper;
