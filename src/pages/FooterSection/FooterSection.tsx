import "./FooterSection.css";
import Logo from "../../assets/logo/Logo.png";
import FacebookIcon from "../../assets/footer-section/FacebookIcon.svg";
import TwitterIcon from "../../assets/footer-section/TwitterIcon.svg";
import LinkedinIcon from "../../assets/footer-section/LinkedinIcon.svg";

export const FooterSection = () => {
    const footerLinkList = [
        {
          title: "Product",
          items: ["Overview", "Pricing", "Customer stories"]
        },
        {
          title: "Resources",
          items: ["Blog", "Guides & tutorials", "Help center"]
        },
        {
          title: "Company",
          items: ["About us", "Careers", "Media kit"]
        }
    ];
    const bottomLinkList = [
        "Terms & privacy", "Security", "Status", "©2021 Whitepace LLC."
    ]
    const socialMediaList = [{
        title: "Facebook Icon",
        src: FacebookIcon,
    },{
        title: "Twitter Icon",
        src: TwitterIcon
    }, {
        title: "Linkedin Icon",
        src: LinkedinIcon
    }]

    return (
        <div className="bg-primary-dark relative 2xl:pt-40 md:pt-28 pt-24 pb-8 prose">
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap justify-center lg:justify-between text-secondary-white mb-20">
                    <div className="w-full lg:w-auto mb-24 lg:mb-0 flex flex-wrap flex-col items-center lg:items-start">
                        <img src={Logo} alt="Logo Whitepace" className="max-w-max h-[34px] sm:h-[54px] md:h-[62px] lg:h-[34px] my-0" />
                        <p className="p2 regular my-0 text-center lg:text-start mt-6 lg:mt-4 md:max-w-[520px] lg:max-w-[240px]">
                            whitepace was created for the new ways we live and work. We make beautyfully designed around the world
                        </p> 
                    </div>
                    {
                        footerLinkList.map((links, idx) => (
                            <div className="w-full lg:w-auto mb-24 lg:mb-0 flex flex-wrap flex-col items-center lg:items-start" key={idx}>
                                <p className="p2 bold mt-0 mb-4">
                                    {links.title}
                                </p>
                                {
                                    links.items.map((text, jdx) => (
                                        <p className="p3 regular mt-0 mb-4" key={jdx}>{text}</p>
                                    ))
                                }
                            </div>
                        ))
                    }
                    <div className="w-full lg:w-auto flex flex-wrap flex-col items-center lg:items-start">
                        <h5 className="mt-0 mb-6">Try it Today</h5>
                        <p className="p3 regular mt-0 mb-6 text-center lg:text-start max-w-[160px] lg:max-w-[260px]">
                            Get started for free. Add your whole team as your needs grow.
                        </p>
                        <div>
                            <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 flex items-center gap-1">
                                <p className="p3 medium my-0">Start Today</p><i className="material-icons-round">arrow_right_alt</i>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="w-full separator-footer hidden lg:block mb-8"></div>
                <div className="flex flex-wrap justify-between text-secondary-white">
                    <div className="w-full lg:w-auto flex flex-wrap items-center lg:gap-[60px] justify-between lg:justify-start">
                        <div className="w-full sm:w-auto mb-5 sm:mb-0 justify-center flex items-center">
                            <i className="material-icons-round pe-2">language</i>
                            <p className="p3 regular my-0">English</p>
                            <i className="material-icons-round ps-2">expand_more</i>
                        </div>
                        {
                            bottomLinkList.map((text, idx) => (
                                <div className="w-full sm:w-auto mb-5 sm:mb-0 justify-center flex" key={idx}>
                                    <p className="p3 regular my-0">{text}</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className="w-full separator-footer lg:hidden sm:my-5"></div>
                    <div className="w-full lg:w-auto flex flex-wrap items-center lg:gap-8 justify-evenly lg:justify-start mt-5 sm:mt-0">
                        {
                            socialMediaList.map((item, idx) => (
                                <img src={item.src} alt={item.title} key={idx} className="my-0" />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}