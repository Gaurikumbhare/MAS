import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Our Philosophy | Play-Based Learning | Miles Along Smiles",
  description: "Learn about our child-centered approach to education. We believe in play-based learning, interactive environments, and nurturing the unique potential of every child."
};

export default function PhilosophyPage() {
  return (
    <main>
      <section className="section" style={{ backgroundColor: '#eaddff', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container text-center">
          <h1 className="font-handwriting" style={{ fontSize: '4rem', color: 'var(--primary-dark)' }}>Our Philosophy</h1>
          <p style={{ maxWidth: '600px', margin: '2rem auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            Our teaching philosophy revolves around the belief that every child is unique. We provide a safe space where they can learn at their own pace through play and exploration.
          </p>
        </div>
      </section>
    </main>
  );
}
