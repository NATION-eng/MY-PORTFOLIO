import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import AnimateOnScroll from "../components/AnimateOnScroll";

const socials = [
  {
    icon: faLinkedin,
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/chiburoma-nation-752395312",
  },
  {
    icon: faTwitter,
    label: "X (Twitter)",
    url: "https://x.com/ChiburomaNation",
  },
  {
    icon: faInstagram,
    label: "Instagram",
    url: "https://www.instagram.com/chiburomanation",
  },
  {
    icon: faWhatsapp,
    label: "WhatsApp",
    url: "https://wa.me/2348116079309",
  },
];

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <AnimateOnScroll variant="scale" delay={0.1}>
        <div className="contact__card">
          <p className="contact__label">Let's connect</p>
          <h2 className="contact__title">Get In Touch</h2>
          <p className="contact__subtitle">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>

          <div className="contact__socials">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__social-link"
                aria-label={social.label}
              >
                <FontAwesomeIcon icon={social.icon} />
                <span>{social.label}</span>
              </a>
            ))}
          </div>

          <a
            href="mailto:chiburomanation@gmail.com"
            className="contact__email"
          >
            chiburomanation@gmail.com
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

export default Contact;
