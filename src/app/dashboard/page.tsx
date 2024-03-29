import Image from 'next/image' 
import Link from 'next/link'
function Dashboard() {
  return (
  <>
    <div>
      <h1>This is a dashboard page</h1>
      </div>
    <br/>
    <Link href='/'>
    Go to Home page, Click Here!
    </Link> 
    </>
  )
}

export default Dashboard;

