import React from 'react'
import bannerImage1 from "../IMAGES_&_LOGOS/banner_shape02.png"
import bannerImage2 from "../IMAGES_&_LOGOS/banner_shape01.png"
import rightImage from "../IMAGES_&_LOGOS/right-image.png"
import videos from "../IMAGES_&_LOGOS/video1.mp4"
import star from '../IMAGES_&_LOGOS/star.png'
import heroimage from "../IMAGES_&_LOGOS/contactus.jpg"
import Goalimage from "../IMAGES_&_LOGOS/Goalbg.jpg"
import { Typewriter } from 'react-simple-typewriter';
import { useCentralData } from '../Context/CentralData'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const { isLoggedIn } = useCentralData();
  return (
    <div className=' h-full w-full overflow-hidden'>

      {/* 1st div */}
      <div className=' w-screen h-[630px] bg-blue-950 flex '>

        {/* left div */}
        <div className='w-[40%] h-full ml-20 mt-20 gap-4' >
          <h1 className=' text-white text-5xl font-bold leading-snug'>Unlock Your <span className='text-blue-600 '>Potential</span> with a World of Learning...</h1>



          <div className="flex gap-x-4 m-8 font-bold">
            <div className="text-3xl text-white">
              Learn English with{' '}
              <span className="text-blue-500 inline-block min-w-[200px]"> {/* Add inline-block and min-width */}
                <Typewriter
                  words={['Consistency.', 'VocalEase.']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={150}
                  deleteSpeed={150}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <img src={bannerImage1} alt="Banner" className="ml-96 size-12" />
          </div>









          <div>
            <p className='text-white text-[20px]'>Elevate your language skills with engaging courses tailored to your goals. Master fluency, overcome challenges, and open doors to global opportunities. Achieve Success with VocalEase!</p>

            <img
              src={bannerImage2}
              className=" animate-moveUpDown ml-5 mt-5 size-24"
            />
          </div>
        </div>

        {/* right div */}
        <div>

          <img src={rightImage} className='h-full w-full' />

        </div>

      </div>





      {/* second div */}
      <div className='w-full h-[500px] bg-white flex '>

        {/* left div */}
        <div className='w-[45%] flex items-center justify-center p-5 m-10 border-2 rounded-md border-slate-200 relative'>

          <video
            className='w-full h-full object-cover rounded-md'
            src={videos}
            autoPlay
            muted
            loop
            playsInline
          >
            Your browser does not support the video tag.
          </video>


        </div>


        {/* right div */}
        <div className=' w-1/2 flex flex-col  p-5 '>
          <div className='flex items-center'>
            <div className='m-7'>
              <p className='px-3 py-1 bg-blue-100 max-w-fit rounded-md text-blue-500 font-semibold'>
                About Us
              </p>
            </div>
            <img src={star} className=' animate-rotate size-18 ' alt='Rotating Star' />
          </div>


          {/* <img src={star} className=' size-20'/> */}
          <h1 className='font-bold text-4xl '>Why Choose <span className='text-blue-500 underline'>Us</span></h1>

          <p className='mt-5 leading-relaxed'>Welcome to <span className='font-bold'> VocalEase</span> – where language learning meets innovation! We are passionate about helping individuals master English through consistent practice and engaging resources. Whether you’re a beginner or looking to refine your fluency, VocalEase is here to guide you every step of the way.

            <span className='font-bold'> At VocalEase</span>, we understand the challenges of learning a new language. That’s why we offer a personalized, results-driven approach with expertly designed courses, interactive exercises, and real-world conversational practice. Our platform bridges the gap between theory and application, ensuring you not only learn English but also use it confidently in everyday life.

            <span className='font-bold'> VocalEase</span> equips you with everything you need to communicate effectively and achieve success.
            <br />
            <span className='font-bold'> Our Mission</span>
            <br />
            Our mission is simple: to create a supportive community where learners can thrive, improve, and unlock their full potential. We’re committed to making language learning accessible, enjoyable, and transformative for everyone, no matter their background.</p>

        </div>

      </div>





      {/* final div */}
      <div>
        {/* Third Div: Our Goal Section */}
        <div className="h-[600px] text-white" style={{
          backgroundImage: `url(${Goalimage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}>


          <div className="flex flex-col items-center">
            <img
              src="/path/to/your/avatar.png"
              alt="Avatar"
              className="w-24 h-24 rounded-full shadow-lg mb-4"
            />
            <h2 className="text-4xl font-bold mb-4">Our Goal</h2>
            <p className="text-lg leading-relaxed max-w-2xl">
              At <span className="font-semibold">VocalEase</span>, we aim to
              revolutionize your English learning journey with innovative and
              consistent learning strategies. Our platform simplifies language
              learning, offering you practical exercises, engaging content, and
              personalized support. Together, we'll make fluency achievable!
            </p>
          </div>
          <div className="mt-6">
            <div className="flex items-center justify-center space-x-4">
              <p className="text-gray-300">Profession: Language Coach</p>
              <div className="border-l-2 border-gray-400 h-6"></div>
              <p className="text-gray-300">100+ Topics</p>
              <div className="border-l-2 border-gray-400 h-6"></div>
              <p className="text-gray-300">
                <span className="font-bold text-yellow-400">4.9</span> (10+ reviews)
              </p>
            </div>
          </div>

        </div>

        {/* Hero Image Div: Welcome Section */}
        <div
          className="h-screen bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${heroimage})`,
          }}
        >
          <div className="flex items-center justify-center h-full bg-blue-900 bg-opacity-70">

            <div className="relative z-10 text-center p-8 rounded-md">
              <p className="text-white text-sm uppercase tracking-wider mb-4">
                Are you ready for a great journey?
              </p>
              <h1 className="text-white text-4xl font-bold mb-6">
                Transform Your English Skills with VocalEase!
              </h1>
              <button onClick={() => { isLoggedIn ? navigate("/practice") : navigate("/login") }} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded">
                Get Started
              </button>
            </div>

          </div>
        </div>
      </div>



    </div>
  )
}

export default Home
