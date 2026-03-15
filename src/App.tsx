import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import PainPoints from './sections/PainPoints';
import Services from './sections/Services';
import Trust from './sections/Trust';
import UserRoles from './sections/UserRoles';
import DataInsights from './sections/DataInsights';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Navigation />
      
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="painpoints">
          <PainPoints />
        </section>
        
        <section id="services">
          <Services />
        </section>
        
        <section id="trust">
          <Trust />
        </section>
        
        <section id="roles">
          <UserRoles />
        </section>
        
        <section id="data">
          <DataInsights />
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
