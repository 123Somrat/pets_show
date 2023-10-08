import React from "react";
import "../../App.css"
export default function AdoptedPet({ pet }) {
  console.log(pet);
  const { age, img, name } = pet;
  return (
    <div className="main">
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={img} alt="Avatar" style={{width:"300px",height:"300px"}}/>
    </div>
    <div className="flip-card-back flex flex-col justify-center items-center">
      <h1>Name : {name}</h1> 
      <p>Age: {age}</p> 
    </div>
  </div>
</div>
      
    </div>
  );
}
