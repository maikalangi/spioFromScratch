import '../styles/events.css';
import EventCalendar from './EventCalendar';
import EventDay from './EventDay';

function Events() {
  return (
    <div className='eventsDiv'>
      <h3>EVENTS</h3>
      <div id='calendar'>
      <EventCalendar />
      <EventDay />
      </div>
    </div>
  )
}

export default Events