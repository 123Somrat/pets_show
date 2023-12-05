import UpComeingEvent from '../Event/UpComeingEvent'

export default function Events({events}) {
  return (
    <div>
        <h1 className='text-5xl text-center m-12'>Our UpComeing Events</h1>
         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
             {
                 events?.map(petsEvent=><UpComeingEvent
                    key = {petsEvent?.id}
                    PetsEvent={petsEvent}
                 />
                
                 )
             }  
         </div>
    </div>
  )
}
