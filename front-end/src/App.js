import React from 'react';
import './App.css';
import Footer from './components/footer';
import ProviderGeneral from './provider/providerGeneral';
// import rockGlass from './images/rockGlass.svg';
import Router from './routes/routers';

function App() {
  return (
    <ProviderGeneral>
      <section className="page-container">
        <section className="content-wrap">
          <Router />
        </section>
        <Footer />
      </section>
    </ProviderGeneral>
  );
}

export default App;
