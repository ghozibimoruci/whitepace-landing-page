import { Pagination } from "swiper/modules";
import "./ChoosePlan.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from "react";

export const ChoosePlan = () => {
    const [isLg, setIsLg] = useState(window.innerWidth >= 1024);
    const [swiperKey, setSwiperKey] = useState(window.innerWidth >= 1024?1:0);
    const [selectedIdx, setSelectedIdx] = useState(-1);

    useEffect(() => {
      const handleResize = () => {
        setIsLg(window.innerWidth >= 1024);
        setSwiperKey(window.innerWidth >= 1024?1:0);
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    const planList = [
        {
          title: "Free",
          price: "$0",
          description: "Capture ideas and find them quickly",
          benefits: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks"
          ]
        },
        {
          title: "Personal",
          price: "$11.99",
          description: "Keep home and family on track",
          benefits: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks"
          ]
        },
        {
          title: "Organization",
          price: "$49.99",
          description: "Capture ideas and find them quickly",
          benefits: [
            "Sync unlimited devices",
            "10 GB monthly uploads",
            "200 MB max. note size",
            "Customize Home dashboard and access extra widgets",
            "Connect primary Google Calendar account",
            "Add due dates, reminders, and notifications to your tasks"
          ]
        }
      ]

    return (
        <div className="bg-secondary-white relative 2xl:py-40 md:py-28 py-24 prose">
            <div className="container relative z-1 2xl:px-7 lg:px-8 md:px-5 px-4">
                <div className="flex flex-wrap items-center text-center mb-20">
                    <div className="w-full">
                        <h2 className="text-secondary-black mt-0 mb-6 hidden md:block">
                        Choose Your Plan
                        </h2>
                        <h3 className="text-secondary-black mt-0 mb-6 block md:hidden">
                        Choose Your Plan
                        </h3>
                        <p className="text-secondary-black">
                        Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
                        </p>
                    </div>
                </div>
                <div>
                    <Swiper
                        key={swiperKey}
                        breakpoints={{
                            1024: {
                              slidesPerView: 3,
                            },
                            480: {
                              slidesPerView: 1.6,
                            },
                            0 : {
                              slidesPerView: 1,
                            },
                          }}
                        allowTouchMove={!isLg}
                        pagination={isLg?false:{clickable: true}}
                        initialSlide={1}
                        spaceBetween={0}
                        centeredSlides={true}
                        modules={[Pagination]}
                        onSlideChange={(swiper) => setSelectedIdx(swiper.activeIndex)}
                        className="swiper-choose-plan"
                    >
                        {
                            planList.map((plan, idx) => (
                                <SwiperSlide key={idx}>
                                    <div className="px-5 pt-5">
                                      <PlanCard
                                        isLg
                                        plan={plan}
                                        selected={selectedIdx == idx}
                                        mouseOverAction={() => setSelectedIdx(idx)}
                                      />
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

const PlanCard = ({
  isLg,
  selected,
  plan,
  mouseOverAction
}:{
  isLg: boolean,
  selected: boolean,
  plan: {
    title: string,
    price: string,
    description: string,
    benefits: string[]
  },
  mouseOverAction: () => void
}) => {
  return (
    <div className={
      "rounded-xl py-5 px-6 md:py-10 md:px-11 relative plan-card"+(
        selected ? " bg-primary-dark border-solid-primary-dark-1" : " bg-secondary-white border-solid-secondary-gold-1")
    }>
        {
          isLg && <a type="button" onMouseOver={mouseOverAction} className="absolute top-0 left-0 w-full h-full z-0" />
        }
        <p className={"mt-0 mb-5 p1 semibold" + (
          selected ? " text-secondary-white" : " text-secondary-black"
        )}>{plan.title}</p>
        <h4 className={"mt-0 mb-5" + (
          selected ? " text-secondary-gold" : " text-secondary-black"
        )}>{plan.price}</h4>
        <p className={"mt-0 mb-5 p2 medium" + (
          selected ? " text-secondary-white" : " text-secondary-black"
        )}>{plan.description}</p>
        {
            plan.benefits.map((bnf, jdx) => (
                <div className="flex items-center mb-6" key={jdx}>
                    <div className={"w-auto flex flex-none" + (
                  selected ? " text-secondary-gold" : " text-secondary-black"
                )}>
                        <i className="material-icons-round">task_alt</i>
                    </div>
                    <div className={"flex-grow ps-4" + (
                  selected ? " text-secondary-white" : " text-secondary-black"
                )}>
                        <p className={"p2 my-0 regular" + (
                          selected ? " !font-medium" : ""
                        )}>{bnf}</p>
                    </div>
                </div>

            ))
        }
        <button className={
          selected ? "bg-primary-light text-secondary-white border-solid-primary-light-1 rounded-lg py-3 px-8" : 
          "bg-secondary-white text-secondary-black border-solid-secondary-gold-1 rounded-lg py-3 px-8"
        }>
          <p className="p3 medium my-0">Get Started</p>
        </button>
    </div>
  )
}