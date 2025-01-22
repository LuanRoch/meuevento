import { EventContext } from '@/contexts/EventContext';
import React, { useContext } from 'react';
import Event from './Event';
import SkeletonGrid from '../SkeletonGrid';


const EventList = () => {
  const { filteredEvents, isLoading, error } = useContext(EventContext);

  if (error) return <p>Error: {error}</p>;

  if (filteredEvents.length === 0 && !isLoading) {
    return (
      <div className='h-[80vh]'>
        <p className='text-white/80 text-center'>Nenhum evento encontrado.</p>
      </div>
    );
  }

  if (isLoading) {
    return <SkeletonGrid itemCount={12} />;

  }

  return (
    <div>
      <h4 className='h4 mb-6'>{filteredEvents.length} Resultados encontrados</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-[30px] mb-16 sm:mb-20 md:mb-24 lg:mb-28 xl:mb-32'>

        {filteredEvents.map((event, index) => (
          <div key={index}>
            <Event event={event} />
            {Event.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
