import { useEffect, useState, useCallback } from 'react';
import '../App.css';

import backgroundImg from '../assets/background.jpg';
import ryanImg from '../assets/ryan.jpg';
import aaronImg from '../assets/aaron.jpg';
import joshImg from '../assets/josh.jpg';
import ericImg from '../assets/eric.jpg';

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June', 
  'July', 'August', 'September', 'October', 'November', 'December'
];

function Home() {
  // User name state
  const [userName, setUserName] = useState(localStorage.getItem("userName") || "");
  const [inputName, setInputName] = useState("");

  // Month selector
  const [userMonth, setUserMonth] = useState(localStorage.getItem("userMonth") || "")
  const [inputMonth, setInputMonth] = useState("");

  // Settings box
  const [showSettings, setShowSettings] = useState(true);

  // Images visibility
  const [showImages, setShowImages] = useState(true);

  // Handle user name submission
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      setUserName(inputName.trim());
      localStorage.setItem("userName", inputName.trim());
      setInputName("");
    } else {
      alert("Try inputting name again ...");
    }
  };

  const handleMonthSubmit = (e) => {
    e.preventDefault();
    if (inputMonth) {
      setUserMonth(inputMonth);
      localStorage.setItem("userMonth", inputMonth);
      setInputMonth("");
    } else {
      alert("Try inputting month again ...");
    }
  };
  
  const toggleImages = () => setShowImages((prev) => !prev);

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
      <main>
        {userName && (
          <div className="welcome-banner">
            <p>Welcome, {userName}! Glad to have you back exploring Silicon Slopes. ({userMonth})</p>
          </div>
        )}

        {showImages && <img src={backgroundImg} alt="Salt Lake City skyline" id="main-image" />}
        
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
                {MONTHS.map(month => (
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
            {showImages && <img src={ryanImg} alt="biographical image" />}
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
            {showImages && <img src={aaronImg} alt="biographical image" />}
          </div>
        </div>

        <div id="section-3">
          <h2>Josh James</h2>
          <div className="content">
            {showImages && <img src={joshImg} alt="biographical image" />}
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
            {showImages && <img src={ericImg} alt="biographical image" />}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;