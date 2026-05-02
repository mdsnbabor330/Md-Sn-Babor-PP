import { BiMapPin } from "react-icons/bi";
import { FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa";
import { useCallback, useState } from "react";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const inputClass =
  "w-full bg-[#252525] border border-gray-50/10 px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-[#555] focus:outline-none focus:border-[#78cc6d]/60 focus:ring-1 focus:ring-[#78cc6d]/20 transition-all duration-200 text-sm rounded-md";

const contactInfo = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mdsnbabor828@gmail.com",
    href: "mailto:mdsnbabor828@gmail.com",
  },
  {
    icon: FaPhone,
    label: "Phone",
    value: "+880 1894 347330",
    href: "tel:+8801894347330",
  },
  {
    icon: BiMapPin,
    label: "Location",
    value: "Chittagong, Bangladesh",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setStatus({ type: "", message: "" });

      try {
        const response = await fetch("https://sheetdb.io/api/v1/74zx98z49rz6o", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: [
              {
                "Full Name": formData.name,
                "Email Address": formData.email,
                Subject: formData.subject,
                "Your Message": formData.message,
              },
            ],
          }),
        });

        if (response.ok) {
          setStatus({ type: "success", message: "✓ Message sent successfully! I'll get back to you soon." });
          setFormData(INITIAL_FORM);
        } else {
          setStatus({ type: "error", message: "Failed to send. Please try again or email me directly." });
        }
      } catch {
        setStatus({ type: "error", message: "Network error. Please try again later." });
      } finally {
        setIsSubmitting(false);
        setTimeout(() => setStatus({ type: "", message: "" }), 6000);
      }
    },
    [formData]
  );

  return (
    <section className="p-4 sm:p-6 w-full" aria-label="Contact">
      <h2 className="text-xl sm:text-2xl font-bold underline underline-offset-8 mb-5 sm:mb-7">
        Get In <span className="text-[#78cc6d]">Touch</span>
      </h2>

      {/* Google Map */}
      <div className="w-full h-48 sm:h-64 md:h-72 bg-[#252525] rounded-xl border border-gray-50/10 mb-7 sm:mb-9 overflow-hidden shadow-md shadow-black/30">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3687.443976353061!2d91.8318056!3d22.4499444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDI2JzU5LjgiTiA5McKwNDknNTQuNSJF!5e0!3m2!1sen!2sbd!4v1777706474603!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          className="w-full h-full grayscale contrast-[1.1] brightness-[0.65] hover:grayscale-0 hover:brightness-100 hover:contrast-100 transition-all duration-700"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="My location on Google Maps"
        />
      </div>

      {/* Info + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
        {/* Contact info */}
        <div className="space-y-6">
          <h3 className="text-base sm:text-lg font-bold text-[#999999] border-b border-gray-50/10 pb-3 flex items-center gap-2">
            <span className="text-[#78cc6d]">Contact</span> Information
          </h3>

          <div className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-lg bg-[#78cc6d]/10 flex items-center justify-center border border-[#78cc6d]/20 group-hover:bg-[#78cc6d] transition-all duration-300">
                  <Icon
                    className="text-[#78cc6d] group-hover:text-[#222222] transition-colors"
                    size={18}
                  />
                </div>
                <div>
                  <h4 className="text-[10px] sm:text-xs text-[#78cc6d] font-bold uppercase tracking-widest mb-1">
                    {label}
                  </h4>
                  {href ? (
                    <a
                      href={href}
                      className="text-[#999999] text-sm hover:text-white transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#999999] text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact form */}
        <div className="space-y-5">
          <h3 className="text-base sm:text-lg font-bold text-[#999999] border-b border-gray-50/10 pb-3 flex items-center gap-2">
            <span className="text-[#78cc6d]">Send</span> a Message
          </h3>

          <form className="space-y-3 sm:space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Full Name"
                autoComplete="name"
                className={inputClass}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email Address"
                autoComplete="email"
                className={inputClass}
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className={inputClass}
            />

            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
              className={`${inputClass} resize-none`}
            />

            {status.message && (
              <div
                role="alert"
                aria-live="polite"
                className={`p-3 rounded-md text-xs sm:text-sm font-medium ${
                  status.type === "success"
                    ? "bg-[#78cc6d]/15 text-[#78cc6d] border border-[#78cc6d]/30"
                    : "bg-red-500/15 text-red-400 border border-red-500/30"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              aria-busy={isSubmitting}
              className={`flex items-center justify-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#78cc6d] text-[#222222] font-bold uppercase text-[10px] sm:text-xs tracking-widest rounded-md transition-all duration-300 group w-full sm:w-auto ${
                isSubmitting
                  ? "opacity-60 cursor-not-allowed"
                  : "hover:bg-[#6ab35f] hover:shadow-lg hover:shadow-[#78cc6d]/20"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <FaPaperPlane
                className={`transition-transform text-[11px] ${
                  !isSubmitting ? "group-hover:translate-x-1 group-hover:-translate-y-1" : ""
                }`}
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
