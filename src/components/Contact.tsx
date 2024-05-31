import { useState } from "react";
import Button from "./utils/Button";


export default function Contact() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    return (
        <section className="section" id="Contact-Me">
            <h1 className="section-heading">Contact</h1>
            <div className="pt-16 flex justify-center items-center">
                <form className="flex-1 flex flex-col gap-5 justify-center items-center">
                    <div className="flex  gap-2 justify-center items-center">
                        {/* <label htmlFor="name">Name</label> */}
                        <input type="text" id="name" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} className="input" required />
                    </div>
                    <div className="flex  gap-2">
                        {/* <label htmlFor="email">Email</label> */}
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email Address" className="input" required />
                    </div>
                    <div className="flex  gap-2">
                        {/* <label htmlFor="message">Message</label> */}
                        <textarea id="message" placeholder="Enter Your Message" value={message} onChange={(e) => setMessage(e.target.value)} className="input" required></textarea>
                    </div>
                    <Button>Send Message</Button>
                </form>
            </div>
        </section>
    )
}
