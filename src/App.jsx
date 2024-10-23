import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Expensess from './Components/Expensess/Expensess'
import Category from './Components/Category/Category'
import MetodoDePago from './Components/MetodoDePago/MetodoDePago'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap-icons/font/bootstrap-icons.css"

const App =() => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
       <Navbar/>  
       <Hero/>
       <div className="container">
        <Title subTitle='Necesidades' title='Te Ofrecemos'/>
       <Programs/>
       <About setPlayState={setPlayState}/>
       <Title subTitle='Acerca de' title='Financia lo que sueñas,quieres y necesitas'/>
       <Campus/>
       <Title subTitle='Testimonios' title='Seguros y Ahorro Decisiones que nos cambian la vida'/>
       <Testimonials/>
       <Contact>
       <Title subTitle='Registro' title='Formulario para registrarse'/>
       </Contact>
       <Expensess>
       <Title subTitle='Gastos' title='Formulario para gastos'/>
       </Expensess>
       <Category>
       <Title subTitle='Categorias' title='Formulario para categorias'/>
       </Category>
       <MetodoDePago>
       <Title subTitle='Metodos de Pago' title='Formulario para metodos de pago'/>
       </MetodoDePago>
       

       <Footer/>
    </div>
    <VideoPlayer playState={playState}setPlayState={setPlayState}/>
    </div>
  )
}

export default App
