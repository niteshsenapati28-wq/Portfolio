
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import SkillCard from '@/components/SkillCard.jsx';
import pb from '@/lib/pocketbaseClient';

const SkillsPage = () => {
  const [skills, setSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const records = await pb.collection('skills').getFullList({
          sort: '-proficiency',
          $autoCancel: false
        });
        setSkills(records);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  const categories = ['all', ...new Set(skills.map(skill => skill.category).filter(Boolean))];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>Skills - Nitesh Sen</title>
        <meta name="description" content="Technical skills and expertise of Nitesh Sen in web development, programming languages, and tools." />
      </Helmet>

      <Header />

      <main className="pt-16">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Technical Skills
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                My expertise across various technologies and tools
              </p>
            </motion.div>

            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="mb-8">
              <TabsList className="flex flex-wrap justify-center gap-2 h-auto bg-transparent">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>

              <TabsContent value={selectedCategory} className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredSkills.map((skill, index) => (
                    <SkillCard key={skill.id} skill={skill} index={index} />
                  ))}
                </div>

                {filteredSkills.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">No skills found in this category.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default SkillsPage;
