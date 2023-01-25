import { useRouter } from "next/router";
import { getAllEvents } from "../../helpers/api-util";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

const AllEventsPage = (props) => {
    const router = useRouter();
    const { events } = props;

    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath);
    };

    return (
        <>
            <EventsSearch onSearch={findEventsHandler} />
            <h1> All Events</h1>
            <EventList items={events} />
        </>
    );
};

export async function getStaticProps() {
    const events = await getAllEvents();

    return {
        props: {
            events: events,
        },
        revalidate: 60,
    };
}

export default AllEventsPage;
