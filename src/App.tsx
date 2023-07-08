import Hero from './components/Hero';
import Nav from './components/Nav';

function App() {
  return (
    <div className='app'>
      <div className='front'>
        <Nav />
        <Hero />
      </div>
      <main className='relative z-10'></main>
    </div>
  );
}

export default App;
