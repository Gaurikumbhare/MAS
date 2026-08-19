import Hero from '@/components/Hero';
import Introduction from '@/components/Introduction';

import OurWork from '@/components/OurWork';
import Facilities from '@/components/Facilities';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import VoiceOfParents from '@/components/VoiceOfParents';
import Gallery from '@/components/Gallery';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <Introduction />

      <OurWork />
      <Facilities />
      <Testimonials />
      <Gallery />
      <VoiceOfParents />
      <CTA />
    </main>
  );
}
