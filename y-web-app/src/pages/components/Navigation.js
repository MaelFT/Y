import React from 'react';
import Logo from '../../assets/img/icon.png';
import Home from '../../assets/img/nav/home.svg';
import Trends from '../../assets/img/nav/trends.svg';
import Notifications from '../../assets/img/nav/notifications.svg';
import Messages from '../../assets/img/nav/messages.svg';
import Account from '../../assets/img/nav/account.svg';

const Navigation = () => {

  return (
      <nav className='bg-white flex'>
        <img src={Logo} alt='YMedia' className='w-20 h-20' />
        <div className='flex justify-between items-center'>
            <div className='flex space-x-4'>
                <a href='/' className='text-black'><img src={Home} alt='home icon' height={32} width={32}></img></a>
                <a href='/trends' className='text-black'><img src={Trends} alt='trends icon' height={32} width={32}></img></a>
                <a href='/notifications' className='text-black'><img src={Notifications} alt='notifications icon' height={32} width={32}></img></a>
                <a href='/messages' className='text-black'><img src={Messages} alt='messages icon' height={32} width={32}></img></a>
                <a href='/account' className='text-black'><img src={Account} alt='account icon' height={32} width={32}></img></a>
            </div>
        </div>
        <div className='flex items-center'>
            <input type='text' placeholder='Search' className='border border-gray-300 px-2 py-1 rounded' />
        </div>
      </nav>
    );
};

export default Navigation;