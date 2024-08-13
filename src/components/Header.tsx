import React from 'react';
import Link from "next/link";

type HeaderProps = {
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="w-full p-4  bg-neutral-800 text-white ">
            <div className='max-w-6xl mx-auto flex flex-row justify-between items-center'>
                <Link href="/" className="text-sm text-white hover:text-neutral-300 transition-all h-fit p-2 rounded-lg">
                    <img src="./img/logo.png" width={150} alt="logo" />
                </Link>
                <div className="flex flex-row gap-1 sm:gap-2 align-middle items-center justify-center h-fit dm-sans">
                    <Link href="/" className="hidden sm:block text-sm text-white hover:text-neutral-300 transition-all h-fit p-1 sm:p-2 rounded-lg">Estado</Link>
                    <Link href="/historial" className="text-sm text-white hover:text-neutral-300 transition-all h-fit p-1 sm:p-2 rounded-lg">Historial</Link>
                    <Link href="https://guou.cl/" target="_blank" className="text-sm text-white hover:text-neutral-300 transition-all h-fit p-1 sm:p-2 rounded-lg">Guou.cl</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
