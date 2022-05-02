import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      
      <Navbar />
      <Hero />
      <Content />

      <Footer />
    
    </div>
  );
}


export default App;
