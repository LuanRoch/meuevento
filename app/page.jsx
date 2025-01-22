'use client'
import React, { useContext } from 'react'
import Searchbar from '@/components/ui/Searchbar/Searchbar';
import EventList from '@/components/Events/EventList';
import { EventContext } from '@/contexts/EventContext';


const Home = () => {
  const { showEventList, handleClearSearch } = useContext(EventContext)
  console.log(showEventList)
  return (

    <div>
      <div>
        <Searchbar />
        <button onClick={() => handleClearSearch()}>Limpar busca</button>
      </div>
      {showEventList ? (

        <div className='container mx-auto'>
          <EventList />
        </div>
      ) : (
        <div>homepage</div>
      )}

    </div>

  );

};

export default Home;