import { useState, useEffect } from 'react';
import '../App.css';

import backgroundImg from '../assets/background.jpg';
import joshImg from '../assets/josh.jpg';
import ericImg from '../assets/eric.jpg';

function Independent() {
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

                <div id="section-3">
                    <h2>Josh James</h2>
                    <div className="content">
                        <img
                            src={joshImg} 
                            alt="biographical image" 
                        />
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
                        <img
                            src={ericImg} 
                            alt="biographical image" 
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Independent;