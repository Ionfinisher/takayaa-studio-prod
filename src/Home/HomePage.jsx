import React from 'react';
import { Link } from 'react-router-dom';
import { CircleArrowOutDownRight, Download, PartyPopper, Instagram } from 'lucide-react';
import takayaa from "../../public/assets/takayaa-logo.png"
import { InputForm as EmailForm } from '../components/InputForm';
import Footer  from '../components/Footer.jsx';
import { Separator } from "~/components/ui/separator"

const images = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png', '7.png', '8.png', '9.png', '10.png', '11.png', '12.png', '13.png', '14.png', '15.png', '16.png', '17.png', '18.png', '19.png', '20.png', '21.png', '22.png', '23.png']

const HomePage = () => {
  return (
    <>
      {/* Hero section */}
      <div id="home" className="w-full px-4 md:px-8 py-12 text-black bg-cover bg-center bg-[url('/assets/images/TAKAYAA-BACKGROUND.webp')]">

        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex flex-col m-3 gap-1 montserrat-md">
            <div className="text-2xl md:text-4xl text-center">
              <img src={takayaa}  alt="logo" className="mx-auto w-64 h-24 md:w-full md:h-40"/>
              <div className='my-2'>L'AGENCE CRÉATIVE DIGITALE</div>
              <div className='mt-2'>COMME JAMAIS AU PARAVANT</div>
            </div>
            
            <div className="text-sm md:text-lg text-center my-3">
              <div>Découvrez comment nous pouvons vous aider</div>
              <div>à faire la difference.</div>
            </div>
          </div> 
          <div className="md:my-2">
            <Link to={"https://forms.gle/QwjYdgynRiwuLf3r5"} target='_blank' className='border border-black hover:bg-black hover:text-white transition-all duration-300 ease-in-out text-2xl montserrat-2xl text-black py-4 px-10 rounded-full flex gap-2 items-center'>
              {`CONTACTEZ NOUS`}
            </Link>
          </div> 
        </div>
      </div>
      {/* Hero section */}


      {/* About us section */}
      <div id='aboutus' className="container mx-auto px-4 md:px-8 py-24">
        <div className="border border-black montserrat-md text-black py-2 px-5 rounded-full w-36 flex gap-2 items-center justify-center mb-16">
          <CircleArrowOutDownRight size={13} strokeWidth={2} />
          A propos
        </div>
        <div className="montserrat-md text-base md:text-xl 
        flex flex-col my-5 gap-5">
          <div className="text-2xl md:text-4xl flex flex-col md:flex-row md:items-end gap-5">
            Bienvenue chez Takayaa Studio
            <PartyPopper size={45} strokeWidth={1} className="animate-shake"/>
          </div>
          <p>Nous avons pour mission de propulser la visibilité et l'engagement en ligne des marques féminines et des Organisations de la Société Civile en Afrique. Notre vision est de créer un écosystème digital où chaque voix peut se faire entendre et chaque projet peut prospérer grâce à des solutions de marketing et de design innovantes.</p>
          <p>Nos valeurs fondamentales reposent sur la créativité, l'innovation, et l'impact social. Nous croyons au pouvoir du design et du marketing pour transformer des idées en réalités tangibles et des initiatives en succès durables. Avec une équipe passionnée et dévouée, Takayaa Studio s'engage à fournir des services sur mesure qui reflètent l'unicité de chaque client tout en répondant aux défis spécifiques de notre époque.</p>
        </div>
      </div>
      {/* About us section */}

      <Separator/>

      {/* Expertise section */}
      <div id="ourexpertise" className='w-full py-24 bg-[#484647bb]'>
        <div className="container mx-auto px-4 md:px-8">
          <div className="border border-white montserrat-md text-white py-2 px-5 rounded-full max-w-48 flex gap-2 items-center justify-center mb-16">
            <CircleArrowOutDownRight size={13} strokeWidth={2} />
            Notre expertise
          </div>

          <div className="flex my-5 text-white">
            <div className="basis-1/2 flex flex-col justify-start md:justify-center items-start gap-8 md:gap-12">
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">01.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Design Graphique</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">02.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Conception de site Web</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">03.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Audit & Stratégie</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">04.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Formation</p>
              </div>
              
            </div>

            <div className="basis-1/2 flex flex-col justify-start md:justify-center items-start gap-8 md:gap-12">
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">05.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Marketing de Contenus</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">06.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Création de Contenus</p>
              </div>
              <div className="flex justify-center items-center gap-4">
                <p className="montserrat-md text-xs md:text-base text-gray-200">07.</p>
                <p className='montserrat-md text-xl md:text-3xl lg:text-4xl'>Vente de Modèles Graphiques</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
      {/* Expertise section */}

      {/* They trust us section */}
      <div className="container mx-auto px-4 md:px-8 py-24">
        <div className="flex flex-col items-center justify-center gap-8">
        <div className="border border-black montserrat-md text-black py-2 px-5 rounded-full max-w-54 flex gap-2 items-center justify-center mb-16">
          <CircleArrowOutDownRight size={13} strokeWidth={2} />
            Ils nous ont fait confiance
          </div>
          <div className="flex flex-row justify-evenly w-full flex-wrap gap-3">
            {images.map((image, index) => (
              <div key={index} className="w-28 h-28 md:w-52 md:h-48">
                <img src={`assets/trusted-logos/${image}`} alt="Parteners-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* They trust us section */}

      {/* Testimonials section */}
      {/* Testimonials section */}

      {/* Download resources section */}
      {/* <div id="freeresources" className="w-full py-24 bg-[#484647bb]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center justify-evenly">
            <h1 className="text-white montserrat-md text-3xl lg:text-4xl text-center md:basis-2/3">You're getting a free copy of our resource on something</h1>
            <div className='flex flex-col gap-8'>
              <EmailForm/>
              <Link to={"/"} className='border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-xl md:text-2xl montserrat-2xl text-white py-4 px-10 rounded-full flex gap-2 items-center'>
                <Download size={20} strokeWidth={2} className="animate-bounce"/>
                Get free resource
              </Link>
            </div>
            
          </div>
        </div>
      </div> */}
      {/* Download resources section */}

      {/* Contact section */}
      <div id="contact" className="w-full py-24 bg-[#484647bb]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col gap-12 items-center justify-evenly md:justify-center">
            <h1 className="text-white montserrat-md text-3xl lg:text-4xl text-center">
              Découvrez comment nous pouvons transformer vos idées en réalités tangibles et durables. Contactez-nous dès aujourd'hui !
            </h1>
            <Link to={"https://forms.gle/QwjYdgynRiwuLf3r5"} target='_blank' className='border border-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out text-2xl montserrat-2xl text-white py-4 px-10 rounded-full flex gap-2 items-center'>
                {`CONTACTEZ NOUS`}
            </Link>
          </div>
        </div>
      </div>
      {/* Contact section */}

      {/* Our social media section and footer*/}
      <div id="footer" className="w-full bg-cover bg-center pt-24 pb-10 bg-[url('/assets/images/TAKAYAA-BACKGROUND.webp')] montserrat-sm">
        <div>
          <div className="container mx-auto px-4 md:px-8">
            {/* our social section */}
            <div className="flex flex-col md:flex-row gap-12 items-center justify-center">
              {/* Instagram part */}
              <Link to={"https://www.instagram.com/takayaastudio?igsh=MTFvd3ViZm1tNXM3Ng=="} target='_blank' className='md:basis-1/3 backdrop-blur-sm shadow-lg rounded-xl p-8'>
                <div className="flex flex-col justify-center items-center gap-5 montserrat-md">
                  {/* Calling instagram logo */}
                  <span className="relative flex h-20 w-20">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-20 w-20 bg-pink-600 justify-center items-center">
                      <Instagram size={30} strokeWidth={2} className='text-white'/>
                    </span>
                  </span>
                  {/* @ part */}
                  <p className="text-black ">@takayaastudio</p>
                </div>
              </Link>

              {/* text part */}
              <div className='md:basis-2/3 text-center montserrat-md text-base md:text-xl'>
                En choisissant Takayaa Studio, vous optez pour une expertise complète et un engagement sincère envers la réussite de vos projets. Ensemble, faisons briller votre marque et amplifions votre impact social. Rejoignez-nous !
              </div>
            </div>
            {/* our social section */}

            <Separator className="my-8 bg-gray-300"/>

            {/* footer section */}
            <Footer/>
            {/* footer section */}
          </div>
          {/* end of footer and socials */}
        </div>
      </div>
      {/* Our social media section and footer*/}

    </>
  );
};

export default HomePage;
