import { Shell } from "lucide-react";
import { Button } from "../../../components/ui/button";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const SecondTab = () => {
  const [text, setText] = useState("");
  const [active, setActive] = useState(false);
  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState(null);
  const [checkboxError, setCheckboxError] = useState(false);

  const fileInputRef = useRef(null);
  const formRef = useRef();

  const MAX_CHARS = 400;

  // Variants for animations
 const containerVariants = { hidden: { opacity: 0.1 }, visible: { opacity: 1, transition: { duration: 2, ease: "easeOut" } } };
  const imageVariants = { hidden: { opacity: 0, scale: 0.5 }, show: { opacity: 1, scale: 1, transition: { type: "tween", duration: 0.8, ease: "easeOut" } } };

  const handleChange = (e) => setText(e.target.value);

  const handleClick = () => fileInputRef.current.click();

const MAX_SIZE = 25 * 1024 * 1024; // 25MB

const handleFileChange = (e) => {
  const files = Array.from(e.target.files);

  // Filter valid files
  const validFiles = files.filter((file) => {
    const isValidType = [
      "application/pdf",
      "video/mp4",
      "image/jpeg",
      "image/png",
    ].includes(file.type);

    const isValidSize = file.size <= MAX_SIZE;

    if (!isValidType) {
      toast.error("Unsupported file type!", {
        description: `${file.name} is not a supported file type.`,
        duration: 3000,
      })
      return false;
    }

    if (!isValidSize) {
      toast.error("File too large!", {
        description: ` ${file.name} exceeds 25MB limit.`,
        duration: 3000,
      })
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
};


const [sendingEmail, setSendingEmail] = useState(false);

const handleSend = async (e) => {
  e.preventDefault();
  const formData = new FormData(formRef.current);

  const email = formData.get("email");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!active) {
    setCheckboxError(true);
    toast.error("Please agree to the Privacy Policy before submitting.");
    return;
  }
  
  setSendingEmail(true);
  if (!emailRegex.test(email)) {
    toast.error("Please enter a valid email address.");
      setSendingEmail(false);

    return;
  }
 formData.append("category", "I am a Creator");
   if (file && file.length > 0) {
    file.forEach(f => {
      formData.append("file", f, f.name);
    });
  }
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
    method: "POST",
    body: formData,
  });

      
  if (response.ok) {toast.success("Form sent successfully!");
    formRef.current.reset();

  // Reset React states
  // setText("");
  // setActive(false);
  // setFile([]);
  // setFileName("");
  //  setSendingEmail(false);
  
  window.location.href = "/thank-you";
  
  }
  else{ toast.error("Failed to send the form."); ; setSendingEmail(false);}
};

const removeFile = (indexToRemove) => {
  const updatedFiles = file.filter((_, index) => index !== indexToRemove);
  setFile(updatedFiles);

  const updatedNames = updatedFiles.map((f) => f.name).join(", ");
  setFileName(updatedNames);

  // Clear input value if no files are left
  if (updatedFiles.length === 0) {
    fileInputRef.current.value = "";
  }
};
  return (
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="md:mt-8">
          <form ref={formRef} onSubmit={handleSend}>
            <div className="font-R_regular text-primary text-[1rem] leading-[1.2]  md:text-[1.5rem] md:leading-[2rem] md:mt-8 tracking-[0.15rem]">
         

          Think you’ve got SwirlBold in your blood? <br className="hidden md:block" />
           Prove it, and drop us your portfolio.
        </div>

        <div className="flex flex-col justify-center items-center gap-4 md:gap-8 mt-10">
          {/* Email */}
          <div className="flex items-center justify-start w-full gap-5">
            <label htmlFor="email" className="font-M_medium md:w-[14rem]  text-[1rem] md:text-[1.5rem] text-primary cursor-pointer">Email</label>
            <input id="email" required  name="email" type="email" className="border-b  border-primary/10 focus:outline-none caret-secondary font-M_medium w-full text-primary text-[1rem] md:text-[1.4rem]" />
          </div>

          {/* Name */}
          <div className="flex items-center justify-start w-full gap-5">
            <label htmlFor="name" className="font-M_medium md:w-[14rem]  text-[1rem] md:text-[1.5rem]   cursor-pointer  text-primary">Name</label>
            <input id="name" required name="name" className="border-b  border-primary/10 caret-secondary focus:outline-none font-M_medium w-full text-primary text-[1rem] md:text-[1.4rem]" />
          </div>

          {/* Country */}
          <div className="flex items-center justify-start w-full gap-5">
            <label htmlFor="Portfolio" className="font-M_medium md:w-[14rem]  text-[1rem] md:text-[1.5rem] whitespace-nowrap
              cursor-pointer    text-primary">Portfolio Link</label>
            <input id="Portfolio" required  name="Portfolio" type="link" className="border-b  border-primary/10
             caret-secondary focus:outline-none font-M_medium w-full text-primary text-[1rem] md:text-[1.4rem]" />
          </div>

          {/* Textarea */}
         <div className="h-auto flex  flex-col md:flex-row items-start justify-start w-full gap-5 mt-3">
            <div className="font-M_medium text-[1rem] md:text-[1.5rem] text-primary  whitespace-nowrap  -mt-2 flex items-center justify-center gap-3 ">
            Write us your best work <span className="text-[0.5rem] md:text-xs font-M_regular  text-primary ">(social handles, type of work, or say hey)</span>
            
            </div>
            <div className="w-full relative">
              <textarea
                name="message"
                required
                rows={4}
                value={text}
                onChange={handleChange}
                maxLength={MAX_CHARS}
                className="relative caret-secondary w-full bg-transparent resize-none p-2 border border-primary/10 rounded-lg focus:outline-none text-primary text-[1rem] md:text-[1.4rem] custom-scrollbar"
              />
                <div className={`text-xs w-full text-right font-M_medium  md:-translate-y-1 ${MAX_CHARS === text.length ? "text-secondary" : "text-primary"}`}>
          (      {MAX_CHARS - text.length} characters remaining )
              </div>
            </div>
          </div>
<div className="flex w-full justify-between">
<div className="flex flex-col   ">
          {/* File upload */}
          <div className="flex items-start justify-start w-full gap-2 md:gap-5 mt-5">
            <span className="font-M_medium text-[1.5rem] text-primary cursor-pointer hover:text-secondary" onClick={handleClick}>Upload</span>
            <div className="flex flex-col gap-1">
              <span className="font-M_regular text-[7px] md:text-xs text-primary tracking-[.12em]">
           
                CV, reel, or creative sample (PDF, MP4, JPG – max 25MB) <br />
                Want to share more? Drop a link above or email us at talent@advertisingattitude.com
              </span>
             <div className="flex flex-wrap gap-2 mt-1">
  {file?.map((fileItem, index) => (
    <div
      key={index}
      className="flex items-center gap-1 px-2 py-1 rounded-md text-[8px] md:text-xs text-primary"
    >
      <span>{fileItem.name}</span>
      <button
        type="button"
        onClick={() => removeFile(index)}
        className="text-secondary font-bold hover:text-red-600"
      >
        ✕
      </button>
    </div>
  ))}
</div>
            </div>
              <input
  type="file"
  ref={fileInputRef}
  onChange={handleFileChange}
  className="hidden"
  name="file"
  multiple
  accept=".pdf,.mp4,.jpg,.jpeg,.png"
/>

          </div>

          {/* Checkbox */}
          <div className="flex items-center justify-start w-full gap-2 md:gap-5 mt-10">
            <div className={`flex font-M_medium text-[1.5rem] border w-10 h-10 min-w-10 min-h-10 md:w-10 md:h-14 md:min-w-14 md:min-h-14  items-center justify-center cursor-pointer transition-colors duration-300 ${active ? "border-primary" : checkboxError ? "border-secondary" : "border-primary"} relative`} onClick={() => {
              setActive(!active);
              if (!active) setCheckboxError(false);
            }}>
              <img src="/Images/swirl.svg" alt="logo" className={`  transition-scale transition-rotate duration-600 absolute top-0 left-0 w-full h-full ${active ? "opacity-100 scale-90 rotate-0" : "scale-0 opacity-0 rotate-120"}`} />
            </div>
            <span className="font-M_regular text-[7px] md:text-xs text-primary tracking-[.12em]">
              I agree to the use of my data as outlined in the Privacy Policy. <br className="hidden md:block" />
              By submitting this form, you agree to be contacted by Advertising Attitude regarding your inquiry. <br className="hidden md:block" />
              All information shared will be treated confidentially and used solely to assess your project needs. <br className="hidden md:block" />
              This does not constitute a binding agreement.
            </span>
          </div>

          {/* Submit button */}
          <div className="flex  items-center justify-between md:items-start md:justify-start w-full mt-20">
            <div className="flex flex-col w-auto !flex-1 md:flex-none">

            <button 
            disabled={sendingEmail}

             type="submit" className="font-R_regular text-[0.8rem] tracking-[0.05rem] leading-[] md:text-[1.4rem] md:tracking-[0.12em] md:leading-[4rem] flex items-center 
            justify-center flex-1 md:flex-none mt-6 md:mt-0 w-auto md:w-[28rem] py-3 md:py-0 h-[3rem] md:h-[5rem] hover:bg-secondary hover:opacity-80 cursor-pointer rounded-full text-primary bg-secondary">
             
             {sendingEmail ? "Sending Email..." : "PROVE IT"}  

            </button>
 <p className="font-M_regular text-[7px] md:text-xs text-primary tracking-[.12em] mt-3 md:mt-5">
              {/* Advertising Attitude trusted by regional brands who operate under pressure — including Abu Dhabi Duty Free, Muscat <br className="hidden md:block"/>
Duty Free, Beirut Duty Free, D-VIA, and Nouvelle Pharm. <br/>
Best suited for brands with active marketing budgets or ongoing campaigns.<br/><br/> */}
All fields are mandatory except the upload. Please enter a valid email to submit.
              </p>
            </div>
             <div className="!flex-1 md:hidden " >
          <motion.img variants={imageVariants} initial="hidden" whileInView="show"
           viewport={{ once: false, amount: 0.5 }} src={"/Images/contactLogo.webp"}
            className=" " alt="" />
        </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hidden md:block">
          <motion.img variants={imageVariants} initial="hidden" whileInView="show"
           viewport={{ once: false, amount: 0.5 }} src={"/Images/contactLogo.webp"}
            className="h-[22rem] -translate-y-12" alt="" />
        </div>
        </div>
        </div>

      </form>
    </motion.div>
  );
};

export default SecondTab;
