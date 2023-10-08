import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-flip';
import AdoptedPet from "./AdoptedPet";



export default function AdoptedPets() {
  const [adoptedPetss, setAdoptedPetss] = useState([]);

  // fetch adopted pets data
  useEffect(() => {
    fetch("../../public/adoptedPets.json")
      .then((data) => data.json())
      .then((res) => setAdoptedPetss(res))
      .catch((error) => console.log(error.message));
  }, []);
 console.log(adoptedPetss)
  return (
    <div >
      <div className="text-center">
        <h1 className="text-5xl p-2">Adopt or Foster One</h1>
        <h1 className="text-5xl p-2">and Help Save Them All</h1>
        <p className="text-gray-700 p-2">A totally new experience for you and your little friend.</p>
        <p className="text-gray-700 p-2">friend.</p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 m-12">
             {
                adoptedPetss.map((pet,id)=><AdoptedPet 
                 key ={id}
                 pet = {pet}
                />)
             }
      </div>
    </div>
  );
}
