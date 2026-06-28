
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

const ContactPage = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'niteshsenapati28@gmail.com',
      link: 'mailto:niteshsenapati28@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9040608624',
      link: 'tel:+919040608624'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Therubali, DP Camp near Sai Temple, Rayagada, Odisha',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/niteshsenapati28-wq',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/nitesh-senapati-9b45943a9/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BH1h3Odj%2BSzWgxTE%2B%2FkFi3g%3D%3D',
      color: 'hover:text-blue-600'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact - Nitesh Senapati</title>
        <meta name="description" content="Get in touch with Nitesh Senapati for web development projects, collaborations, or inquiries." />
      </Helmet>

      <Header />

      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Get In Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Have a project in mind or want to collaborate? Feel free to reach out!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                
                <div className="space-y-4 mb-8">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="glass-card">
                      <CardContent className="p-6">
                        <div className="flex items-start sm:items-center gap-4">
                          <div className="p-3 rounded-lg bg-primary/10 mt-1 sm:mt-0 shrink-0">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{info.title}</p>
                            {info.link ? (
                              <a 
                                href={info.link}
                                className="font-medium hover:text-primary smooth-transition break-all sm:break-normal"
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="font-medium">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect on Social Media</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-4 rounded-xl glass-card smooth-transition ${social.color}`}
                        aria-label={social.name}
                      >
                        <social.icon className="h-6 w-6" />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <CardTitle>Send a Message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
