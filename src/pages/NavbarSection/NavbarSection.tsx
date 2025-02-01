import "./NavbarSection.css";
import Logo from "../../assets/logo/Logo.png";
import { useEffect, useState } from "react";

export const NavbarSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(true);
    const linksList = ["Products", "Solutions", "Resources", "Pricing"];

    useEffect(() => {
      const handleResize = () => {
        if((window.innerWidth >= 1024))
        setIsOpen(false);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            <BottomDrawer isOpen={isOpen} setIsOpen={setIsOpen} linksList={linksList} />
            <div className="bg-primary-dark fixed w-screen py-4 prose z-[5]">
                <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="col-auto relative">
                            <img src={Logo} alt="Logo Whitepace" className="max-w-max h-[34px] sm:h-[54px] md:h-[62px] lg:h-[34px] my-0 cursor-pointer" onClick={()=>setShowTooltip(prev => !prev)} />
                            <div className="absolute bg-secondary-gold text-secondary-black rounded-xl top-[100%] w-max shadow-xl mt-4">
                                {
                                    showTooltip && 
                                    <div className="p-5 flex items-center gap-4">
                                        <div className="w-auto">
                                        I built this site following <a href="https://www.figma.com/community/file/1156860863353724933" target="_blank" className="text-primary-light">
                                        this awesome design</a>!
                                        </div>
                                        <div className="w-auto">
                                            <button className="bg-transparent flex" onClick={()=>setShowTooltip(prev => !prev)}>
                                                <i className="material-icons-round">close</i>
                                            </button>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                        <div className="col-auto flex flex-wrap">
                            <div className="hidden lg:flex">
                                {
                                    linksList.map((text, idx) => (
                                        <a type="button" key={idx} className="flex items-center text-secondary-white no-underline xl:me-8 lg:me-3">
                                            <p className="p2 medium my-0">{text}</p>
                                            <i className="material-icons-round xl:ps-2">expand_more</i>
                                        </a>
                                    ))
                                }
                            </div>
                            <div className="flex flex-wrap items-center gap-4 lg:gap-3 xl:gap-6">
                                <button className="bg-secondary-gold text-secondary-black border-solid-secondary-gold-1 rounded-lg py-5 px-8 hidden md:flex items-center">
                                    <p className="p3 medium my-0">Login</p>
                                </button>
                                <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 hidden md:flex items-center gap-1">
                                    <p className="p3 medium my-0">Try Whitepace free</p><i className="material-icons-round">arrow_right_alt</i>
                                </button>
                                <button onClick={() => setIsOpen(true)} className="bg-transparent text-secondary-white rounded-lg p-0 max-h-max flex lg:hidden">
                                    <i className="material-icons-round text-[42px]">menu</i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const BottomDrawer = ({isOpen, setIsOpen, linksList = []}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void, linksList: string[]}) => {
    useEffect(() => {
        if (isOpen) {
          document.body.style.overflow = "hidden"; // Prevent scrolling
        } else {
          document.body.style.overflow = ""; // Restore scrolling
        }
    
        return () => {
          document.body.style.overflow = ""; // Cleanup when component unmounts
        };
      }, [isOpen]);
    return (
        <div
          className={"fixed bottom-0 left-0 w-full bg-white shadow-lg rounded-t-lg transition-transform transform z-[10] h-dvh " + (
            isOpen ? "translate-y-0" : "translate-y-full"
          )}
        >
            <div className="w-full h-full relative">
                <div className="p-5 flex justify-end">
                    <button onClick={() => setIsOpen(false)} className="bg-transparent text-secondary-black rounded-lg p-0">
                        <i className="material-icons-round text-[42px]">close</i>
                    </button>
                </div>
                <div className="p-5">
                    {
                        linksList.map((text, idx) => (
                            <a type="button" key={idx} className="w-full flex justify-between items-center text-secondary-black no-underline py-5">
                                <p className="p2 medium my-0">{text}</p>
                                <i className="material-icons-round xl:ps-2">keyboard_arrow_right</i>
                            </a>
                        ))
                    }
                </div>
                <div className="absolute w-full bottom-0 left-0 p-5">
                    <div className="flex flex-wrap items-center gap-4 lg:gap-3 xl:gap-6 justify-evenly">
                        <button className="bg-secondary-gold text-secondary-black border-solid-secondary-gold-1 rounded-lg py-5 px-8 flex items-center">
                            <p className="p3 medium my-0">Login</p>
                        </button>
                        <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 flex items-center gap-1">
                            <p className="p3 medium my-0">Try Whitepace free</p><i className="material-icons-round">arrow_right_alt</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
  };