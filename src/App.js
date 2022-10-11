import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <body>
        <Header />
        <Content />
        <Footer />
      </body>
    </BrowserRouter>
  );
}

export default App;
