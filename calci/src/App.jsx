import "./App.css";
import Cal from "./cal";
function App() {
  return (
    <>
      <p
        style={{
          fontFamily: "sans-serif",
          fontSize: 50,
          color: "white",
          textAlign: "center",
          fontWeight: 600,
        }}
      >
        Calculator
      </p>
      <br />

      <Cal></Cal>
    </>
  );
}

export default App;
