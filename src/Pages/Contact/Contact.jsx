import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import FirstTab from "./Components/FirstTab";
import SecondTab from "./Components/SecondTab";
import ThirdTab from "./Components/ThirdTab";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Tabs from "../../components/Tabs/Tabs";

const Contact = () => {
  const [selected, setSelected] = useState(1);

  const title = [
    { label: "I am a Brand", value: 1 },
    { label: "I am a Creator", value: 2 },
    { label: "I am a PR", value: 3 },
  ];

  useEffect(() => {
    // Smooth scroll removed
    const element = document.getElementById("contact-section");
    if (element) {
      window.scrollTo({ top: element.offsetTop, behavior: "smooth" });
    }
  }, []);
const navigate =  useNavigate();
  return (
    <>
      <section id="contact-section" className="relative  ">
        <Nav title={"let's talk"} tracking={"tracking-[1.6rem]"} />

        <div
          className="absolute inset-0 w-full h-full bg-center "
          style={{ backgroundImage: `url('/Images/bg.svg')` }}
        >
          <div className="absolute inset-0 bg-[#202A43] -z-[1]" />
        </div>

        <div className="relative px-[4rem] pt-30 border-b-[1px] border-b-primary pb-20 ">
 
                           <Tabs
                            tabs={[
                              { name: "Home", href: "/" },
                              { name: "Let's Talk", href: "" },
                            ]}
                            color="text-primary"
                          />

          <div className="grid grid-cols-3 gap-18   pb-8  ">
            {title.map((item) => (
              <div
                key={item.value}
                onClick={() => setSelected(item.value)}
                className={`h-[5rem] flex items-center justify-center px-4 border-[3px] font-M_extrabold text-center text-[1.5rem]
                border-secondary text-primary rounded-full cursor-pointer tracking-[.15rem]
                ${selected === item.value ? "bg-secondary text-white" : ""}`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {selected === 1 ? (
            <FirstTab />
          ) : selected === 2 ? (
            <SecondTab />
          ) : (
            <ThirdTab />
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
