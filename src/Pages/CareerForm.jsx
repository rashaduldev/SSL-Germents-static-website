import { useState } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../components/Navber/Nav";
import SecondNavImg from "../components/SecondNavImg";
import career from '../assets/image/Career.jpeg';

const CareerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    file: null,
    fileName: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);
  const [fileSizeError, setFileSizeError] = useState(""); // Handle file size error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      if (file.size > 50 * 1024) { // 50KB limit
        setFileSizeError("File size exceeds 50KB. Please upload a smaller file.");
        return;
      } else {
        setFileSizeError(""); // Clear error if within limit
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          file: reader.result, // Store Base64 file data
          fileName: file.name, // Store file name
        }));
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.file) {
      setStatus("Please upload your resume.");
      setIsSubmitting(false);
      return;
    }

    const emailData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      position: formData.position,
      coverLetter: formData.coverLetter,
      attachment: formData.file, // Base64 file data
      attachment_filename: formData.fileName, // File name
    };

    console.log(emailData)
    try {
      const result = await emailjs.send(
        "service_6h4iabq", // Your EmailJS service ID
        "template_jst34ar", // Your EmailJS template ID
        emailData,
        "ViYdRRJ_BZH8MBfrT" // Your EmailJS public key
      );

      console.log(result);
      setStatus("✅ Application sent successfully!");
      setFormData({ name: "", email: "", phone: "", position: "", coverLetter: "", file: null, fileName: "" });
    } catch (error) {
      console.error(error);
      setStatus("❌ Error sending application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Nav isVisible={true} />
      <SecondNavImg text="Career" img={career} />
      <div className="flex flex-col items-center min-h-screen bg-white">
        <div className="max-w-6xl mt-20 text-3xl">
          <p className="text-gray-700 mb-4 text-2xl">
            <span className="font-bold logo-color">STYLORIUM SOURCING LTD.</span> It has been in the buying house business since 2020. SSL has been recognized internationally as one of the safest and best companies to work for.
          </p>
          <ul className="text-gray-700 text-left text-2xl mb-6">
            <li>• A positive work environment will help you accomplish your goals and find happiness in your career.</li>
            <li>• We believe in a work-life balance.</li>
            <li>• Excellent growth and advancement opportunities.</li>
            <li>• 5 days’ work week.</li>
          </ul>
        </div>

        <div className="bg-white p-6 w-full max-w-3xl">
          <h2 className="text-2xl font-bold text-center mb-4">Upload Resume</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Full name" className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400" required />
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Email" className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400" required />
            <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone" className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400" required />
            <input type="text" name="position" value={formData.position} onChange={handleInputChange} placeholder="Which position are you applying for?" className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400" required />
            <textarea name="coverLetter" value={formData.coverLetter} onChange={handleInputChange} placeholder="Cover letter" rows="4" className="w-full border border-orange-300 bg-orange-100 text-black rounded-md px-4 py-2 text-sm placeholder-black focus:outline-none focus:ring-2 focus:ring-orange-400"></textarea>
            
            <div className="flex flex-col">
              <input type="file" onChange={handleFileChange} className="block w-full text-sm text-gray-500 file:mr-2 file:py-2 file:px-4 file:border-0 file:rounded-md file:bg-orange-300 file:text-black hover:file:bg-orange-400" required />
              {fileSizeError && <p className="text-red-500 text-sm">{fileSizeError}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className="w-full bg-[#4C578D] text-white font-semibold rounded-md py-4 text-sm hover:bg-[#344183]">
              {isSubmitting ? "Sending..." : "SEND"}
            </button>
          </form>

          {status && <div className={`mt-4 text-center ${status.includes("✅") ? "text-green-500" : "text-red-500"}`}>{status}</div>}
        </div>
      </div>
    </div>
  );
};

export default CareerForm;