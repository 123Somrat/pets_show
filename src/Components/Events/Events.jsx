import UpComeingEvent from '../Event/UpComeingEvent'

export default function Events({events}) {
  return (
    <div>
        <h1 className='text-5xl text-center'>Our UpComeing Events</h1>
         <div>
             {
                 events.map(petsEvent=><UpComeingEvent
                    key = {petsEvent.id}
                    PetsEvent={petsEvent}
                 />
                
                 )
             }  
         </div>
    </div>
  )
}
