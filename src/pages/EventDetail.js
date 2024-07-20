import { useParams } from "react-router-dom";

function EventsDetailPage() {
    const params = useParams()
  return (
    <>
      <h1>Events Detail Page</h1>
      <p>Event Id: {params.eventId}</p>
    </>
  );
}

export default EventsDetailPage;
