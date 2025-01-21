'use client'
import React from 'react'
import Searchbar from '@/components/ui/Searchbar/Searchbar';
import EventList from '@/components/Events/EventList';
const Home = () => {
  return (

    <div>
      <Searchbar />
      <div className='container mx-auto'>
        <EventList />
      </div>
    </div>

  );

};

export default Home;