import "./YourWork.css";
import YourWorkBackground from "../../assets/your-work/YourWorkBackground.png";

export const YourWork = () => {
    return (
        <div className="bg-primary-dark relative 2xl:py-40 md:py-28 py-24 prose">
            <img src={YourWorkBackground} alt="Your Work Background" className="your-work-background" />
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap items-center text-start lg:text-center">
                    <div className="w-full">
                        <h2 className="text-secondary-white mt-0 mb-6">
                        Your work, everywhere you are
                        </h2>
                        <p className="text-secondary-white">
                        Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}