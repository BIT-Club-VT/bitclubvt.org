import Navbar from '@/app/components/Navbar'
import Footer from '../components/Footer';
import type { Metadata } from 'next';
import QuestionsAndAnswers from './components/Q&A';

export const metadata: Metadata = {
  title: "Dues & Membership",
}

export default function DuesPage() {
  return (
    <main>
      <Navbar />
      <QuestionsAndAnswers
        title="Dues & Membership - Frequently Asked Questions"
        items={[
          { question: "How can I become a member?", answer: "Simple! All you have to do is pay dues at one of our club meetings, and you will become an official member!" },
          { question: "How much are dues?", answer: "Dues are $5 per year, and are used for various club-related expenses. You can attend 1 club meeting/event for free before you have to pay dues. If you do not pay after that time, you will not be allowed to attend the next event." },
          { question: "How can I pay dues?", answer: "You can pay for dues when checking in for a meeting! We accept either cash or Venmo." },
          { question: "What is the attendance policy?", answer: "Attendance is recorded for dues purposes and to help demonstrate member participation for third parties. The BIT Club does not have any attendance requirements to maintain membership. " },
        ]}
      />
      <Footer />
    </main>
    )
}
