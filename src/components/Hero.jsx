import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 max-w-7xl mx-auto -mt-36 flex flex-row items-center gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className="font-black lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[98px] mt-2">
            Jun Hyuk Cho
            <span className="block lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] text-[#915eff]">
              Fullstack Developer
            </span>
          </h1>
          <p className="text-[#dfd9ff] font-medium lg:text-[20px] sm:text-[16px] text-[14px] lg:leading-[28px] mt-2 max-w-[640px]">
            Dynamic and results-driven software engineer with 5 years of
            experience delivering innovative solutions in web and mobile
            application development.
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      {/* <div className="absolute xd:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
