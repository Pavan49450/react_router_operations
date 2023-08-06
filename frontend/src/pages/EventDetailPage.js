import {json, useRouteLoaderData, redirect, defer, Await } from "react-router-dom";
// import style from "./EventDetailsPage.module.css";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import { Suspense } from "react";
const EventDetailPage = () => {
    // const params = useParams();
    const { event, events } = useRouteLoaderData('event-detail');
    // const navigate = useNavigate();
    return <>
        <Suspense  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={event}>
                {(loadedEvent) => <EventItem event={loadedEvent} />}
            </Await>
        </Suspense>
        <Suspense  fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}

            </Await>
        </Suspense>
    </>
}
export default EventDetailPage;

async function loadEvent(id) {
    // const id = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + id);
    if (!response.ok) {
        throw json({ message: 'Internal Server Error.' }, { status: 500 })
    } else {
        const resData = await response.json();
        return resData.event;
    }
}
async function loadEvents() {
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        // 
    } else {
        const resData = await response.json();
        return resData.events;
    }

}

export async function loaderFunction({ params }) {
    const id = params.eventId;
    return defer({
        event: loadEvent(id),
        events: loadEvents()
    })
}
export const actionFunction = async ({ request, params }) => {
    const id = params.eventId;
    console.log("actionFunction->", id);
    const response = await fetch("http://localhost:8080/events/" + id, { method: 'DELETE' });

    if (!response.ok) {
        throw json({ message: 'Could not delete event', status: 500 })
    } else {
        return redirect('/events');
    }

}