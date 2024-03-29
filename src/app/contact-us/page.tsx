"use client";
import { log } from 'console';
import link from 'next/link'
import { useRouter } from 'next/navigation'
function Contact() {
    const router = useRouter()
    const handleClick =()=>{
        console.log('Home Page');
        router.push('/')
    }
    return(
    <>
        <div>
            <h1>Contact Page</h1>
            <p>This is the contact page</p>
        </div>
        <br/>
        <button onClick={handleClick}>
            Go to Home page, click Here!
        </button>
        </>
    )    
}
export default Contact;

