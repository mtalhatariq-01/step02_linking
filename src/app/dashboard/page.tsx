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
      <h2>
       Click Here! to go Home Page
      </h2>
    </Link> 
    </>
  )
}

export default Dashboard;

