import { Suspense } from 'react';
import ContactForm from '../../components/contact/ContactForm';

export default function ContactPage() {
  return (
    <main>
      <Suspense fallback={<div>Loading form...</div>}>
        <ContactForm />
      </Suspense>
    </main>
  );
}
