import { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title }) => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [name, setName] = useState(title);

  let interval = null;

  const handleMouseEnter = () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      const newName = name
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return title[index];
          }

          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setName(newName);

      if (iteration >= title.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <Tilt className="xs:w-72 w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className="screen flex p-4 relative shadow-card overflow-hidden w-full border-[3px] border-bluergb-80 aspect-square text-white rounded-2xl bg-bluergb-15"
        onMouseEnter={handleMouseEnter}
      >
        <div className="screen-lines-gradient h-full w-full absolute z-20 left-0 top-0"></div>
        <div className="screen-content w-full flex grow flex-col items-center justify-center gap-16 relative z-30 p-4 border-[1px] border-bluergb-50 rounded-[0.6rem]">
          <div className="screen-user w-full break-words px-8 flex flex-col items-center gap-4 relative">
            <h3
              className="name relative max-w-full text-md font-normal font-source-code-pro text-white text-center uppercase"
              data-value={title}
            >
              {name}
            </h3>
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className="styles.sectionSubText">Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Recognized for consistently exceeding expectations and driving project
          success through a combination of technical expertise, collaboration,
          and a passion for delivering high-quality software. Dedicated to
          leveraging strong technical acumen and proven track record to
          contribute to cutting-edge projects and drive organizational growth.
          Completed frontend and backend software engineering projects for
          high-profile clients such as Twin Peaks, Stayfree, Hawaiian Tropic,
          Clio Coffee, Banana Boat, and more
        </motion.p>

        <div className="mt-20 flex flex-wrap gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
