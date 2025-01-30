import "./OurSponsor.css";
import Apple from "../../assets/our-sponsor/Apple.png";
import Microsoft from "../../assets/our-sponsor/Microsoft.png";
import Slack from "../../assets/our-sponsor/Slack.png";
import Google from "../../assets/our-sponsor/Google.png";

export const OurSponsor = () => {
    return (
        <div className="bg-secondary-white relative 2xl:py-40 md:py-28 py-24 prose">
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap items-center text-center lg:text-start">
                    <div className="w-full flex flex-wrap justify-center">
                        <h2 className="text-secondary-black mt-0 mb-28">
                        Our sponsors
                        </h2>
                    </div>
                    <div className="w-full flex flex-wrap justify-between items-center flex-col lg:flex-row">
                        <img src={Apple} alt="Apple Icon" className="sponsor-icons max-w-max h-[40px] sm:h-[52px] md:h-[64px]" />
                        <img src={Microsoft} alt="Microsoft Icon" className="sponsor-icons max-w-max h-[40px] sm:h-[52px] md:h-[64px]" />
                        <img src={Slack} alt="Slack Icon" className="sponsor-icons max-w-max h-[40px] sm:h-[52px] md:h-[64px]" />
                        <img src={Google} alt="Google Icon" className="sponsor-icons max-w-max h-[40px] sm:h-[52px] md:h-[64px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}