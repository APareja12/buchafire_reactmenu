import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const kombuchaData = [
  {
    name: 'Turmeric Ginger Kombucha',
    ingredients:
      'distilled water, organic evaporated cane sugar, kombucha culture, black and green tea blend, turmeric, ginger, black pepper',
    price: 6,
    photoName: 'kombuchas/bucha-1.jpg',
    soldOut: false,
  },
  {
    name: 'Red Zinger',
    ingredients:
      'distilled water, organic evaporated cane sugar, kombucha culture, black and green tea blend, beets, carrot, ginger, apple, lime',
    price: 10,
    photoName: 'kombuchas/bucha-2.jpg',
    soldOut: false,
  },
  {
    name: 'Blueberry Pomegranate',
    ingredients:
      'distilled water, organic evaporated cane sugar, kombucha culture, black and green tea blend, organic blueberry, organic pomegranate',
    price: 12,
    photoName: 'kombuchas/bucha-3.jpg',
    soldOut: false,
  },
  {
    name: 'Sangria',
    ingredients:
      'distilled water, organic evaporated cane sugar, kombucha culture, black and green tea blend, organic mixed berries, organic concord grape, organic orange, organic green apple, organic lime',
    price: 12,
    photoName: 'kombuchas/bucha-4.jpg',
    soldOut: false,
  },
  {
    name: 'RoseBiscus',
    ingredients:
      'distilled water, organic evaporated cane sugar, kombucha culture, black and green tea blend, organic peppermint, organic lavender flowers, organic rose petals, organic hibiscus flowers',
    price: 15,
    photoName: 'kombuchas/bucha-5.jpg',
    soldOut: true,
  },
  {
    name: 'Lemongrass Ginger',
    ingredients:
      'distilled water, organic evaporated cane sugar, kombucha culture, black and green tea blend, organic  lemongrass, organic ginger',
    price: 18,
    photoName: 'kombuchas/bucha-6.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Bucha Fire Co.</h1>
    </header>
  );
}

function Menu() {
  const kombuchas = kombuchaData;
  // const kombuchas = [];
  const numKombuchas = kombuchas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numKombuchas > 0 ? (
        <>
          <p>
            Kombucha is a fascinating drink with a long history. Like quinoa,
            it’s been around for thousands of years and has been making its way
            back to foodies and health-food lovers. Known by the ancients as an
            “elixir of immortality” it has been revered over time for its life
            enhancing qualities.
          </p>

          <ul className="kombuchas">
            {kombuchas.map((kombucha) => (
              <Kombucha kombuchaObj={kombucha} key={kombucha.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )}

      {/* <Kombucha
          name="Lemongrass Zinger"
          ingredients="distilled water, organic evaporated cane sugar, kombucha culture, black and green tea blend, organic peppermint, organic lavender flowers, organic rose petals, organic hibiscus flowers"
          photoName="kombuchas/bucha-1.jpg"
          price={10}
        />
        <Kombucha
          name="RoseBiscus"
          ingredients="distilled water, organic evaporated cane sugar, kombucha culture, black and green tea blend, organic peppermint, organic lavender flowers, organic rose petals, organic hibiscus flowers"
          price={12}
          photoName="kombuchas/bucha-3.jpg"
        /> */}
    </main>
  );
}

function Kombucha({ kombuchaObj }) {
  console.log(kombuchaObj);

  // if (kombuchaObj.soldOut) return null;

  return (
    <li className={`kombucha ${kombuchaObj.soldOut ? 'sold-out' : ''}`}>
      <img src={kombuchaObj.photoName} alt={kombuchaObj.name} />
      <div>
        <h3>{kombuchaObj.name}</h3>
        <p>{kombuchaObj.ingredients}</p>

        {/* {kombuchaObj.soldOut ? (
            <span>SOLD OUT</span>
          ) : (
            <span>{kombuchaObj.price}</span>
          )} */}

        <span>{kombuchaObj.soldOut ? 'SOLD OUT' : kombuchaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
