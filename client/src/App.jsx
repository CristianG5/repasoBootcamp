import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from './views/home/home.component';
import Detail from './views/detail/detail.component'; // Corrige el nombre del archivo
import Create from './views/create/create.component';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/home/:id" element={<Detail />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

