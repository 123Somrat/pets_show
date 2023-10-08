import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";

export default function ViewDetails() {
  const { id } = useParams();
  const details = useLoaderData();
  const navigate = useNavigate()
  const [eventDetailss,setEventDetails] = useState({})
 
   // finding our desired data from araay
   useEffect(()=>{
    const data = details.find(data=>data.id==id);
      setEventDetails(data)
   },[id])
   
  // destructure property from eventDetailss obj
  const {eventName,eventDetails,eventImage,eventPlace,eventPrice,eventRegEndDate,eventRegStartDate} = eventDetailss;
       
// show toast message after click book now button
 const Booked = ()=>{
    
   toast.success("Booked Successfully");
     // after succesfully booked event redirect user to home page
    // navigate("/") 
 }


  return (
    <div>
      <div className="hero min-h-[450px] bg-base-200">
        <div className="hero-content flex-col  lg:flex-row">
          <img
            src={eventImage}
            className="max-w-sm rounded-lg shadow-2xl m-4"
          />
          <div className="m-4">
            <h1 className="text-5xl font-bold">{eventName}</h1>
            <p className="py-2">{eventDetails}</p>
            <p className="py-2 inline-block text-md text-black">Place : </p><span className="text-gray-500"> {eventPlace}</span><br/>
            <p className="py-2 inline-block text-md text-black">Price : </p> <span className="text-gray-500">{eventPrice}$ per person</span><br/>
            <p className="py-2 inline-block text-md text-black"> Start Date : </p> <span className="text-gray-500">{eventRegStartDate}</span><br/>
            <p className="py-2 inline-block text-md text-black mb-2">End Date : </p> <span className="text-gray-500">{eventRegEndDate}</span><br/>
            <button className="btn btn-neutral" onClick={Booked}>Book Now</button>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}
