import Head from 'next/head';
import EventList from '../components/events/Events-list';
import { getFeaturedEvents } from '../helpers/api-util';

export default function Home(props) {
  // const feauturedEvents = getFeaturedEvents();
  return (
    <>
      <Head>
        <title>NEXT JS</title>
        <meta name='description' content='Find events' />
      </Head>
      <EventList items={props.items} />
    </>
  );
}

export async function getStaticProps() {
  const feauturedEvents = await getFeaturedEvents();
  return {
    props: {
      items: feauturedEvents,
    },
    revalidate: 1800,
  };
}
