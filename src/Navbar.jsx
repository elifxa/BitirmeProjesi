import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';

import Hero from './Hero';
import Dropbox from './Dropbox';
import SolarPanelinfo from './SolarPanelinfo';
import AboutUs from './aboutUs';
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

  return (
    <>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: '1000',
          top: '0',
          left: '0',
          backgroundColor: '#111 ',
        }}
      >
        <Menubar
          className="grid lg:justify-items-center"
          model={items}
          style={{
            backgroundColor: '#111',
            color: '#fff',
            width: '100%',
          }}
        />
      </div>
      <Routes>
        <Route path="/" index element={<Hero />} />
        <Route path="/use-project" element={<Dropbox />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solar-panels" element={<SolarPanelinfo />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
