import React, { useEffect, useState, useCallback, useRef } from 'react';
import '../App.css';

function Footer() {
    return (
        <div>
            <footer>
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

export default Footer;