import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [init, setInit] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const result = await emailjs.send(
        // "service_l3x3av4", 
        // "template_2jpygwn", 
        // formData,
        // "5kuYCmxA4PaI2QFt4" 
        "service_hajc4wn", 
        "template_y3tyqpq", 
        formData,
        "r3p7NL-T5QFcUdJy2" 
      );
      console.log(result); // Debugging line
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.log(error); // Debugging line
      setStatus("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div className="absolute particles-container inset-0">
        {init && (
          <Particles
            id="tsparticles"
            className="h-[1000px]"
            particlesLoaded={particlesLoaded}
            options={{
              fullScreen: { enable: false },
              background: {
                color: { value: "#0d47a1" },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  push: { quantity: 4 },
                  repulse: { distance: 200, duration: 0.4 },
                },
              },
              particles: {
                color: { value: "#ffffff" },
                links: {
                  color: "#ffffff",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: { default: "bounce" },
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: { enable: true, area: 800 },
                  value: 80,
                },
                opacity: { value: 0.5 },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 5 } },
              },
              detectRetina: true,
            }}
          />
        )}
      </div>

      {/* Form Container */}
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-lg w-full z-10">
        {/* Form Content */}
        <h2 className="text-3xl font-bold text-center mb-6">Get In Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="w-1/2 p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            placeholder="Subject"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Message"
            rows="4"
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
        {status && (
          <div
            className={`mt-4 text-center ${
              status.includes("success") ? "text-green-500" : "text-red-500"
            }`}
          >
            {status}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
