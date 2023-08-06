import { useRouteLoaderData, Await} from "react-router-dom";

import style from "./EditEventPage.module.css";
import EventForm from "../components/EventForm";
import { Suspense } from "react";
const EditEventPage = () => {
    const {event} = useRouteLoaderData('event-detail');
    return <Suspense>
        <div className={style.EditEventElement}>
            <h1>Edit Event Page</h1>
        </div>
        <Await resolve={event}>
                {(event)=><EventForm event={event}  method='patch'/>}
            </Await>
        
    </Suspense>;


}

export default EditEventPage;

