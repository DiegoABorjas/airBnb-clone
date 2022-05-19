import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import cardsData from "./data"


function App() {
  
  const cards = cardsData.map(card => {
    return (
      <Card 
      key={card.id}
      {...card}
      />
    )
  })

  return (
    <>
    <Navbar />
    <Hero />
    <section className='cards-list'>
    {cards}
    </section>
    </>
  );
}

export default App;
