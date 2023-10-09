import {Link} from "react-router-dom"

export default function Banner() {
  return (
<div className="hero min-h-[450px]" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1583336663277-620dc1996580?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Pets Ramp Show</h1>
      <p className="mb-5">Welcome to the exciting world of Pets ramps! If you're a pet owner, you probably understand the importance</p>
      <Link to="/viewDetails/1"><button className="btn btn-neutral">view Deatils</button></Link>
    </div>
  </div>
</div>
  )
}
