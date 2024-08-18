import React from 'react';


const Footer: React.FC = () => {
  return (
    <div className='flex items-center justify-between w-full px-16 py-8 mx-auto mt-6 text-sm text-gray-500 border-t border-gray-300 '>
     <span>Policies: Return Policy | Terms of Use | Security | Privacy | Infringement</span>
      <span>© 2007-2024 Shipart</span>
      <span>Need Help ? Visit the help center.</span>
    </div>
  );
};

export default Footer;