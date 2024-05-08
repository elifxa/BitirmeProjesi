import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
import 'primeicons/primeicons.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import HomePage from './Hero';
import UseProject from './useProject';
import AboutUs from './aboutUs';
import SolarPanelinfo from './SolarPanelinfo';
import ContactPage from './contactPage';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const halfPageHeight = window.innerHeight / 10;
      setIsScrolled(scrollPosition > halfPageHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
        className={isScrolled ? 'navbar-scrolled' : ''}
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: '1000',
          top: '0',
          left: '0',
          backgroundColor: isScrolled ? '#333' : 'rgba(0, 0, 0, 0.2)',
          transition: 'background-color 0.3s ease-in-out',
          padding: isScrolled ? '2px 0' : '10px 2px',
        }}
      >
        <Menubar
          className="grid lg:justify-items-center"
          model={items}
          style={{
            backgroundColor: 'transparent',
          }}
        />
      </div>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/use-project" element={<UseProject />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solar-panels" element={<SolarPanelinfo />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <style>
        {`
          .p-menuitem-text, .p-menuitem-icon {
            color: #fff !important;
            font-size: 16px;
          }
         
        `}
      </style>
    </>
  );
}
