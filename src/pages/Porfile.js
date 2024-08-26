/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'; 
import './Porfile.css'; 

const Porfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (window.tippy) {
      window.tippy('.link', {
        placement: 'bottom',
      });
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    const body = document.querySelector('body');
    const profile = document.getElementById('profile');
    const toggleButton = document.querySelector('.js-change-theme');

    if (isDarkMode) {
      toggleButton.innerHTML = '☀️';
      body.classList.remove('text-gray-900');
      body.classList.add('text-gray-100');
      profile.classList.remove('bg-white');
      profile.classList.add('bg-gray-900');
    } else {
      toggleButton.innerHTML = '🌙';
      body.classList.remove('text-gray-100');
      body.classList.add('text-gray-900');
      profile.classList.remove('bg-gray-900');
      profile.classList.add('bg-white');
    }
  }, [isDarkMode]);

  return (
    <div className={`font-sans antialiased leading-normal tracking-wider bg-cover background ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
        <div id="profile" className={`w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl ${isDarkMode ? 'bg-gray-700-700' : 'bg-white'} opacity-75 mx-6 lg:mx-0`}>
          <div className="p-5 md:p-10 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center mobile-background"></div>
            <h1 className="text-3xl font-bold pt-8 lg:pt-0">Cristian Oscco Cañari</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500 opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"/></svg> FullStack developer
            </p>
            <p className={`pt-2 text-xs lg:text-base flex items-center justify-center lg:justify-start ${isDarkMode ? 'text-white' : 'text-gray-600'}`}>
              <svg className="h-4 fill-current text-green-700 pr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"/>
              </svg> 
              Lima, Perú
            </p>
            <p className="pt-8 text-lg text-justify">FullStack developer | iOS developer | GDG Organizer | Leader community at DSC UTP | CEO at Edomo.</p>
            <div className="pt-8 pb-4">
              <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
                <a href="mailto:cristiandaos01@gmail.com">Get In Touch</a>
              </button>
            </div>
            <div className="mt-4 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-s justify-around">
              <a className="link" href="https://www.instagram.com/cristiandaos" data-tippy-content="@cristiandaos">
                <svg className={`h-7 fill-current ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-700`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
              </a>
              <a className="link" href="https://www.linkedin.com/in/cristiandaos" data-tippy-content="@cristiandaos">
                <svg className={`h-7 fill-current ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-700`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452H16.89v-5.396c0-1.287-.026-2.944-1.797-2.944-1.8 0-2.077 1.4-2.077 2.849v5.491H9.347V9h3.43v1.561h.049c.478-.9 1.645-1.85 3.385-1.85 3.619 0 4.287 2.382 4.287 5.476v6.264zM5.337 7.433c-1.106 0-2-.896-2-2 0-1.107.894-2 2-2 1.107 0 2 .893 2 2-.001 1.104-.894 2-2 2zm1.984 13.019H3.353V9h3.968v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.727v20.545C0 23.225.792 24 1.771 24h20.451C23.208 24 24 23.225 24 22.272V1.727C24 .774 23.208 0 22.225 0z" /></svg>
              </a>
              <a className="link" href="https://github.com/cristiandaos" data-tippy-content="@cristiandaos">
                <svg className={`h-7 fill-current ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} hover:text-green-700`} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.261.82-.58 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.334-1.757-1.334-1.757-1.09-.745.083-.729.083-.729 1.203.084 1.836 1.236 1.836 1.236 1.07 1.833 2.81 1.303 3.495.997.108-.775.42-1.303.763-1.603-2.665-.305-5.466-1.333-5.466-5.931 0-1.31.468-2.382 1.235-3.222-.124-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23a11.464 11.464 0 013.006-.404 11.47 11.47 0 013.007.404c2.29-1.553 3.296-1.23 3.296-1.23.653 1.653.242 2.876.118 3.18.77.84 1.233 1.912 1.233 3.222 0 4.61-2.804 5.623-5.475 5.92.43.37.814 1.102.814 2.222 0 1.606-.014 2.898-.014 3.292 0 .322.218.698.825.579C20.565 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-2/5">
          <img src="/image/cristiandaos.jpg" className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-full h-auto lg:h-[500px]" />
        </div>

        <div className="absolute top-0 right-0 h-12 w-18 p-4">
          <button className="js-change-theme" onClick={toggleTheme}>
            🌙
          </button>
        </div>
      </div>
    </div>
  )
}


export default Porfile;
