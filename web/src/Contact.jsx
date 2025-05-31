import Nav from './Nav';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

function Contact() {
    const formRef = useRef(null);
    const onSubmit = (e) => {
        e.preventDefault();
        
        emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          formRef.current,
          import.meta.env.VITE_PUBLIC_KEY
        )
        .then((response) => {
            console.log("Email sent successfully!", response);
        })
        .catch((error) => {
            console.error("Email failed to send", error);
        });
        
        e.target.reset();
      };

    return (
        <>
            <div className='sm:flex h-screen w-screen sm:bg-gradient-to-b sm:from-[#1380CD] sm:to-[#BFDCEA] sm:items-center sm:justify-center'>
                <div className='flex flex-col sm:bg-white sm:h-180 sm:w-360 sm:rounded-3xl sm:border-1 sm:drop-shadow-2xl'>
                    <Nav />
                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:mx-20 sm:mt-20">
                        <div>
                            <h1 className='abt sm:text-7xl text-6xl text-center'>Contact
                                <span className='me text-center'>Me</span>
                            </h1>
                            <p className='tag mt-2 sm:mx-0 mx-4 text-center'>Are you a company or brand wanting to collaborate <br />
                            on a web project or hire an intern/new grad? Please, <br />
                            reach out here or email aryianjones03@gmail.com
                            </p>
                            <div className='flex flex-col sm:ml-30 mt-6 sm:mx-0 mx-4'>
                                <button type='button' className='border-1 rounded-3xl sm:w-100 mb-3'><a href='https://www.linkedin.com/in/aryianjones/'>LinkedIn</a></button>
                                <button type='button' className='border-1 rounded-3xl sm:w-100 mb-3'><a href='https://app.joinhandshake.com/profiles/nerzkk'>Handshake</a></button>
                                <button type='button' className='border-1 rounded-3xl sm:w-100 mb-3'><a href='/Aryian-Jones-Resume-2025.pdf'>Resume</a></button>
                            </div>
                        </div>
                    <div>
                        
                        <form ref={formRef} method="POST" className='sm:w-xl sm:mx-20 mx-4' onSubmit={onSubmit}>
                            <div className='my-4'>
                                <label>
                                    Name <br />
                                    <input type='text' className='border-1 rounded-2xl sm:w-full w-72 p-2' name="name" placeholder='Jane Doe' required></input>
                                </label>
                            </div>
                            <div className='my-4'>
                                <label>
                                    Email <br />
                                    <input type='email' className='border-1 rounded-2xl  sm:w-full w-72 p-2' name="email" placeholder='jane@email.com' required></input>
                                </label>
                            </div>
                            <div className='my-4'>
                                <label>
                                    Title <br />
                                    <input type='text' className='border-1 rounded-2xl sm:w-full w-72 p-2' name="title" placeholder='Reaching out for a project...' required></input>
                                </label>
                            </div>
                            <div className='my-4'>
                                <label>
                                    Message <br />
                                    <textarea className='border-1 rounded-2xl  sm:w-full w-72 h-40 p-2' name="message" placeholder='Hey, can you create a website...' required></textarea>
                                </label>
                            </div>
                            <div className='flex justify-center my-4'>
                                <button type='submit' className='border-1 rounded-3xl p-2'>Submit!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact;
