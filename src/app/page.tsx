// THIS IS THE HOME PAGE. DO NOT ATTEMPT TO MOVE IT TO ANOTHER DIRECTORY OR REMOVE IT,
//  OR ELSE THE SITE IS GONNA BREAK 

import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import Slideshow from './home/components/Slideshow'
import PurposeSection from './home/components/Purpose';
import WhyJoinSection from './home/components/WhyJoin';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "BIT Club @ VT",
  // For some reason in the main page, you have to list out the full title. I don't know why, but it works this way so that's what matters.
}

export default function MainPage() {
  return (
    <main>
      <Navbar />
      <Slideshow />
      <PurposeSection 
      header='Purpose'
      body="We are a student-led organization that blends professional development with a vibrant social community. Our mission is to connect BIT majors and like-minded students 
      while fostering academic growth and preparing members for success in the business & technology fields."
      imageSrc="/main_logos_and_assets/assets/purpose_photo_resized.webp"
      />
      <WhyJoinSection 
      header='Why Join?'
      body="As part of our mission to advance understanding of the BIT field, we host career information sessions, skill-building workshops, and engaging social events each semester.

      The BIT Club is a leading student organization at Virginia Tech for anyone passionate about technology, business, and innovation. Whether you’re a BIT major or simply curious about the field, 
      you’ll gain valuable experience and direct access to recruiters from companies like CGI, Deloitte, and Amazon."
      imageSrc="/main_logos_and_assets/assets/whyjoin_photo_resized.webp"
      />
      <Footer />
    </main>
    )
}
