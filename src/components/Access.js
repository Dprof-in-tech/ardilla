import React from "react";
import buttonarrow from "../assets/buttonarrow.svg";
import access1 from "../assets/access1.svg";
import access2 from "../assets/access2.svg";
import access3 from "../assets/access3.svg";
import access4 from "../assets/access4.svg";
import Feature from "./FeatureComponent";

const images = [
    { src: access1, title: 'DIB', description: 'Nothing beats an emergency quite like an emergency fund. With Ardilla you can get started building that emergency fund.', link:"Learn More" },
    { src: access2, title: 'Dreams', description: "Helping you make your dreams a reality is important to us. We have helped so many others. We can help you as well.", link: 'Learn More' },
    { src: access3, title: 'Vault', description: "Lock away excess funds you don't know what to do with. We can help you safeguard it till you are ready. It definitely beats spending it and wondering where all that money went to.", link: "Learn More" },
    { src: access4, title: 'Grit', description: "Become a VIP when you save more money with us. Enjoy better benefits.", link: "Learn More"},
];

const Access = () => {
    return (
        <div className="max-w-8xl  w-full mx-auto bg-access-bg bg-cover h-[fit-content] px-16 flex flex-col items-center">

            <div className="flex flex-col items-start px-6 py-4">
                <h1 className="text-white text-[5rem] font-bold text-start mt-10">
                    Access More With Your Money
                </h1>
                <p className="text-gray-200 text-[0.95rem] text-start max-w-[65%]">
                    Earn, learn, parlay, and grow financially. With Ardilla, you have more opportunities than ever at your finger tips. Why not take advantage today?
                </p>
                <div className="flex justify-center mt-8">
                    <button className="flex items-center text-gray-200 gap-2 border-gray-200 border rounded-full px-8 py-4">Learn more about Savings <img src={buttonarrow} alt="" /></button>
                </div>
            </div>
            <div className=" px-6 py-4 w-[95%] h-[fit-content] border border-purple-600 rounded-t-md mt-5 shadow-purple-all bg-[#29014b]">
                <div className="flex flex-wrap items-center justify-around gap-4 px-8 py-16">
                {images.map((image, index) => (
                    <Feature
                        key={index}
                        image={image.src}
                        title={image.title}
                        description={image.description}
                        link={image.link}
                    />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Access;