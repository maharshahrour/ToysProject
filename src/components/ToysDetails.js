import React from 'react';
import {connect} from 'react-redux';

const ToysDetails =({toy}) =>{
  if(!toy) {
  return(
  <div>
  <h3>
  Details for:
  </h3><
  /div>
);
}
return (
  <div>
      <h3>Details for:</h3>
      <p>
      Price :{toy.price}<br/>
      Age:{toy.ageform}
      </p>
  </div>
);
};

const mapStateToProps =(state) =>{
  return {toy :state.ToysSelected}
}
export default connect(mapStateToProps)(ToysDetails);
