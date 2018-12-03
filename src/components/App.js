import './ToysList.css';
import React from 'react';
import ToysList from './ToysList';
import ToysDetails from './ToysDetails';

const App =() =>{
  return (
    <div className="ui container grid">
         <div className="ui row">
           <div className="column eight wide">
             <ToysList />
           </div>
           <div className="col eight wide detail" >
             <ToysDetails />
           </div>
         </div>
       </div>
);
};

export default App;
