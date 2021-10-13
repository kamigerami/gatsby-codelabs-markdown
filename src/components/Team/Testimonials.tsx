import { data } from "autoprefixer";
import React from "react";
import { testimonialsData } from "../../Data/TestimonialsData";
const Testimonials = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-6 md:px-1 md:py-56 py-24 ">
                <div className="flex w-full justify-center flex-wrap">
                    {testimonialsData.map((items, index) => {
                        return (
                            <div className="md:px-5 mb-12" key={index}>
                                <div className="max-w-6xl mx-auto px-6 md:px-1 flex place-content-evenly">
                                    <div className="max-w-lg px-2 md:pt-4 pb-11 pt-4 md:block hidden">
                                        <p className="italic font-extrabold text-5xl text-left text-grey-normal font-normal pb-12">
                                            "{items.quote}"
                                        </p>
                                        <p className="font-thin">
                                            {items.name}, {items.designation}
                                        </p>
                                    </div>
                                    <div className="px-4 w-1/2 md:pt-4 pb-11 pt-4 md:block hidden">
                                        <img src={items.picture} className="rounded-lg"></img>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
