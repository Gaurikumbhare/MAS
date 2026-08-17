import ProgramsList from '../../components/programs/ProgramsList';

export default function ProgramsPage() {
  return (
    <main style={{ backgroundColor: '#f6f5ef' }}>
      <section className="section" style={{ position: 'relative', minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
        <img src="/sticker-books.png" alt="Books Doodle" className="sticker sticker-delay-1" style={{ top: '20%', right: '15%', width: '140px' }} />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
          <h1 className="font-handwriting" style={{ fontSize: '4rem', color: 'var(--primary-dark)' }}>Our Programs</h1>
          <p style={{ maxWidth: '600px', margin: '2rem auto', fontSize: '1.2rem', color: 'var(--text-muted)' }}>
            Explore our tailored programs designed for different age groups, focusing on developmental milestones and interactive learning.
          </p>
        </div>
      </section>
      <ProgramsList />
    </main>
  );
}
