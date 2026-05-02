import { BiMapPin } from "react-icons/bi";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await fetch("https://sheetdb.io/api/v1/74zx98z49rz6o", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: [
                        {
                            "Full Name": formData.name,
                            "Email Address": formData.email,
                            "Subject": formData.subject,
                            "Your Message": formData.message
                        }
                    ]
                }),
            });

            if (response.ok) {
                setStatus({ type: "success", message: "Message sent successfully!" });
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus({ type: "error", message: "Failed to send message. Please try again." });
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus({ type: "error", message: "An error occurred. Please try again." });
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setStatus({ type: "", message: "" }), 5000);
        }
    };
    return (
        <div className="p-4 w-full">
            <h2 className="text-2xl font-bold underline underline-offset-8 mb-8">
                Get In <span className="text-[#78cc6d]">Touch</span>
            </h2>

            {/* Live Google Map */}
            <div className="w-full h-80 bg-[#252525] rounded-xl border border-gray-50/10 mb-10 overflow-hidden relative shadow-lg shadow-[#78cc6d]/5">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3687.443976353061!2d91.8318056!3d22.4499444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI2JzU5LjgiTiA5McKwNDknNTQuNSJF!5e0!3m2!1sen!2sbd!4v1777706474603!5m2!1sen!2sbd" 
                    width="100%" 
                    height="100%" 
                    className="w-full h-full grayscale contrast-[1.2] brightness-[0.7] hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-700"
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map"
                ></iframe>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                    <h3 className="text-xl font-bold text-[#999999] border-b border-gray-50/10 pb-4 flex items-center gap-2">
                        <span className="text-[#78cc6d]">Contact</span> Information
                    </h3>
                    
                    <div className="space-y-6">
                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-lg bg-[#78cc6d]/10 flex items-center justify-center border border-[#78cc6d]/20 group-hover:bg-[#78cc6d] transition-all duration-300">
                                <FaEnvelope className="text-[#78cc6d] group-hover:text-[#222222] transition-colors" size={20} />
                            </div>
                            <div>
                                <h4 className="text-xs text-[#78cc6d] font-bold uppercase tracking-wider mb-1">Email</h4>
                                <p className="text-text-main text-sm">mdsnbabor828@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-lg bg-[#78cc6d]/10 flex items-center justify-center border border-[#78cc6d]/20 group-hover:bg-[#78cc6d] transition-all duration-300">
                                <FaPhone className="text-[#78cc6d] group-hover:text-[#222222] transition-colors" size={20} />
                            </div>
                            <div>
                                <h4 className="text-xs text-[#78cc6d] font-bold uppercase tracking-wider mb-1">Phone</h4>
                                <p className="text-text-main text-sm">+880 1894347330</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-5 group">
                            <div className="w-12 h-12 rounded-lg bg-[#78cc6d]/10 flex items-center justify-center border border-[#78cc6d]/20 group-hover:bg-[#78cc6d] transition-all duration-300">
                                <BiMapPin className="text-[#78cc6d] group-hover:text-[#222222] transition-colors" size={20} />
                            </div>
                            <div>
                                <h4 className="text-xs text-[#78cc6d] font-bold uppercase tracking-wider mb-1">Location</h4>
                                <p className="text-text-main text-sm">Chittagong, Bangladesh</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-8">
                    <h3 className="text-xl font-bold text-[#999999] border-b border-gray-50/10 pb-4 flex items-center gap-2">
                        <span className="text-[#78cc6d]">Send</span> a Message
                    </h3>

                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Full Name"
                                className="w-full bg-[#252525] border border-gray-50/10 px-4 py-3 text-white focus:outline-none focus:border-[#78cc6d]/50 transition-colors text-sm rounded-md"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="Email Address"
                                className="w-full bg-[#252525] border border-gray-50/10 px-4 py-3 text-white focus:outline-none focus:border-[#78cc6d]/50 transition-colors text-sm rounded-md"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="Subject"
                            className="w-full bg-[#252525] border border-gray-50/10 px-4 py-3 text-white focus:outline-none focus:border-[#78cc6d]/50 transition-colors text-sm rounded-md"
                        />
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Your Message"
                            className="w-full bg-[#252525] border border-gray-50/10 px-4 py-4 text-white focus:outline-none focus:border-[#78cc6d]/50 transition-colors text-sm resize-none rounded-md"
                        />
                        {status.message && (
                            <div className={`p-3 rounded-md text-sm ${status.type === 'success' ? 'bg-[#78cc6d]/20 text-[#78cc6d] border border-[#78cc6d]/30' : 'bg-red-500/20 text-red-400 border border-red-500/30'}`}>
                                {status.message}
                            </div>
                        )}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full md:w-fit px-8 py-3 bg-[#78cc6d] text-[#222222] font-bold uppercase text-xs tracking-widest rounded-md hover:bg-[#6ab35f] transition-colors flex items-center justify-center gap-2 group ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                            <FaPaperPlane className={`transition-transform ${isSubmitting ? '' : 'group-hover:translate-x-1 group-hover:-translate-y-1'}`} size={14} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
