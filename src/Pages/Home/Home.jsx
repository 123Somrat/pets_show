import {useLoaderData}from 'react-router-dom'
import Banner from '../../Components/Banner/Banner'
import Events from '../../Components/Events/Events'
import AdoptedPets from '../../Components/AdoptedPets/AdoptedPets';
import Footer from '../../Components/Footer/Footer';

export default function Home() {
  const events = useLoaderData();
 // const adopted = useLoaderData();
 // console.log(adopted)

  return (
    <div className='max-w-6xl mx-auto rounded-full'>
        <Banner/>
        
        <div className='m-12'>
           <Events events={events}/>
        </div>
         <div className="max-w-6xl max-auto p-4">
           <AdoptedPets />
         </div>
         <div className='max-w-6xl mx-auto'>
            <Footer/>
         </div>
    </div>
  )
}
