// import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const ContactInfo = () => {
//   return (
//     <section id="contact" className="bg-[#0F172A] text-white py-16 px-6 mt-20">
//         <h1 className="text-center text-3xl font-bold py-5 mb-8 text-green-600 ">Contact Me </h1>
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
//         {/* Left Side */}
//         <div>
//           <h2 className="text-4xl font-bold mb-4">
//             Let's talk about your{" "}
//             <span className="text-green-400">next idea</span>
//           </h2>
//           <p className="text-gray-300 mb-8 leading-relaxed">
//             Whether you have a question, project idea, or want to connect —
//             I'm always open to meaningful conversations.
//           </p>

//           <div className="space-y-6">
//             {/* Location */}
//             <div className="flex items-center gap-4">
//               <div className="bg-green-500 p-3 rounded-full">
//                 <FaMapMarkerAlt size={20} />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400">Location</p>
//                 <p className="font-semibold">Rangpur, Bangladesh</p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-4">
//               <div className="bg-green-500 p-3 rounded-full">
//                 <FaPhoneAlt size={20} />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400">Phone / WhatsApp</p>
//                 <p className="font-semibold">+880 1302-164292</p>
//               </div>
//             </div>

//             {/* Email */}
//             <div className="flex items-center gap-4">
//               <div className="bg-green-500 p-3 rounded-full">
//                 <FaEnvelope size={20} />
//               </div>
//               <div>
//                 <p className="text-sm text-gray-400">Email</p>
//                 <p className="font-semibold">
//                   dipok7316@gmail.com
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Contact Form */}
//         <div className="bg-[#1E293B] p-8 rounded-xl shadow-lg">
//           <h3 className="text-xl font-semibold mb-6">
//             Fill out the form and I'll get back to you as soon as possible.
//           </h3>
//           <form className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 placeholder="First Name"
//                 className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//               <input
//                 type="text"
//                 placeholder="Last Name"
//                 className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
//               />
//             </div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
//             />
//             <textarea
//               placeholder="Message"
//               rows="5"
//               className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
//             ></textarea>
//             <button
//               type="submit"
//               className="w-full py-3 rounded-full bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold hover:opacity-90 transition"
//             >
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactInfo;




import { useState } from 'react';
const ContactInfo = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');
    setErrorMsg('');

    try {
      const res = await fetch('https://contac-server.onrender.com/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to send message');

      const data = await res.json();
      setSuccessMsg(data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setErrorMsg('Oops! Something went wrong. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative min-h-screen text-gray-800 dark:text-white">
      {/* Background Video */}
      

      {/* Overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full  bg-opacity-60 z-10" />

      {/* Content */}
      <div className="relative z-20 p-8">
        <h2 className="text-4xl mb-10 font-bold text-center md:text-left">Contact Me</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-6 text-left">
            <h3 className="text-3xl font-semibold mb-4">Let's Connect</h3>
            <p>
              I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              Feel free to reach out through any of the following channels:
            </p>

            <div className="space-y-3 mt-6">
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-blue-400">dipok7316@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p>‪+8801605342742‬</p>
              </div>
              <div>
                <h4 className="font-semibold">Location</h4>
                <p>Rangpur, Bangladesh</p>
              </div>
              <div>
                <h4 className="font-semibold">Availability</h4>
                <p>Available for Work</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-2">Connect on Social Media</h4>
              <ul className="space-y-1">
                <li>belal-dev-code</li>
                <li>Pandin next day update</li>
              </ul>
            </div>

            <p className="mt-8 italic text-gray-300">
              Quick Response: I typically respond within 6 hours. Looking forward to hearing from you!
            </p>
          </div>

          {/* Right Side - Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              type="submit"
              disabled={loading}
              className={`w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>

            {successMsg && <p className="mt-4 text-green-400">{successMsg}</p>}
            {errorMsg && <p className="mt-4 text-red-400">{errorMsg}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;