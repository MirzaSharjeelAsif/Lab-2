import "./App.css";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <hr></hr>

      <div className="container">
        <Card
          image="src/assets/1.jpg"
          name="Indonesia"
          resort="Gilli Air Hotel"
          ratting="4.8 ★"
          price="$589/night"
        />
        <Card
          image="src/assets/2.jpg"
          name="Seychelles"
          resort="Hilton Resort"
          ratting="4.2 ★"
          price="$629/night"
        />
        <Card
          image="src/assets/3.jpg"
          name="US Virgin Islands"
          resort="Goa Resort"
          ratting="3.5 ★"
          price="$485/night"
        />
        <Card
          image="src/assets/4.jpg"
          name="Bahamas"
          resort="Kuredu Resort"
          ratting="4.1 ★"
          price="$729/night"
        />
        <Card
          image="src/assets/5.jpg"
          name="Mauritius"
          resort="Trou D'eau Douce"
          ratting="4.9 ★"
          price="$877/night"
        />
        <Card
          image="src/assets/6.jpg"
          name="Bermuda"
          resort="Staniel Cay Hotel"
          ratting="3.2 ★"
          price="$365/night"
        />
      </div>
    </>
  );
}
export default App;
