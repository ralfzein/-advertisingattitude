import { X } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy = () => {
    const navigate = useNavigate();
  return (
    <div className="bg-background bg-[url('/Images/newbg.webp')]  tracking-[0.16rem] bg-contain md:bg-cover  px-4 md:px-[4rem] py-4 pb-20 md:py-[4rem]
        md:bg-[url('/Images/bg.svg')] bg-center text-primary relative ">
            <div className='absolute top-8 right-4 md:top-10 md:right-10 cursor-pointer hover:text-secondary text-primary '
          onClick={() => navigate('/')}><X /></div>
                <h1 className='font-R_regular text-[2rem] md:text-[4rem] tracking-[0.2rem] text-secondary leading-[3.2rem] md:leading-[5rem]'>Privacy Policy
</h1>
{/* the whitespace-pre-wrap isnt take the break line why? */}
<p className=' tracking-[0.1rem]'>
Last updated: October 2024

</p>
    <br/><br className='hidden md:block'/>

<div className='text-primary whitespace-break-spaces  leading-[24px] font-M_regular text-sm     '>
<h3 className='font-M_bold '>1. Introduction </h3> 
Advertising Attitude(“we”, “our”, “us”) is committed to protecting your personal information and your right to privacy.
This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
<br/><br/>
<h3 className='font-M_bold '>

2. Information We Collect
</h3>
We may collect:
<br/>• Personal information you voluntarily provide (name, email, country, message content, uploaded files).
<br/>• Usage data (device type, browser, IP address, time spent on pages).
<br/>• Cookies to improve performance and user experience.
<br/><br/>
<h3 className='font-M_bold '>

3. How We Use Your Information
</h3>
We use your information to:
<br/>• Respond to your inquiries and project requests.
<br/>• Review submitted materials (brand info, creative files, PR leads).
<br/>• Improve our website functionality and performance.
<br/>• Send updates, insights, or communication if you opt-in to our newsletter.
<br/><br/>
<h3 className='font-M_bold '>
4. How We Share Information
</h3>
We do not sell your data.
<br/>We may share information only with:
<br/>• Internal team members working on your project.
<br/>• Trusted third-party services used for hosting, analytics, or file storage.
All partners are required to protect your data.
<br/><br/>
<h3 className='font-M_bold '>

5. Data Security
</h3>

We apply reasonable technical and organizational measures to safeguard your information. No online transfer is
100% secure, but we work to protect your data to the best of industry standards.
<br/><br/>
<h3 className='font-M_bold '>

6. Your Rights
</h3>

You have the right to:
<br/>• Request access to your personal data.
<br/>• Ask for corrections or deletion.
<br/>• Unsubscribe from all communications at any time.
<br/>For any request, contact us at: hello@advertisingattitude.com
<br/><br/>
<h3 className='font-M_bold '>

7. External Links
</h3>

Our website may contain links to external websites. We are not responsible for their privacy practices.
<br/><br/>
<h3 className='font-M_bold '>

8. Updates to This Policy
</h3>

We may update this Privacy Policy periodically. Changes will be reflected on this page with a new “Last updated”
date.
</div>
        </div>
  )
}

export default PrivacyPolicy