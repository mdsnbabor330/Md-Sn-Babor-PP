import { FaArrowDown, FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router";
import meImg from "../assets/me.png";
import { memo } from "react";

const socialLinks = [
  { icon: FaGithub,          href: "https://github.com/mdsnbabor330",         label: "GitHub" },
  { icon: FaLinkedin,        href: "https://www.linkedin.com/in/mohammad-nahid-uddin-babor",        label: "LinkedIn" },
  { icon: FaFacebook,        href: "https://www.facebook.com/sn.babor",           label: "Facebook" },
  { icon: FaInstagramSquare, href: "https://www.instagram.com/mdsnbabor330/",          label: "Instagram" },
];

const Profile = memo(() => {
  return (
    <aside
      aria-label="Profile sidebar"
      className="lg:border-r-2 border-b-2 lg:border-b-0 border-gray-50/20 w-full lg:w-[400px] xl:w-[400px] lg:max-w-[400px] shrink-0 lg:h-full relative overflow-hidden"
    >
      {/* Photo */}
      <div className="relative h-72 sm:h-80 md:h-96 lg:h-auto lg:flex-1">
        <figure className="w-full h-full">
          <img
            src={meImg}
            alt="MD Nahid Uddin Babor — Frontend Developer"
            className="h-full w-full object-cover lg:object-contain"
            loading="eager"
            decoding="async"
          />
        </figure>
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/30 to-transparent z-10"
          aria-hidden="true"
        />
      </div>

      {/* Info block */}
      <div className="flex flex-col relative lg:absolute bottom-0 w-full bg-[#222222] lg:bg-transparent z-20">
        <div className="flex flex-col items-center gap-2 w-full pt-3 pb-4 px-4 text-center">
          <h1 className="text-lg sm:text-xl lg:text-xl xl:text-2xl font-bold leading-tight">
            MD NAHID UDDIN BABOR
          </h1>
          <p className="text-[#78cc6d] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Frontend Developer
          </p>

          {/* Social icons */}
          <div className="flex gap-4 text-[#999999] items-center mt-1">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-[#78cc6d] transition-colors duration-300 text-xl hover:scale-110 transform"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="border-t border-gray-50/20 w-full flex h-12 lg:h-13">
          <a
            href="/cv.pdf"
            download
            aria-label="Download CV"
            className="flex flex-1 items-center justify-center gap-2 border-r border-gray-50/20 text-[#999999] hover:text-[#78cc6d] hover:bg-[#78cc6d]/5 transition-all duration-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase"
          >
            Download CV <FaArrowDown size={11} />
          </a>
          <Link
            to="/contact"
            aria-label="Contact me"
            className="flex flex-1 items-center justify-center gap-2 text-[#999999] hover:text-[#78cc6d] hover:bg-[#78cc6d]/5 transition-all duration-300 text-[11px] sm:text-xs font-bold tracking-widest uppercase"
          >
            Contact <FaPhoneAlt size={11} />
          </Link>
        </div>
      </div>
    </aside>
  );
});

Profile.displayName = "Profile";
export default Profile;