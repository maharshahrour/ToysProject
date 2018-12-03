import './ToysList.css';
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {selectToys} from '../actions';

class ToysList extends Component {
  renderList ()
   {
     return this.props.toys.map((toy)=>{
       return (

          <div className="item" key={toy.id}>

          <img src={toy.imageUrl} className="toy_pic" />
          <div className="right floated content">
           <button
           className="ui button primary"
           onClick={()=> this.props.selectToys(toy) }>
           View Details
           </button>
          </div>
          </div>
        );
     });
   }
  render(){
    return(
      <div>
      <h1 className="title">Welcome to wonderful toys store</h1>
      {this.renderList()}
      </div>
    );
  }
};

const mapStateToProps = (state)=>{
console.log(state);
  return { toys :state.toys };
}
export default connect(mapStateToProps,{ selectToys }) (ToysList);
