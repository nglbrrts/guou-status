import React from 'react';
import Link from "next/link";

type HeaderProps = {
};

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <div className="w-full p-4 bg-neutral-800 text-white flex flex-row justify-between border border-b border-neutral-500 ">
            <div>
                <img src="./img/logo.png" width={150} />
            </div>
            <div className="flex flex-row gap-2 align-middle h-fit dm-sans">
                <Link href="/historial" className="text-sm text-white hover:text-neutral-300 transition-all h-fit p-2 rounded-lg">Guou.cl</Link>
                <Link href="/historial" className="text-sm text-white hover:text-neutral-300 transition-all h-fit p-2 rounded-lg">Historial</Link>
            </div>
        </div>
    );
};

export default Header;
