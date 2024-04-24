"use client"
import { useRouter } from 'next/navigation'
import './header.css'

const Header = () => {
  const router = useRouter()


  return (
    <header id="banner">
        <header>
            <img src="" alt="name" />
            <nav>
                <a href="/">Home</a>
                <a href="#about">About</a>
                <a href="#project">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
        <section aria-labelledby="hero_title">
          <h1 id="hero_title">Chimaobi Chinaka</h1>
          <hr className='hr'/>
          <p>
            Welcome to my corner of the internet! I'm just a guy who spends time with his PC, building for the web.
            Whether you're a fellow enthusiast or just curious about what's brewing in the digital realm, 
            you're in for a treat. So, sit back, relax, and let's embark on a journey where imagination knows no bounds.
          </p>
          <div className="btn_wrap">
            <button onClick={()=> router.push('#project')}>projects</button>
            <button onClick={()=> router.push('#contact')}>contact</button>
          </div>
        </section>
    </header>
  )
}

export default Header