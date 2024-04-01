import { Link } from "react-router-dom"

const NoContent = () => {
  return (
    <section>
        <div className="container nocontent_container">
            <h2>Page Not Found</h2>
            <Link to='/' className='btn'>Go Back Home</Link>
        </div>
    </section>
  )
}

export default NoContent