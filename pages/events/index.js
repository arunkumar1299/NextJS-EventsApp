import { getAllEvents } from "../../dummy-data";
import EventList from'../../components/events/event-list';
import EventsSearch from "../../components/events/event-search";
import { useRouter } from "next/router";


function AllEventsPage(){
    const event = getAllEvents();
   const router =  useRouter();
    function findEventsHandler(year,month){
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return(
        <>
        <EventsSearch onSearch={findEventsHandler}/>
        <EventList  items = {event}/>
        </>
    )
}
export default AllEventsPage