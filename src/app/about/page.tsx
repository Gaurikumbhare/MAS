import { Metadata } from 'next';
import AboutHero from '../../components/about/AboutHero';

export const metadata: Metadata = {
  title: "About Us | Best Preschool in Nagpur | Miles Along Smiles",
  description: "Discover the philosophy, journey, and dedicated team behind Miles Along Smiles in Nagpur. We are committed to fostering creativity, confidence, and compassion in every child."
};
import AboutValues from '../../components/about/AboutValues';

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: '#f6f5ef' }}>
      <AboutHero />
      <AboutValues />
    </main>
  );
}
