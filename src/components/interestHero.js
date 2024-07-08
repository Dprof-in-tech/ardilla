import React from "react";
import Nav from "./InterestNav";
import graph from "../assets/graph.svg";

const InterestHero = () => {
  return (
    <div className="max-w-8xl w-full mx-auto bg-interestbg bg-cover h-auto md:h-[970px]">
      <Nav />
      <div className="text-white px-4 md:px-[5rem] py-4">
        <h1 className="font-bold text-[2.5rem] text-start mt-4 pl-2 md:pl-4 text-white">Calculate Your Interests</h1>
        <div className="flex flex-col md:flex-row justify-evenly gap-4 items-start mt-6 md:mt-0">
          <form method="post" className="w-full md:w-[45%]">
            <div className="w-full md:w-[65%] flex flex-col items-start mb-8 gap-2">
              <label className="text-[0.95rem] text-gray-400 mt-4" htmlFor="frequency">How often are you saving?</label>
              <select className="w-full mt-2 bg-transparent border outline-none border-white rounded-lg px-8 py-6 font-sans text-[0.95rem] text-white" name="frequency" id="frequency">
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>

            <div className="w-full md:w-[65%] flex flex-col mb-8 gap-2">
              <label className="text-[0.95rem] text-gray-400" htmlFor="amount">How much are you saving?</label>
              <input type="text" placeholder='2,000' className="w-full bg-transparent border-b-2 outline-none border-white py-2 font-sans text-[2rem] text-white" name="amount" />
            </div>
            <div className="w-full md:w-[65%] flex flex-col mb-8 gap-2 mt-4">
              <label className="text-[0.95rem] text-gray-400" htmlFor="amount">How long are you saving for? (In months)</label>
              <input type="text" placeholder='3' className="w-full bg-transparent border-b-2 outline-none border-white py-2 font-sans text-[2rem] text-white" name="amount" />
            </div>
          </form>

          <div className="bg-[#F3F4F6] rounded-t-xl w-full md:w-[53%] h-[780px] md:h-[780px] px-8 md:px-16 py-10">
            <div className="w-full md:w-[65%] flex flex-col mb-4 mt-4">
              <label className="text-[0.95rem] font-semibold text-gray-400" htmlFor="balance">Total balance</label>
              <h2 className="font-sans font-bold text-[2rem] text-[#3D0072] mt-0" name="balance">
                N6,600
              </h2>
            </div>
            <h2 className="flex items-center gap-1 text-[0.95rem] font-semibold text-gray-400">
              Saving <p className="font-bold text-gray-500">₦2,000</p> monthly for 3 months will result in a balance of <p className="font-bold text-gray-500">₦6,600</p>
            </h2>
            <div className="w-full md:w-[65%] flex flex-col mb-8 mt-8">
              <label className="text-[0.95rem] font-semibold text-gray-400" htmlFor="interest">Interest</label>
              <h2 className="flex items-center gap-2 font-sans font-bold text-[2rem] text-[#3D0072] mt-0" name="interest">
                N600 <p className="font-extralight text-[1.2rem] text-[#3D0072] mt-0">(2%)</p>
              </h2>
            </div>
            <div className="w-full md:w-[65%] flex flex-col mb-8 mt-4">
              <label className="text-[0.95rem] font-semibold text-gray-400" htmlFor="savings">Total Savings</label>
              <h2 className="flex items-center gap-2 font-sans font-bold text-[2rem] text-[#3D0072] mt-0" name="savings">
                N6,000 <p className="font-extralight text-[1.2rem] text-[#3D0072] mt-0">(2%)</p>
              </h2>
            </div>
            <div className="w-full mb-8 mt-4">
              <img src={graph} alt="graph" className="w-full h-full" />
            </div>
            <button className="rounded-full px-12 py-4 bg-[#8807F7] hover:bg-[#3D0072]">Save now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterestHero;