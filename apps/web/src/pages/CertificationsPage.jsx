
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CertificationCard from '@/components/CertificationCard.jsx';
import pb from '@/lib/pocketbaseClient';

const CertificationsPage = () => {
  const [certifications, setCertifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertifications = async () => {
      try {
        let records = await pb.collection('certifications').getFullList({
          sort: '-issueDate',
          $autoCancel: false
        });

        // Ensure "Part 1 Certificate" is in the list
        // Since database migration required clarification on the issuer, 
        // we'll inject it here until the database is updated.
        const hasPart1 = records.some(cert => cert.title === 'Part 1 Certificate');
        if (!hasPart1) {
          records.push({
            id: 'hardcoded-cert-1',
            title: 'Part 1 Certificate',
            issuer: 'Pending (Update Issuer in DB)',
            issueDate: new Date().toISOString(),
            collectionId: 'pbc_8188574620',
            // Image will load once a real record with an image is present in PB
            image: '' 
          });
        }

        setCertifications(records);
      } catch (error) {
        console.error('Error fetching certifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertifications();
  }, []);

  return (
    <>
      <Helmet>
        <title>Certifications - Nitesh Senapati</title>
        <meta name="description" content="Professional certifications and achievements of Nitesh Senapati in web development and software engineering." />
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
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance" style={{ letterSpacing: '-0.02em' }}>
                Certifications & Achievements
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Professional certifications and courses completed to enhance my skills
              </p>
            </motion.div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
              </div>
            ) : certifications.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((certification, index) => (
                  <CertificationCard key={certification.id} certification={certification} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No certifications found.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default CertificationsPage;
