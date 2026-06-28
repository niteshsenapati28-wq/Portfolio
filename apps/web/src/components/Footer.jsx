
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <span className="text-xl font-bold text-gradient">Nitesh Senapati</span>
            <p className="mt-2 text-sm">
              Full Stack Developer specializing in MERN stack and modern web technologies.
            </p>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Quick Links</span>
            <div className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm hover:text-primary smooth-transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <span className="font-semibold mb-4 block">Connect</span>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com/niteshsenapati28-wq"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary smooth-transition"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/nitesh-senapati-9b45943a9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BH1h3Odj%2BSzWgxTE%2B%2FkFi3g%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary smooth-transition"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <a href="mailto:niteshsenapati28@gmail.com" className="flex items-center gap-2 hover:text-primary smooth-transition">
                <Mail className="h-4 w-4" />
                <span>niteshsenapati28@gmail.com</span>
              </a>
              <a href="tel:+919040608624" className="flex items-center gap-2 hover:text-primary smooth-transition">
                <Phone className="h-4 w-4" />
                <span>+91 9040608624</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm">
          <p>&copy; {currentYear} Nitesh Senapati. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy" className="hover:text-primary smooth-transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary smooth-transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
