import 'primereact/resources/themes/arya-blue/theme.css';
import 'primeicons/primeicons.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Menubar } from 'primereact/menubar';
import HomePage from './Hero';
import UseProject from './useProject';
import AboutUs from './aboutUs';
import SolarPanelinfo from './SolarPanelinfo';
import ContactPageHero from './contactPageHero';

import logo from './assets/logo.png';

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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: '10px', // Ensure the logo stays on the left
          }}
        >
          <img src={logo} alt="Logo" style={{ height: '60px' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column', // Stack the text vertically
              alignItems: 'center', // Center the text horizontally
            }}
          >
            <h1 style={{ color: '#f1c40f', fontSize: '14px', margin: '0' }}>
              SOLAR
            </h1>
            <h1
              style={{
                color: '#f1c40f',
                fontSize: '14px',
                margin: '0',
              }}
            >
              TECH.
            </h1>
          </div>
        </div>

        <Menubar
          className="grid lg:justify-items-center"
          model={items}
          style={{
            backgroundColor: 'transparent',
            flex: '1',
            justifyContent: 'flex-end', // Align menu items to the right
          }}
        />
      </div>
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="/use-project" element={<UseProject />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solar-panels" element={<SolarPanelinfo />} />
        <Route path="/contact" element={<ContactPageHero />} />
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
