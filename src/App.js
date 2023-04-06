import "./App.css";
import Login from "./Pages/login.js";
import SignUp from "./Pages/signup.js";
import Home from "./Pages/home.js";
import Movies from "./Pages/movies.js";
import Series from "./Pages/series.js";
import Bookmarked from "./Pages/bookmarked.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Backbone">
      <Routes>
        <Route path="/Entertainment-web-app/" element={<Login />} />
        <Route path="/Entertainment-web-app/SignUp" element={<SignUp />} />
        <Route path="/Entertainment-web-app/Home" element={<Home />} />
        <Route path="/Entertainment-web-app/Movies" element={<Movies />} />
        <Route path="/Entertainment-web-app/Series" element={<Series />} />
        <Route
          path="/Entertainment-web-app/Bookmarked"
          element={<Bookmarked />}
        />
      </Routes>
    </div>
  );
}

export default App;
