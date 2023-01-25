import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

const HomePage = (props) => {
    return (
        <div>
            <h1>The Home Page - Featured Events</h1>
            <EventList items={props.events} />
        </div>
    );
};

export async function getStaticProps(context) {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvents,
        },
        revalidate: 1200,
    };
}

export default HomePage;
