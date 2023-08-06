import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';
function EventItem(props) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      submit(null, { method: 'delete' });
    }
  }
  // console.log(props.event.title);
  return (
    <article className={classes.eventElement}>
      <img src={`${props.event.image}`} alt={`${props.event.title}`} />
      <h1>{props.event.title}</h1>
      <time>{props.event.date}</time>
      <p>{props.event.description}</p>
      <menu className={classes.actions}>
          <Link to="edit">Edit</Link>
          <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;

