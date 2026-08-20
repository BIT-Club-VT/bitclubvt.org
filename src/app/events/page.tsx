import Navbar from '@/app/components/Navbar'
import Footer from '../components/Footer';
import type { Metadata } from 'next';
import EventsByDate from './components/EventsByDate';
import { buildClient } from '@/sanity/lib/buildClient';
import { ALL_EVENTS_QUERY } from '@/sanity/lib/queries';
import { getEasternTodayDate } from './lib/formatEventSchedule';

export const metadata: Metadata = {
  title: "Events",
}

export default async function EventsPage() {
  const events = await buildClient.fetch(ALL_EVENTS_QUERY);

  return (
    <main>
      <Navbar />
      <EventsByDate events={events} initialTodayDate={getEasternTodayDate()} />
      <Footer />
    </main>
  )
}
