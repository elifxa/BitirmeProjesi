import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

import Hero from './Hero';
import Dropbox from './Dropbox';
import InfoPage from './infoPage';
import AboutPage from './aboutPage';
import ContactPage from './contactPage';

export default function Navbar() {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/',
    },
    {
      label: 'Use Project',
      icon: 'pi pi-star',
      url: '/use-project',
    },
    {
      label: 'Solar Panels',
      icon: 'pi pi-server',
      url: '/solar-panels',
    },
    {
      label: 'About Us',
      icon: 'pi pi-user',
      url: '/about-us',
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      url: '/contact',
    },
  ];

  const logoElement = (
    <img
      src="https://st3.depositphotos.com/30226412/32944/v/450/depositphotos_329445992-stock-illustration-initial-letter-sp-or-ps.jpg"
      alt="Logo"
      style={{
        height: '60px',
        marginRight: '30px',
        mixBlendMode: 'color-burn',
      }}
    />
  );

  return (
    <>
      <div style={{ color: 'black ' }}>
        <Menubar
          model={items}
          start={logoElement}
          end={<div style={{ marginLeft: 'auto' }}></div>}
        />
      </div>{' '}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/use-project" element={<Dropbox />} />
        <Route path="/solar-panels" element={<InfoPage />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
