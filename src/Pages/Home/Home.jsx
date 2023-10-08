import {useLoaderData}from 'react-router-dom'
import Banner from '../../Components/Banner/Banner'
import Events from '../../Components/Events/Events'

export default function Home() {
  const events = useLoaderData();

  return (
    <div className='max-w-6xl mx-auto rounded-full'>
        <Banner/>
        <div className='m-12'>
           <Events events={events}/>
        </div>
    </div>
  )
}
