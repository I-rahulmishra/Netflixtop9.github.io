import React from "react";
import Card from "./Cards"; 
import Sdata from "./Sdata";
import "./index.css";
import Netflix from "./Netflix";
import Amazon from "./Amazon";
import Footer from "./Footer";

// const favSeries = "amazon";

// const FavS = () => {
//   if (favSeries === "netflix"){
//     return <Netflix />;
//   } else {
//     return <Amazon />
//   }
// };


const App = () => (
<>
  <h1 className="headingsty">List of top 9 Netflix Series in 2021</h1>
  {/* <FavS /> */}
  {Sdata.map((val, index)=> {
    console.log(index);
  return(
    <Card
    key={val.id} 
    imgsrc={val.imgscr}
    title={val.title}
    sname={val.sname}
    link={val.link}
    />
  )} 
  )}
  {/* {favSeries === "heading_style" ? <Netflix /> : <Amazon />} */}
  <Footer/>
</>
);
export default App;