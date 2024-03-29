import Image from 'next/image'
import Link from 'next/link'
 function Home() {
  return (
  <>
   <div>
     <h1>
       This is a home page
      </h1>
    </div>
   <br/>
     <Link href="/dashboard">
       <h2>
         Click Here! to go Dashboard Page
       </h2>
     </Link>
     <br/>
     <Link href="/contact-us">
        <h2>
          Click Here! to go Contact Page
       </h2>
     </Link>
     <br/>
      <h3>
        Muhammad Talha Tariq
     </h3>
    </>
  )
}
export default Home;


