import { Link } from "react-router-dom"
import style from "./EventPages.module.css"
// const events = [
//     { id: 1, title: 'Event-1' },
//     { id: 2, title: 'Event-2' },
//     { id: 3, title: 'Event-3' },
//     { id: 4, title: 'Event-4' },
//     { id: 5, title: 'Event-5' },
// ]
const EventList = (props) => {

    return (<div className={style.AllEvents}>
        <h1>Event Page</h1>
        <ul className={style.events}>
            {props.events.map((event) => <Link to={`${event.id}`}>
                <li
                    key={event.id}
                    className={style.eventList}
                    id={`list${event.id}`}
                >
                    {event.title}
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                </li></Link>)}
        </ul>
        <Link to="new" className={style.addNewEvent}>Add new event</Link>
    </div>);
};

export default EventList;