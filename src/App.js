import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import OfferDetail from "./pages/OfferDetail";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import PublishOffer from "./pages/PublishOffer";
import ApplyJob from "./pages/ApplyJob";
import JobOffers from "./pages/JobOffers";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/offer/:id" Component={OfferDetail} />
      <Route path="/register" Component={Register} />
      <Route path="/login" Component={Login} />
      <Route path="/addOffer" Component={PublishOffer} />
      <Route path="/apply" Component={ApplyJob} />
      <Route path="/all_offers" Component={JobOffers} />
    </Routes>
  );
}

export default App;
