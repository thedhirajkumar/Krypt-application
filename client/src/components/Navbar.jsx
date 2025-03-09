import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../assets/logo.png";

const NavBarItem = ({ title, path, classprops }) => (
    <li className={`mx-5 cursor-pointer ${classprops}`}>
        <a href={path} target="_blank" rel="noopener noreferrer">{title}</a> {/* External links open in new tab */}
    </li>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            {/* Desktop View */}
            <div className="md:flex-[0.5] mt-3 flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white mt-3 md:flex hidden list-none flex-row justify-between gap-10 items-center flex-initial">
                {/* Update paths with sample HTTP links */}
                {[
                    { title: "Etherscan", path: "https://etherscan.io/" },
                    { title: "Market", path: "https://www.coingecko.com/" },
                    { title: "Crypto News", path: "https://www.coindesk.com/" },
                ].map((item, index) => (
                    <NavBarItem key={item.title + index} title={item.title} path={item.path} />
                ))}
                {/* Button */}
                <li>
                    <button
                    onClick={() => window.open('https://metamask.io/', '_blank')}
                        className="cursor-pointer text-white font-bold relative text-[14px] w-[9em] h-[2.5em] text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700"
                    >
                        MetaMask
                    </button>
                </li>
            </ul>
            {/* Mobile View */}
            <div className="flex relative">
                {!toggleMenu && (
                    <HiMenuAlt4 fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(true)} />
                )}
                {toggleMenu && (
                    <AiOutlineClose fontSize={28} className="text-white md:hidden cursor-pointer" onClick={() => setToggleMenu(false)} />
                )}
                {toggleMenu && (
                    <ul
                        className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                        flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
                    >
                        <li className="text-xl w-full my-2">
                            <AiOutlineClose onClick={() => setToggleMenu(false)} />
                        </li>
                        {/* Mobile view sample links */}
                        {[
                            { title: "Etherscan", path: "https://etherscan.io/" },
                            { title: "Market", path: "https://www.coingecko.com/" },
                            { title: "Crypto News", path: "https://www.coindesk.com/" },
                        ].map((item, index) => (
                            <NavBarItem key={item.title + index} title={item.title} path={item.path} classprops="my-2 text-lg" />
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
