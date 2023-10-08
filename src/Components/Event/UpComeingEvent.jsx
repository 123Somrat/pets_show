import {Link} from "react-router-dom"

export default function UpComeingEvent({ PetsEvent}) {
  console.log( PetsEvent);
  const {id,eventName,eventImage,eventDetails}= PetsEvent
  return (
    <div>
      <div className="max-w-md h-96 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
        <img
          src={eventImage}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-48 dark:bg-gray-500"
        />
        <div className="flex flex-col justify-between p-4 space-y-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-semibold tracki">{eventName}</h2>
            <p className="dark:text-gray-100">
              {eventDetails}
            </p>
          </div>
          <Link to={`/viewDetails/:${id}`}><button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-gray-500 dark:text-gray-900"
          >
            View details
          </button></Link>
        </div>
      </div>
    </div>
  );
}
