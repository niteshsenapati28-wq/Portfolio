
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import { useTypingEffect } from '@/hooks/useTypingEffect.js';

const HomePage = () => {
  const typedText = useTypingEffect('Full Stack Developer | MERN Stack Developer | Software Engineering Student', 50);

  return (
    <>
      <Helmet>
        <title>Nitesh Senapati - Full Stack Developer Portfolio</title>
        <meta name="description" content="Portfolio of Nitesh Senapati, a Full Stack Developer specializing in MERN stack and modern web technologies." />
      </Helmet>

      <Header />

      <main className="pt-16">
        <section 
          className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1665065434466-8144dac4fc96)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20">
              
              {/* Text Content */}
              <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  Hi, I'm <span className="text-gradient">Nitesh Senapati</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg md:text-xl text-muted-foreground mb-8 min-h-[2rem] max-w-[65ch]"
                >
                  {typedText}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
                >
                  <Button size="lg" asChild>
                    <a href="/resume.pdf" download>
                      <Download className="h-5 w-5 mr-2" />
                      Download Resume
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="/contact">
                      <Mail className="h-5 w-5 mr-2" />
                      Contact Me
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="flex justify-center md:justify-start gap-4"
                >
                  <a
                    href="https://github.com/niteshsen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card hover:bg-primary/10 smooth-transition"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href="https://linkedin.com/in/niteshsen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass-card hover:bg-primary/10 smooth-transition"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </motion.div>
              </div>

              {/* Profile Photo */}
              <div className="flex-1 flex justify-center md:justify-end w-full max-w-[280px] sm:max-w-[340px] md:max-w-[420px]">
                <div className="relative w-full aspect-square animate-photo-entrance">
                  {/* Decorative background blur ring */}
                  <div className="absolute inset-4 bg-primary/20 blur-3xl rounded-full" />
                  
                  {/* Glass container around the image */}
                  <div className="relative w-full h-full p-2.5 glass-circle rounded-full photo-hover-effect glow-effect flex items-center justify-center">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-transparent bg-secondary relative">
                      <img 
                        src="https://horizons-cdn.hostinger.com/91a88d6e-44dd-4e4b-aad3-503a57e5d521/2934950ab5cc07aca34d2e76add54900.jpg" 
                        alt="Nitesh Senapati Professional Headshot"
                        className="w-full h-full object-cover rounded-full"
                      />
                      {/* Subtle inner overlay for lighting */}
                      <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                What I Do
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Building modern web applications with cutting-edge technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Creating responsive and interactive user interfaces using React, Next.js, and modern CSS frameworks.
                </p>
                <Link to="/skills" className="text-primary hover:underline inline-flex items-center gap-2">
                  View Skills <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Building scalable server-side applications with Node.js, Express, and database management.
                </p>
                <Link to="/projects" className="text-primary hover:underline inline-flex items-center gap-2">
                  View Projects <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
