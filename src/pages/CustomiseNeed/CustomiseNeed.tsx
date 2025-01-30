export const CustomiseNeed = () => {
    return (
        <div className="bg-secondary-white relative 2xl:py-40 md:py-28 py-24 prose">
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap items-center text-center lg:text-start">
                    <div className="w-full lg:w-1/2 mb-20 lg:mb-0">
                        <div className="hero-img-container w-[551px] lg:w-full max-w-full m-auto">

                        </div>
                    </div>
                    <div className="w-full flex flex-wrap justify-center lg:justify-start lg:w-1/2 2xl:ps-28 lg:ps-20">
                        <h2 className="text-secondary-black mt-0 mb-6">
                        Customise it to your needs
                        </h2>
                        <p className="text-secondary-black mb-20">
                        Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
                        </p>
                        <button className="bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-5 px-8 flex items-center gap-1">
                          Let's Go<i className="material-icons-round">arrow_right_alt</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}