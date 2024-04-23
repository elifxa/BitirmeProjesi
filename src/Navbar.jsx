import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

import Hero from './Hero';
import Dropbox from './Dropbox';
import SolarPanelinfo from './SolarPanelinfo';
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
      label: 'About Us',
      icon: 'pi pi-user',
      url: '/about-us',
    },
    {
      label: 'Solar Panels',
      icon: 'pi pi-server',
      url: '/solar-panels',
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope',
      url: '/contact',
    },
  ];

  const menuStyle = {
    background: '#222',
    color: '#fff',
    border: '0',
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: '1000',
          top: '0',
          left: '0',
        }}
      >
        <Menubar
          model={items}
          style={menuStyle}
          end={<div style={{ marginLeft: 'auto' }}></div>}
        />
      </div>

      <Routes>
        <Route path="/" index element={<Hero />} />
        <Route path="/use-project" element={<Dropbox />} />
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/solar-panels" element={<SolarPanelinfo />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
