import Navbar from '@/app/components/Navbar'
import Calendar from './components/Calendar';
import Footer from '../components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Events",
}

export default function EventsPage() {
  return (
    <main>
      <Navbar />
      <Calendar />
      <Footer />
    </main>
    )
}
