
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import pb from '@/lib/pocketbaseClient';

const AboutPage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const records = await pb.collection('user').getFullList({ $autoCancel: false });
        if (records.length > 0) {
          setUserData(records[0]);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const educationData = [
    {
      institution: 'Chinmaya Vidyalaya Therubali',
      degree: 'Primary Education (Up to Class 10)',
      year: 'Oct 2009 - May 2022',
      grade: '80%',
      logo: 'https://horizons-cdn.hostinger.com/91a88d6e-44dd-4e4b-aad3-503a57e5d521/6e8d36a896563ef07a497f8e6eac7a09.webp',
      description: 'Completed primary and secondary education with a strong foundation in core subjects.'
    },
    {
      institution: 'Shree Dadiji Mandir Trust Prabhavati Public School, Titlagarh',
      degree: 'Higher Secondary Science',
      year: 'Oct 2022 - Apr 2024',
      grade: '72%',
      logo: 'https://horizons-cdn.hostinger.com/91a88d6e-44dd-4e4b-aad3-503a57e5d521/beb7c6cc9d3d23c8101b504f8937f0fb.webp',
      description: 'Completed higher secondary education in the Science stream.'
    },
    {
      institution: 'Government College of Engineering, Kalahandi',
      degree: 'Bachelor of Technology in Computer Science Engineering',
      year: 'Sept 2024 - 2028',
      logo: 'https://horizons-cdn.hostinger.com/91a88d6e-44dd-4e4b-aad3-503a57e5d521/008ee2b93eb998f5b7c716434b59df5e.png',
      description: 'Pursuing undergraduate degree focusing on core computer science principles, algorithms, and software development.'
    },
    {
      institution: 'ApnaCollege',
      batch: 'Sigma prime batch',
      degree: 'Full Stack Web Development',
      year: '2 years',
      logo: 'https://horizons-cdn.hostinger.com/91a88d6e-44dd-4e4b-aad3-503a57e5d521/04bbffd7f5c3e21625063259658a9988.png',
      description: 'Comprehensive training in modern web technologies, focusing on the MERN stack and real-world application development.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - Nitesh Senapati</title>
        <meta name="description" content="Learn more about Nitesh Senapati, a passionate Full Stack Developer and Computer Science Engineering student." />
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
                About Me
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {userData?.bio || 'Passionate software developer with a focus on creating efficient, scalable, and user-friendly applications. Currently pursuing a degree in Computer Science Engineering while building real-world projects.'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Career Objective</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      To leverage my technical skills and passion for software development in a challenging role where I can contribute to innovative projects while continuously learning and growing as a professional developer.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <Briefcase className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>Experience Overview</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      Experienced in building full-stack web applications using modern technologies. Proficient in React, Node.js, Express, MongoDB, and various other tools. Strong problem-solving skills and ability to work in team environments.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Education Journey</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card-hover h-full flex flex-col">
                      <CardHeader className="pb-3">
                        <div className="flex items-start gap-4">
                          {edu.logo && (
                            <div className="shrink-0 p-1.5 bg-white/5 rounded-lg flex items-center justify-center">
                              <img 
                                src={edu.logo} 
                                alt={`${edu.institution} Logo`} 
                                className="w-12 h-12 object-contain rounded"
                              />
                            </div>
                          )}
                          <div className="flex-1">
                            <CardTitle className="text-xl text-balance leading-snug">{edu.degree}</CardTitle>
                            <p className="text-sm font-medium text-foreground mt-1">{edu.institution}</p>
                            {edu.batch && (
                              <p className="text-xs text-muted-foreground mt-0.5 font-medium">{edu.batch}</p>
                            )}
                            <div className="flex flex-wrap items-center gap-3 mt-2">
                              <span className="text-sm font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded">
                                {edu.year}
                              </span>
                              {edu.grade && (
                                <span className="text-sm font-medium text-muted-foreground">
                                  Grade: {edu.grade}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="mt-auto">
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
