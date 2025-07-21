import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{  
      margin: '0 auto', 
      padding: '1rem' 
    }}>
      <Header />
      <About />
      <div style={{ marginTop: '-3rem' }}>
    <Projects />
  </div>
      <Footer />
    </div>
  );
}

export default App;
