import { BrowserRouter, Routes, Route } from "react-router-dom";
import '../Styles/App.css';
import Banner from './Banner';
import FirstContainer from './FirstContainer';
import Footer from './Footer';
import MenuContainer from './MenuContainer';
import Menu from './Menu/Menu';
import More from './Detail/More';
import Command from "./CommandPage/Command";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Menu />}>
            </Route>
            <Route path="/menu" element={<Menu />}>
            </Route>
            <Route path="/detail" element={<More />}>
            </Route>
            <Route path="/detail/commande" element={<Command/>}>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
