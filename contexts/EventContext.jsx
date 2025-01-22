'use client';


import React, { createContext, useEffect, useState, useMemo } from "react";

export const EventContext = createContext();

export const Eventprovider = ({ children }) => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showEventList, setShowEventList] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [appliedFilters, setAppliedFilters] = useState({
        searchTerm: '',
    });

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {

            const matcheSearch = appliedFilters.searchTerm ? event.title.toLowerCase().includes
                (appliedFilters.searchTerm.toLowerCase()) : true;

            return matcheSearch;
        });

    }, [events, appliedFilters]);


    useEffect(() => {
        const fetchEvents = async () => {
            setIsLoading(true);  // Corrigido
            try {
                const res = await fetch('http://localhost:4000/events');
                if (!res.ok) throw new Error('something went wrong');
                const data = await res.json();
                setEvents(data);

                setIsLoading(false);

            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);


    const handleSubmit = () => {
        setIsLoading(true);
        setShowEventList(true);
        setAppliedFilters({ searchTerm });
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);

    };

    const handleClearSearch = () => {
        setSearchTerm('');
        setShowEventList(false);
    }

    return (
        <EventContext.Provider value={{
            events,
            isLoading,
            error,
            searchTerm,
            setSearchTerm,
            filteredEvents,
            handleSubmit,
            handleClearSearch,
            showEventList,

        }}>
            {children}
        </EventContext.Provider>
    )
}
export default Eventprovider;