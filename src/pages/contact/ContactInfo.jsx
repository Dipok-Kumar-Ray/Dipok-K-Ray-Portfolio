import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/send-email`, {
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
    <section id="contact" className="bg-[#0F172A] text-white py-16 px-6">
        <h1 className="text-center text-3xl font-bold py-5 mb-8 text-green-600 ">Contact Me </h1>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Let's talk about your{" "}
            <span className="text-green-400">next idea</span>
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Whether you have a question, project idea, or want to connect —
            I'm always open to meaningful conversations.
          </p>

          <div className="space-y-6">
            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-full">
                <FaMapMarkerAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold">Rangpur, Bangladesh</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-full">
                <FaPhoneAlt size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Phone / WhatsApp</p>
                <p className="font-semibold">+880 1302-164292</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-green-500 p-3 rounded-full">
                <FaEnvelope size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-semibold">
                  dipok7316@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#1E293B] p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6">
            Fill out the form and I'll get back to you as soon as possible.
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                 value={formData.name}
               onChange={handleChange}
                className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
       
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
               value={formData.email}
               onChange={handleChange}
              className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              placeholder="Message"
              name="message"
               value={formData.message}
               onChange={handleChange}
              rows="5"
              className="w-full p-3 rounded-lg bg-[#0F172A] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
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
