import { useState } from 'react';
import Nav from './Nav';
import axios from 'axios'

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    const fName = (e) => {
        setFirstName(e.target.value);
    };
    const lName = (e) => {
        setLastName(e.target.value);
    };
    const eMail = (e) => {
        setEmail(e.target.value);
    };
    const message = (e) => {
        setMsg(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        
        axios({
            method: "POST",
            url:"http://localhost:3002//send",
            data:  JSON.stringify({
                email: email,
                name: firstName + " " + lastName,
                message: msg
            })
          }).then((response)=>{
            if (response.data.status === 'success') {
              alert("Message Sent.");
              setFirstName("");
              setLastName("");
              setEmail("");
              setMsg("");
            } else if(response.data.status === 'fail') {
              alert("Message failed to send.")
            }
          })
    };

    return (
        <>
        <div className='flex h-screen w-screen bg-gradient-to-b from-[#1380CD] to-[#BFDCEA] items-center justify-center'>
            <div className='flex flex-col justify-center bg-white h-180 w-360 rounded-3xl border-1 drop-shadow-2xl'>
            <Nav />
                <div className="grid grid-cols-2 gap-4 mx-20 mt-20">
                <div className="mt-10">
                    <h1 className='abt text-8xl text-center'>Contact
                    <span className='me text-center'>Me</span>
                    </h1>
                    <p className='tag mt-10 ml-30'>Are you a company or brand wanting to collaborate <br />
                    on a web project or hire an intern/new grad? Please, <br />
                    reach out via the form or contact me at aryianjones03@gmail.com
                    </p>
                    <div className='flex flex-col ml-30 mt-10'>
                        <button type='button' className='border-1 rounded-3xl w-100 mb-3'><a href='https://www.linkedin.com/in/aryianjones/'>LinkedIn</a></button>
                        <button type='button' className='border-1 rounded-3xl w-100 mb-3'><a href='https://app.joinhandshake.com/profiles/nerzkk'>Handshake</a></button>
                        <button type='button' className='border-1 rounded-3xl w-100 mb-3'><a href='/Aryian-Jones-Resume-2025.pdf'>Resume</a></button>
                    </div>
                </div>
                <div className="...">
                    <form method='POST' onSubmit={onSubmit}>
                        <div className="grid grid-cols-2 gap-4 mx-20 mt-10">
                            <label>
                                First Name
                                <input type='text' className='border-1 rounded-2xl h-10' id='firstName' onChange={fName} required></input>
                            </label>
                            <label>
                                Last Name
                                <input type='text' className='border-1 rounded-2xl h-10' id='lastName' onChange={lName} required></input>
                            </label>
                        </div>
                        <div className='mx-20 mt-5'>
                            <label>
                                Email <br />
                                <input type='email' className='border-1 rounded-2xl w-110 h-12' id='email' onChange={eMail} required></input>
                            </label>
                        </div>
                        <div className='mx-20 mt-5'>
                            <label>
                                Message <br />
                                <textarea className='border-1 rounded-2xl w-110 h-50' id='message' onChange={message} required></textarea>
                            </label>
                        </div>
                        <div className='mx-65 mt-5'>
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
