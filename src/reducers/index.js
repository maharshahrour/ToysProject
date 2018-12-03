import {combineReducers} from 'redux';
const ToysReducers = () =>{
  return [
    {imageUrl:'https://i5.walmartimages.com/asr/68a9c860-961b-4c0f-828c-b9e1df1b0817_1.8dafdb24c24dd007266f4f2abd91c320.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff',price:'40$',ageform:'6-12 Months',id:'1'},
    {imageUrl:'https://images-na.ssl-images-amazon.com/images/I/61kpFSn5sTL._SX425_.jpg',price:'20$',ageform:'12-24 Months',id:'2'},
    {imageUrl:'https://www.sgs.com/-/media/global/images/structural-website-images/newsletter-images/safeguards-images/safeguards-toys-344x229-en-17-v1.jpg?la=en',price:'70$',ageform:'12-36 Months',id:'3'},
    {imageUrl:'https://media2.s-nbcnews.com/j/newscms/2018_41/1374755/41zfcw1aqjl_b0c36de416c2e5dd5a6fd1b6688a2dc1.fit-260w.jpg',price:'20$',ageform:'12-24 Months',id:'4'}
  ];
};

const ToysSelected =(selectedToys = null ,action) =>{
  if(action.type === 'SELECT_TOYS'){
    return action.payload;
  }
  return selectedToys;
};

export default combineReducers({
  toys:ToysReducers,
  ToysSelected:ToysSelected
});
