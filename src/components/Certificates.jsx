import React from 'react';
import { CERTIFICATES } from '../constants';
import { motion } from 'framer-motion';

const Certificates = () => {
  return (
    <div className="certificates-section py-12">
      <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="my-20 text-center text-4xl">
            Certifications
        </motion.h1>    
      <div className="certificates-list max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CERTIFICATES.map((certificate, index) => (
          <motion.div 
            key={index} 
            className="certificate-card bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            whileInView={{opacity: 1, x:0}}
            initial={{opacity: 0, x: -130}}
            transition={{duration: 1}}>
            <h3 className="text-xl font-semibold text-white mb-2">{certificate.title}</h3>
            <p className="text-gray-400 mb-4"><strong>Issuer:</strong> {certificate.issuer}</p>
            <a 
              href={certificate.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Certificate
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
