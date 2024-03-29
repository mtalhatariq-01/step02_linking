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
            <h1>
                This is the Contact Page
            </h1>   
        </div>
        <br/>
        <button onClick={handleClick}>
            <h2>
            Click Here! to go Home Page
            </h2>
        </button>
    </>
 )    
}
export default Contact;

