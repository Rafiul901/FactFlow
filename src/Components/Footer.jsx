import React from 'react';
import { Link } from 'react-router';
import logo from '../assets/logo.png';
import fb from '../assets/fb.jpg';
import x from '../assets/x.png';
import yt from '../assets/download.png';

const Footer = () => {
    return (
       <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10 mt-10">
            <aside>
                <Link to="/">
                    <img className='w-16 h-16 rounded-xl' src={logo} alt="FactFlow Logo" />
                </Link>
                <p>
                    <Link to="/" className='font-bold text-xl text-blue-400 hover:text-blue-300 transition-colors'>FactFlow</Link>
                    <br />
                    Contribute your expertise
                </p>
            </aside>

            <nav>
                <h6 className="footer-title">Legal</h6>
                <Link to="/about-us" className="link link-hover hover:text-blue-300 transition-colors">About Us</Link>
                <Link to="/contact" className="link link-hover hover:text-blue-300 transition-colors">Contact Us</Link>
                <Link to="/terms" className="link link-hover hover:text-blue-300 transition-colors">Terms & Conditions</Link>
            </nav>

            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/rmamit.tajib" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img className="w-8 rounded-full border-white border-2" src={fb} alt="Facebook" />
                    </a>
                    <a href="https://x.com/Curious093270" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img className="w-8 rounded-full border-white border-2" src={x} alt="X (Twitter)" />
                    </a>
                    <a href="https://www.youtube.com/@eccentric10" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                        <img className="w-8 rounded-full border-white border-2" src={yt} alt="YouTube" />
                    </a>
                </div>
            </nav>

            {/* Copyright notice */}
            <div className="w-full text-center mt-8 text-sm text-gray-400">
                © {new Date().getFullYear()} FactFlow. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;