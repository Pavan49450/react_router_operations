import { Suspense  } from 'react';
import { useLoaderData , defer, Await} from 'react-router-dom';
import EventsList from '../components/EventsList';
// import style from "./EventPage.module.css"
function EventsPage() {

    const {events} = useLoaderData();
    // const {events,isLoading,error} = data;

    // console.log(fetchedEvents[0].id);
    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadEvents)=><EventsList events={loadEvents} />}
            </Await>
        </Suspense>
    );
}

export default EventsPage;

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // 
    } else {
        const resData = await response.json();
        return resData.events;
    }

}

export function loaderFunction() {
    return defer({
        events: loadEvents()
    })
}