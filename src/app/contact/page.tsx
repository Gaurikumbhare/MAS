import { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '../../components/contact/ContactForm';

export const metadata: Metadata = {
  title: "Contact Us | Schedule a Visit | Miles Along Smiles",
  description: "Get in touch with Miles Along Smiles today! Schedule a school visit, ask a question, or enroll your child in our premium preschool and daycare programs."
};

export default function ContactPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading form...</div>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
