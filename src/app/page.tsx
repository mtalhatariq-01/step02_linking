import Image from 'next/image'
import Link from 'next/link'
 function Home() {
  return (
  <>
  <div>
    <h1>This is a home page</h1>
    </div>
  <br/>
    <Link href="/dashboard">
      Go to Dashboard, Click here!
    </Link>
    <br/>
    <Link href="/contact-us">Go to Contact page, Click here!
    </Link>
    </>
  )
}
export default Home;


