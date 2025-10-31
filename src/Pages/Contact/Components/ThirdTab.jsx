import { Shell } from "lucide-react";
import { Button } from "../../../components/ui/button";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ThirdTab = () => {
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);

  const fileInputRef = useRef(null);
  const formRef = useRef();

  const MAX_CHARS = 400;

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0.1 },
    visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } },
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: { type: "tween", duration: 0.8, ease: "easeOut" },
    },
  };

  const handleChange = (e) => setText(e.target.value);

  const handleClick = () => fileInputRef.current.click();

  const MAX_SIZE = 25 * 1024 * 1024; // 25MB

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Filter valid files
    const validFiles = files.filter((file) => {
      const isValidType = [
        "application/pdf",
        "image/jpeg",
        "image/png",
      ].includes(file.type);
      console.log(file.type);
      const isValidSize = file.size <= MAX_SIZE;

      if (!isValidType) {
        toast.error("Unsupported file type!", {
          description: `${file.name} is not a supported file type.`,
          duration: 3000,
        });
        return false;
      }

      if (!isValidSize) {
        toast.error("File too large!", {
          description: ` ${file.name} exceeds 25MB limit.`,
          duration: 3000,
        });
        return false;
      }

      return true;
    });

    if (validFiles.length > 0) {
      setFile(validFiles);
      setFileName(validFiles.map((f) => f.name).join(", "));
    } else {
      // Reset if all files invalid
      setFile([]);
      setFileName("");
      e.target.value = "";
    }
  } ;

  const handleSend = (e) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "YOUR_REAL_SERVICE_ID",
        "YOUR_REAL_TEMPLATE_ID",
        formRef.current,
        "YOUR_REAL_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Form sent successfully!");
        },
        (error) => {
          console.error("Email error:", error.text);
          alert("Failed to send the form. Check console for details.");
        }
      );
  };

  return ( 
    <motion.div
      variants={containerVariants}
      initial="hidden" 
      animate="visible" 
      className="md:mt-8" 
    >
      <form ref={formRef} onSubmit={handleSend}>
        <div className="font-R_regular text-primary text-[1rem] leading-[1.2]   md:text-[1.5rem] md:leading-[2rem] md:mt-8 tracking-[0.15rem]">
          Talk is cheap. Sales aren’t. Got the network and the hustle?{" "}
          <br className="hidden md:block" /> Let’s talk big commission.
        </div>

        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 mt-10">
          {/* Email */}
          <div className="flex items-center justify-start w-full gap-5">
            <label
              htmlFor="email"
              className="font-M_medium  md:w-[14rem]    text-[1rem] md:text-[1.5rem] text-primary cursor-pointer"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              className="border-b  border-primary/10 focus:outline-none caret-secondary font-M_medium w-full text-primary text-[1rem] md:text-[1.4rem]"
            />
          </div>

          {/* Name */}
          <div className="flex items-center justify-start w-full gap-5">
            <label
              htmlFor="name"
              className="font-M_medium  md:w-[14rem]    cursor-pointer text-[1rem] md:text-[1.5rem] text-primary"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              className="border-b  border-primary/10 caret-secondary focus:outline-none font-M_medium w-full text-primary text-[1rem] md:text-[1.4rem]"
            />
          </div>

          {/* Country */}
          <div className="flex items-center justify-start w-full gap-5">
            <label
              htmlFor="Country"
              className="font-M_medium  md:w-[14rem]    cursor-pointer   text-[1rem] md:text-[1.5rem] text-primary"
            >
              Country
            </label>
            <input
              id="Country"
              name="Country"
              className="border-b  border-primary/10 caret-secondary focus:outline-none font-M_medium w-full text-primary text-[1rem] md:text-[1.4rem]"
            />
          </div>

          {/* Textarea */}
          <div className="h-auto flex  flex-col md:flex-row items-start justify-start w-full gap-5 mt-3">
            <div className="font-M_medium text-[1rem] md:text-[1.5rem] text-primary  whitespace-nowrap  -mt-2 flex items-center justify-center gap-3 ">
              Quick Note{" "}
              <span className="text-[0.5rem] md:text-xs font-M_regular text-primary ">
                (e.g. Tell us how you bring clients)
              </span>
            </div>
            <div className="w-full relative bg">
              <textarea
                name="message"
                rows={4}
                value={text}
                onChange={handleChange}
                maxLength={MAX_CHARS}
                className="relative caret-secondary w-full bg-transparent resize-none p-2 border border-primary/10 rounded-lg focus:outline-none text-white text-[1rem] md:text-[1.4rem] custom-scrollbar"
              />
              <div
                className={`text-xs w-full text-right font-M_medium  -translate-y-1 ${
                  MAX_CHARS === text.length ? "text-secondary" : "text-primary"
                }`}
              >
                ( {MAX_CHARS - text.length} characters remaining )
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between">
            <div className="flex flex-col   ">
              {/* File upload */}
              <div className="flex items-center justify-start w-full gap-2 md:gap-10 mt-5">
                <span
                  className="font-M_medium text-[1.5rem] text-primary cursor-pointer hover:text-secondary"
                  onClick={handleClick}
                >
                  Upload
                </span>
                <div className="flex flex-col gap-1">
                  <span className="font-M_regular text-[7px] md:text-xs text-primary tracking-[.12em]">
                    (deck, moodboard, or supporting brief (PDF, JPG, PNG – max
                    25MB) <br />
                    Need more space? Include a link in your message or email us
                    at business@advertisingattitude.com)
                  </span>
                  <span className="font-M_medium text-[7px] md:text-xs text-secondary tracking-[.12em]">
                    {fileName && `( ${fileName} )`}
                  </span>
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                  name="file"
                  multiple
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center justify-start w-full gap-2 md:gap-5 mt-10">
                <div
                  className={`flex font-M_medium text-[1.5rem] border w-14 h-14 min-w-14 min-h-14  items-center justify-center cursor-pointer transition-colors duration-300 border-primary relative`}
                  onClick={() => setActive(!active)}
                >
                  <img
                    src="/Images/swirl.svg"
                    alt="logo"
                    className={`  transition-scale transition-rotate duration-600 absolute top-0 left-0 w-full h-full ${
                      active
                        ? "opacity-100 scale-90 rotate-0"
                        : "scale-0 opacity-0 rotate-120"
                    }`}
                  />
                </div>
                <span className="font-M_regular text-[7px] md:text-xs text-primary tracking-[.12em]">
                  I agree to the use of my data as outlined in the Privacy
                  Policy. <br className="hidden md:block" />
                  By submitting this form, you agree to be contacted by
                  Advertising Attitude regarding your inquiry.{" "}
                  <br className="hidden md:block" />
                  All information shared will be treated confidentially and used
                  solely to assess your project needs.{" "}
                  <br className="hidden md:block" />
                  This does not constitute a binding agreement.
                </span>
              </div>

              {/* Submit button */}
              <div className="flex items-center justify-between md:items-start md:justify-start w-full mt-20">
                <Button
                  type="submit"
                  className="font-R_regular text-[0.8rem] tracking-[0.05rem] leading-[] md:text-[1.4rem] md:tracking-[0.12em] md:leading-[4rem] flex items-center 
            justify-center flex-1 md:flex-none  w-auto md:w-[28rem] h-[3rem] md:h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer rounded-full text-primary bg-secondary"
                >
                  BRING THE CLIENTS
                </Button>

                <div className="!flex-1 md:hidden ">
                  <motion.img
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.5 }}
                    src={"/Images/contactLogo.png"}
                    className=" "
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* Right image */}
            <div className="hidden md:block">
              <motion.img
                variants={imageVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.5 }}
                src={"/Images/contactLogo.png"}
                className="h-[22rem] -translate-y-12"
                alt=""
              />
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default ThirdTab;
