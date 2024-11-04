import React from 'react';

function NavigationBar() {
  const navItems = ['Intro', 'About Me', 'Projects', 'Socials'];

  return (
    <nav className="flex flex-wrap w-full text-4xl text-black max-md:max-w-full">
      {navItems.map((item) => (
        <div
          key={item}
          className="px-16 py-1.5 whitespace-nowrap bg-yellow-300 max-md:px-5"
        >
          {item}
        </div>
      ))}
    </nav>
  );
};

export default NavigationBar;