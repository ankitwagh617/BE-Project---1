import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Csv from './components/Csv';
import Form from './components/Form';
import Body from './components/Body';
import UpdateNavbar from './components/UpdateNavbar';
import Sample from './components/Sample';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Navbar/><Body /></>}></Route>
        <Route path="/fill-a-form" element={<><UpdateNavbar/><Form /></>}></Route>
        <Route path="/upload-csv-file" element={<><UpdateNavbar/><Csv/></>}></Route>
      </Routes>
    </BrowserRouter>
    <div className="container my-5">
      <Sample/>
    </div>
    </>
  );
}

export default App;
