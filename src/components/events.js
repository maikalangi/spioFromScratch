import '../styles/events.css';
import EventCalendar from './EventCalendar';
import EventDay from './EventDay';

function Events() {
  return (
    <div className='eventsDiv'>
      <h3>EVENTS</h3>
      <EventCalendar />
      <EventDay />
    </div>
  )
}

export default Events