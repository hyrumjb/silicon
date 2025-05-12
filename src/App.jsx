import React, { useEffect, useState, useCallback, useRef } from 'react';
import './App.css';

import backgroundImg from './images/background.jpg';
import ryanImg from './images/ryan.jpg';
import aaronImg from './images/aaron.jpg';
import joshImg from './images/josh.jpg';
import ericImg from './images/eric.jpg';

function App() {
  // Theme state
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") !== "light";
  });

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  }

  // User name state
  const [userName, setUserName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });
  const [inputName, setInputName] = useState("");

  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      localStorage.setItem("userName", inputName.trim());
      setUserName(inputName.trim());
      setInputName("");
    } else {
      alert("Try inputting name again ...");
    }
  };

  // Navigation bar
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(prev => !prev);
  };

  //Settings box
  const [showSettings, setShowSettings] = useState(true);

  //Images toggle button
  const imageRefs = useRef([]);
  const [showImages, setShowImages] = useState(true);

  const toggleImages = () => {
    imageRefs.current.forEach(img => {
      if (img) img.classList.toggle("hidden");
    });
    setShowImages(prev => !prev);
  };

  // Month selector
  const [userMonth, setUserMonth] = useState(() => {
    return localStorage.getItem("userMonth") || "";
  })
  const [inputMonth, setInputMonth] = useState("");

  const handleMonthChange = (e) => {
    setInputMonth(e.target.value);
  };

  const handleMonthSubmit = (e) => {
    e.preventDefault();
    if (inputMonth) {
      localStorage.setItem("userMonth", inputMonth);
      setUserMonth(inputMonth);
      setInputMonth("");
    } else {
      alert("Try inputting month again ...");
    }
  };

  // Key-based color switcher
  const switchColors = useCallback((color) => {
    document.body.classList.toggle(color)
  }, []);

  const handleKey = useCallback((e) => {
    if (e.key === "v") {
      switchColors("violet");
    }
    if (e.key === "b") {
      switchColors("blue");
    }
  }, [switchColors]);

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <div className="app-container">
      <header>
        <div id="header-left">
          <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px">
              <path d="m40-240 240-320 195 260h325L560-619 435-453l-38-50 163-217 360 480H40Zm510-60Zm-390 0h240L280-460 160-300Zm0 0h240-240Z" />
          </svg>
          <a href="https://siliconslopes.com/">
            <h1>Silicon Slopes</h1>
          </a>
        </div>

        <div id="header-right">
          <div 
            id="switcher" 
            onClick={toggleTheme}
            role="button"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && toggleTheme()}
          >
            <svg  id="sun" className={isDark ? "hidden" : ""} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px">
              <path d="M480-346.67q55.33 0 94.33-39t39-94.33q0-55.33-39-94.33t-94.33-39q-55.33 0-94.33 39t-39 94.33q0 55.33 39 94.33t94.33 39Zm0 66.67q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-446.67H40v-66.66h160v66.66Zm720 0H760v-66.66h160v66.66ZM446.67-760v-160h66.66v160h-66.66Zm0 720v-160h66.66v160h-66.66ZM260-655.33l-100.33-97 47.66-49 96 100-43.33 46Zm493.33 496-97.66-100.34 45-45.66 99.66 97.66-47 48.34Zm-98.66-541.34 97.66-99.66 49 47L702-656l-47.33-44.67ZM159.33-207.33 259-305l46.33 45.67-97.66 99.66-48.34-47.66ZM480-480Z"/>
            </svg>
            <svg id="moon" className={isDark ? "" : "hidden"} xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px">
              <path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q10 0 20.5.67 10.5.66 24.17 2-37.67 31-59.17 77.83T444-660q0 90 63 153t153 63q53 0 99.67-20.5 46.66-20.5 77.66-56.17 1.34 12.34 2 21.84.67 9.5.67 18.83 0 150-105 255T480-120Zm0-66.67q102 0 179.33-61.16Q736.67-309 760.67-395.67q-23.34 9-49.11 13.67-25.78 4.67-51.56 4.67-117.46 0-200.06-82.61-82.61-82.6-82.61-200.06 0-22.67 4.34-47.67 4.33-25 14.66-55-91.33 28.67-150.5 107-59.16 78.34-59.16 175.67 0 122 85.66 207.67Q358-186.67 480-186.67Zm-6-288Z"/>
            </svg>
          </div>
          <svg
            id="open-nav"
            onClick={toggleNav}
            role="button"
            aria-label="Open navigation menu"
            tabIndex="0"
            onKeyDown={(e) => e.key === 'Enter' && toggleNav()}
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
          >
            <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>
          </svg>
        </div>

        {navOpen && (
          <div className="side-nav" role="navigation">
            <div className="side-nav-content">
              <span
                id="close-nav"
                onClick={toggleNav}
                role="button"
                aria-label="Close navigation menu"
                tabIndex="0"
                onKeyDown={(e) => e.key === 'Enter' && toggleNav()}
              >
                &times;
              </span>
              <nav>
                <ul>
                  <li><a href="#section-1">Ryan Smith</a></li>
                  <li><a href="#section-2">Aaron Skonnard</a></li>
                  <li><a href="#section-3">Josh James</a></li>
                  <li><a href="#section-4">Eric Rea</a></li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main>
        {userName && (
          <div className="welcome-banner">
            <p>Welcome, {userName}! Glad to have you back exploring Silicon Slopes. ({userMonth})</p>
          </div>
        )}

        <img 
          ref={(el) => { if (el) imageRefs.current[0] = el }}
          src={backgroundImg}
          alt="Salt Lake City skyline"
          id="main-image"
        />
        
        {showSettings && (
          <div id="settings">
            <span 
              id="close-instructions"
              onClick={() => setShowSettings(false)}
              role="button"
              aria-label="Close settings panel"
              tabIndex="0"
              onKeyDown={(e) => e.key === 'Enter' && setShowSettings(false)}
            >
              &times;
            </span>
            <h3>Some additional website controls:</h3>
            <form
              id="name-form"
              onSubmit={handleNameSubmit}
            >
              <label htmlFor="name">Welcome: </label>
              <input 
                type="text"
                id="name"
                placeholder="Enter your name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
              <input type="submit" id="submit" value="Submit" />
            </form>

            <form 
              id="date-form"
              onSubmit={handleMonthSubmit}
            >
              <label htmlFor="month-select">Select month: </label>
              <select
                id="month-select"
                value={inputMonth}
                onChange={(e) => setInputMonth(e.target.value)}
              >
                <option value="">--Select Month--</option>
                {[
                  'January', 'February', 'March', 'April',
                  'May', 'June', 'July', 'August',
                  'September', 'October', 'November', 'December'
                ].map(month => (
                  <option key={month} value={month}>{month}</option>
                ))}
              </select>
              <input type="submit" id="submit" value="Submit" />
            </form>

            <button
              id="remove-images"
              onClick={toggleImages}
              aria-pressed={!showImages}
            >
              {showImages ? "Hide Images" : "Show Images"}
            </button>
            <p>Press V to turn the background violet or B to turn it blue.</p>
          </div>
        )}

        <p className="intro-content">Silicon Slopes refers to the burgeoning tech hub in Utah, particularly along the Wasatch Front, encompassing cities like Lehi, Provo, Salt Lake City, and Park City. The term draws a parallel to Silicon Valley and references the state’s mountainous landscape. Over the last two decades, this region has seen explosive growth in technology, venture capital, and innovation. Thanks to a business-friendly environment, a highly educated workforce (fed by universities like BYU and the University of Utah), and lower costs of living and operation, Utah has become a magnet for both startups and established tech firms. The nonprofit Silicon Slopes organization also plays a key role, fostering community, events, and support for local tech entrepreneurs.</p>
        <p className="intro-content">Utah is home to several important tech companies. Qualtrics, known for its customer experience and survey software, was founded in Provo and sold to SAP for $8 billion before spinning out as a public company. Pluralsight, based in Draper, provides tech learning and workforce development tools. Domo, founded by Josh James (also a key figure from Omniture), offers cloud-based business intelligence tools. Other key players include Lucid Software (known for Lucidchart), Podium, Divvy (acquired by Bill.com), and Entrata. Important figures in the scene include Ryan Smith (founder of Qualtrics and owner of the Utah Jazz), Josh James, and Aaron Skonnard (CEO of Pluralsight). Their leadership and vision have helped elevate Utah into a national tech powerhouse.</p>

        <div id="section-1">
          <h2>Ryan Smith</h2>
          <div className="content">
            {showImages && (
              <img
                ref={(el) => { if (el) imageRefs.current[1] = el }}
                src={ryanImg} 
                alt="biographical image" 
              />
            )}
            <div className="text-content">
              <h3>Company:</h3><p>Qualtrics (Co-founder & Executive Chairman)</p>
              <h3>Company Valuation:</h3><p>$12.5 billion (2023 acquired by Silver Lake)</p>
              <h3>College:</h3><p>Brigham Young University (BS in Business Management)</p>
              <h3>Estimated Net Worth:</h3><p>$2.2 billion (January 2025)</p>
              <h3>Career Bio:</h3><p>Ryan Smith co-founded Qualtrics in 2002 with his father and brother, aiming to simplify sophisticated research. Under his leadership, Qualtrics grew into a leading experience management company. Beyond Qualtrics, Smith is the owner of the Utah Jazz (NBA) and the Utah Mammoth (NHL).</p>
            </div>
          </div>
        </div>

        <div id="section-2">
          <h2>Aaron Skonnard</h2>
          <div className="content flipper">
            <div className="text-content">
              <h3>Company:</h3><p>Pluralsight (Co-founder & Former CEO)</p>
              <h3>Company Valuation:</h3><p>$3.5 billion (2020 acquired by Vista Equity)</p>
              <h3>College:</h3><p>Brigham Young University (BS in Computer Science)</p>
              <h3>Estimated Net Worth:</h3><p>Unknown (roughly $455 million)</p>
              <h3>Career Bio:</h3><p>Aaron Skonnard co-founded Pluralsight in 2004, initially offering classroom training before transitioning to an online platform for tech professionals. Under his guidance, Pluralsight became a prominent online learning company, serving a vast enterprise clientele.</p>
            </div>
            {showImages && (
              <img
                ref={(el) => { if (el) imageRefs.current[2] = el }}
                src={aaronImg} 
                alt="biographical image" 
              />
            )}
          </div>
        </div>

        <div id="section-3">
          <h2>Josh James</h2>
          <div className="content">
            {showImages && (
              <img
                ref={(el) => { if (el) imageRefs.current[3] = el }}
                src={joshImg} 
                alt="biographical image" 
              />
            )}
            <div className="text-content">
              <h3>Company:</h3><p>Domo (Founder & Former CEO); previously co-founded Omniture</p>
              <h3>Company Valuation:</h3><p>Domo: $308 million, Omniture: $1.8 billion (2009 acquired by Adobe)</p>
              <h3>College:</h3><p>Brigham Young University (did not graduate)</p>
              <h3>Estimated Net Worth:</h3><p>Unknown (roughly $169 million)</p>
              <h3>Career Bio:</h3><p>Josh James co-founded Omniture, a web analytics company, which he led to a successful IPO and subsequent acquisition by Adobe. He later founded Domo in 2010, focusing on business intelligence solutions. James is also known for his contributions to Utah's tech community through initiatives like Silicon Slopes.</p>
            </div>
          </div>
        </div>

        <div id="section-4">
          <h2>Eric Rea</h2>
          <div className="content flipper">
            <div className="text-content">
              <h3>Company:</h3><p>Podium (Co-founder & CEO)</p>
              <h3>Company Valuation:</h3><p>$3 billion</p>
              <h3>College:</h3><p>Brigham Young University (BS in Information Systems)</p>
              <h3>Estimated Net Worth:</h3><p>Unknown (roughly $450 million)</p>
              <h3>Career Bio:</h3><p>Eric Rea co-founded Podium in 2014, transforming it from a small startup into a leading customer interaction platform for local businesses. Under his leadership, Podium expanded its offerings to include messaging and payment solutions, serving a broad client base.</p>
            </div>
            {showImages && (
              <img
                ref={(el) => { if (el) imageRefs.current[4] = el }}
                src={ericImg} 
                alt="biographical image" 
              />
            )}
          </div>
        </div>
      </main>

      <footer id="footer-light">
        <h4>Learn More</h4>
          <ul>
            <li><a href="https://www.siliconslopes.com/">Silicon Slopes</a></li>
            <li><a href="https://x.com/siliconslopes?lang=en">Social Media</a></li>
            <li><a href="https://marker.medium.com/how-mormons-built-the-next-silicon-valley-while-no-one-was-looking-c50add577478">Marker Article</a></li>
            <li><a href="https://siteselection.com/issue/site-selection-march-2018/">Site Selection</a></li>
          </ul>
        <p>Copyright &copy; {new Date().getFullYear()} Hyrum Bradshaw. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
