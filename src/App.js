import "./App.css";
import Routers from "./routes/Routers";
import "swiper/css";
import Navbar from "./components/navbar/Navbar";
import "@fontsource/roboto"; // Defaults to weight 400
import "@fontsource/roboto/400.css"; // Specify weight
import "@fontsource/roboto/400-italic.css"; // Specify weight and style

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;
