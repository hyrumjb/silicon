import { useEffect, useState } from 'react';
import '../App.css';

import backgroundImg from '../assets/background.jpg';
import ryanImg from '../assets/ryan.jpg';
import aaronImg from '../assets/aaron.jpg';

function Acquired() {
    // User name state and month state
    const [userName, setUserName] = useState('');
    const [userMonth, setUserMonth] = useState('');
    
    useEffect(() => {
        setUserName(localStorage.getItem("userName") || "");
        setUserMonth(localStorage.getItem("userMonth") || "");
    })
    
    return (
        <div className="app-container">
            <main>
                {userName && (
                    <div className="welcome-banner">
                        <p>Welcome, {userName}! Glad to have you back exploring Silicon Slopes. ({userMonth})</p>
                    </div>
                )}

                <img 
                    src={backgroundImg}
                    alt="Salt Lake City skyline"
                    id="main-image"
                />

                <p className="intro-content">Silicon Slopes refers to the burgeoning tech hub in Utah, particularly along the Wasatch Front, encompassing cities like Lehi, Provo, Salt Lake City, and Park City. The term draws a parallel to Silicon Valley and references the state’s mountainous landscape. Over the last two decades, this region has seen explosive growth in technology, venture capital, and innovation. Thanks to a business-friendly environment, a highly educated workforce (fed by universities like BYU and the University of Utah), and lower costs of living and operation, Utah has become a magnet for both startups and established tech firms. The nonprofit Silicon Slopes organization also plays a key role, fostering community, events, and support for local tech entrepreneurs.</p>
                <p className="intro-content">Utah is home to several important tech companies. Qualtrics, known for its customer experience and survey software, was founded in Provo and sold to SAP for $8 billion before spinning out as a public company. Pluralsight, based in Draper, provides tech learning and workforce development tools. Domo, founded by Josh James (also a key figure from Omniture), offers cloud-based business intelligence tools. Other key players include Lucid Software (known for Lucidchart), Podium, Divvy (acquired by Bill.com), and Entrata. Important figures in the scene include Ryan Smith (founder of Qualtrics and owner of the Utah Jazz), Josh James, and Aaron Skonnard (CEO of Pluralsight). Their leadership and vision have helped elevate Utah into a national tech powerhouse.</p>

                <div id="section-1">
                    <h2>Ryan Smith</h2>
                    <div className="content">
                        <img
                            src={ryanImg} 
                            alt="biographical image" 
                        />
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
                        <img
                            src={aaronImg} 
                            alt="biographical image" 
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Acquired;