'use client'
import React, { useContext } from 'react'
import Searchbar from '@/components/Searchbar/Searchbar';
import EventList from '@/components/Events/EventList';
import { EventContext } from '@/contexts/EventContext';


const Home = () => {
  const { showEventList, handleClearSearch } = useContext(EventContext)
  console.log(showEventList)
  return (

    <div>
      <div className=' flex flex-col justify-center items-center'>
        <Searchbar />
        <button className='text-accent' onClick={() => handleClearSearch()}>Limpar busca</button>
      </div>
      {showEventList ? (
        <div className='container mx-auto'>
          <EventList />
        </div>
      ) : (
        <div>
          <div className='container mx-auto'>
            <div>Proximos eventos </div>

            <div>download app section </div>

            <div>Recomendações para você</div>

          </div>


        </div>
      )}

    </div>

  );

};

export default Home;