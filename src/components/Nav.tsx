import React from 'react';
import { navs, scis } from '@/data/data'; // Import both navs and scis
import './nav.css';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav id="navbar" className="navbar">
      <ul>
        {/* Render navigation links */}
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link href={nav.link}>
              {nav.name === 'Home' ? (
                <i className="bi bi-house-door-fill"></i>
              ) : (
                nav.name
              )}
            </Link>
          </li>
        ))}

        {/* Render social media icons */}
        
      </ul>
    </nav>
  );
}