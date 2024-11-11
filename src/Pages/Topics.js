import React, { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { useCentralData } from '../Context/CentralData';

function Topics() {
  const topics = [
    "The impact of social media on society",
    "Climate change and its effects",
    "The importance of mental health awareness",
    "The role of technology in education",
    "Benefits and drawbacks of remote work",
    "The future of artificial intelligence",
    "How to achieve work-life balance",
    "The impact of globalization on local cultures",
    "The significance of renewable energy",
    "The role of government in healthcare",
    "The importance of financial literacy",
    "Strategies for effective time management",
    "The benefits of a healthy lifestyle",
    "The influence of pop culture on youth",
    "The challenges of urbanization",
    "The impact of automation on jobs",
    "The role of arts in education",
    "The ethics of genetic engineering",
    "The significance of space exploration",
    "The effects of poverty on education",
    "The importance of cybersecurity",
    "The challenges of balancing personal and professional life",
    "The impact of advertising on consumer behavior",
    "The future of electric vehicles",
    "The role of government in economic development",
    "The benefits of learning a second language",
    "The effects of climate change on agriculture",
    "The importance of critical thinking",
    "The impact of technology on interpersonal relationships",
    "The role of social media in political movements",
    "The benefits and risks of biotechnology",
    "The future of renewable energy sources",
    "The importance of early childhood education",
    "The effects of income inequality on society",
    "The role of sports in personal development",
    "The impact of globalization on business",
    "The benefits of mindfulness and meditation",
    "The challenges of mental health in the workplace",
    "The role of women in leadership positions",
    "The significance of cultural diversity",
    "The impact of fast fashion on the environment",
    "The role of government in environmental conservation",
    "The future of space tourism",
    "The effects of digital media on children",
    "The importance of voting and civic engagement",
    "The benefits of community service",
    "The challenges of climate change adaptation",
    "The role of education in reducing poverty",
    "The impact of automation on the economy",
    "The significance of public health initiatives",
    "The role of technology in disaster management",
    "The future of work and automation",
    "The benefits of a plant-based diet",
    "The challenges of achieving global peace",
    "The impact of cultural heritage on identity",
    "The role of innovation in business growth",
    "The importance of ethical consumerism",
    "The effects of social media on mental health",
    "The future of global trade",
    "The benefits of sustainable agriculture",
    "The role of technology in healthcare innovation",
    "The challenges of cybersecurity in the digital age",
    "The impact of urban planning on quality of life",
    "The significance of digital literacy",
    "The benefits of intergenerational learning",
    "The role of government in protecting natural resources",
    "The future of artificial intelligence in healthcare",
    "The effects of climate change on natural disasters",
    "The importance of arts and culture in society",
    "The challenges of providing quality education for all",
    "The impact of social entrepreneurship",
    "The role of youth in social change",
    "The significance of global health initiatives",
    "The benefits of lifelong learning and professional development",
    "The challenges of achieving gender equality",
    "The impact of automation on job markets",
    "The role of corporate social responsibility",
    "The future of renewable energy technology",
    "The effects of globalization on local economies",
    "The importance of mental health support in schools",
    "The benefits of collaborative work environments",
    "The challenges of international relations and diplomacy",
    "The impact of artificial intelligence on daily life",
    "The role of public transportation in sustainable cities",
    "The significance of digital transformation in business",
    "The benefits of environmental education",
    "The challenges of addressing homelessness",
    "The impact of technology on education accessibility",
    "The role of innovation in solving global challenges",
    "The importance of protecting intellectual property",
    "The future of human-computer interaction",
    "The effects of digital divide on education",
    "The benefits of community-based health initiatives",
    "The challenges of cybersecurity in personal privacy",
    "The impact of technology on job creation",
    "The role of ethics in scientific research",
    "The significance of preserving endangered species",
    "The benefits of healthy workplace culture",
    "The challenges of combating climate change",
    "The impact of technology on privacy and security",
    "The role of government in disaster response",
    "The future of sustainable urban development",
    "The effects of social media on public opinion",
    "The importance of digital skills in the workforce",
    "The benefits of early intervention in education",
    "The challenges of providing affordable healthcare",
    "The impact of artificial intelligence on job displacement",
    "The role of science and technology in advancing healthcare",
    "The significance of fostering innovation in education",
    "The benefits of interdisciplinary approaches in research",
    "The challenges of achieving universal internet access",
    "The impact of social media on political engagement",
    "The role of technology in enhancing personal safety",
    "The future of work in a post-pandemic world",
    "The effects of technology on interpersonal communication",
    "The importance of diversity in the workplace",
    "The benefits of data-driven decision making",
    "The challenges of integrating technology in education",
    "The impact of environmental policies on businesses",
    "The role of ethical leadership in organizations"
  ];

  
  const { topic, settopic } = useCentralData();
  function generatetopic() {
    const randomIndex = Math.floor(Math.random() * topics.length);
    settopic(topics[randomIndex]);
    toast.success("Random Topic Generated!", { position: "top-right" });
  }

 
  useEffect(() => {
    generatetopic()
  }, []);

  return (
    <div className='flex flex-col items-center justify-center '>
      <div className='flex flex-col items-center justify-center m-5'>
        <p className='m-4 bg-slate-900 text-xl rounded-sm bg-opacity-15 p-2 ] border-2'>{topic}</p>
        <button onClick={generatetopic} className="w-25px bg-blue-600 text-white p-2 rounded mt-4">Generate Ramdom Topic</button>
      </div>


      <div className="flex flex-wrap gap-4 items-center justify-center">
        {topics.map((item, index) => (
          <div
          onClick={()=>{
            settopic(item);
         
            toast.success("Topic selected!", { position: "top-right" })
          }}
            key={index}
            className="bg-white w-60 h-40 p-4 shadow-lg rounded-lg flex items-center justify-center hover:bg-slate-400 hover:border-white border-2 hover:scale-110 duration-200"
          >
            <h2 className="text-xl font-semibold text-center text-gray-800">{item}</h2>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Topics
