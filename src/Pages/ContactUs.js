import React, { useState } from 'react';
import image from "../IMAGES_&_LOGOS/contactus.jpg";
import { Link, NavLink } from 'react-router-dom';
import { FaUser, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com'; // Import EmailJS

function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        'VocalEase_1043',  // Replace with your service ID
        'template_v476tkn',  // Replace with your template ID
        templateParams,
        '6JLvkX9mf4mDkDBx2'      // Replace with your user ID
      )
      .then(
        (response) => {
          console.log('Message sent successfully', response);
          setStatus('Message sent successfully!');
          setName('');
          setEmail('');
          setPhone('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.error('Error sending message', error);
          setStatus('Error sending message. Please try again later.');
        }
      )
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div
        className="h-[350px] w-full text-white flex flex-col justify-center"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <h1 className="text-4xl font-bold ml-20">Contact Us</h1>
        <div className="flex">
          <NavLink to="/" className="font-bold ml-20 mt-5 text-xl hover:text-blue-400">
            Home
          </NavLink>
          <p className="font-bold ml-3 mt-5 text-xl">&gt; Contact</p>
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row mt-9 mx-20 mb-20 gap-x-20">
        <div className="w-full md:w-1/3">
          <h1 className="text-3xl font-semibold">Get In Touch With Us</h1>
          <div className="w-7 border-t-4 border-blue-700 rounded-md mt-3 mb-3"></div>
          <p>
            We are very glad to have you here with us. Please contact us through
            the following contact details for issues, enquiries, and any other
            agenda you wish to let us know.
          </p>
          <div className="flex flex-col gap-5 mt-5">
            <div className="flex items-center">
              <FaUser size={40} color="white" className="bg-blue-500 p-2 rounded-full" />
              <p className="ml-3">Gopal Gour</p>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt size={40} color="white" className="bg-blue-500 p-2 rounded-full" />
              <p className="ml-3">Bhopal, Madhya Pradesh, 462022</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt size={40} color="white" className="bg-blue-500 p-2 rounded-full" />
              <p className="ml-3">+91-8103740273</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope size={40} color="white" className="bg-blue-500 p-2 rounded-full" />
              <Link
                className="ml-3"
                to="mailto:gopalgour198@gmail.com"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                gopalgour198@gmail.com
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 bg-slate-100 p-5 border-2 rounded-md">
          <h1 className="text-3xl font-semibold">Send us a message</h1>
          <div className="w-7 border-t-4 border-blue-700 rounded-md mt-3 mb-3"></div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1">E-mail *</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input
                  type="tel"
                  placeholder="Enter mobile number"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-sm font-medium mb-1">Your Subject *</label>
                <input
                  type="text"
                  placeholder="Enter subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                placeholder="Enter your query"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-28"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
              disabled={sending}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          {status && (
            <div className="mt-4 text-center text-lg font-semibold">
              {status}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
