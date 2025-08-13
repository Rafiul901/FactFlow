import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, TrendingUp, Award, MessageCircle, Share2 } from 'lucide-react';

const Extra2 = () => {
  const stats = [
    { icon: Users, value: "25,000+", label: "Active Writers" },
    { icon: BookOpen, value: "150,000+", label: "Articles Published" },
    { icon: MessageCircle, value: "500,000+", label: "Comments & Reviews" },
    { icon: TrendingUp, value: "2M+", label: "Monthly Readers" }
  ];

  const features = [
    {
      icon: Award,
      title: "Expert Recognition",
      description: "Get recognized for your expertise with our credibility scoring system."
    },
    {
      icon: Share2,
      title: "Content Amplification",
      description: "Reach wider audiences through intelligent content distribution."
    },
    {
      icon: Users,
      title: "Peer Collaboration",
      description: "Connect with professionals and collaborate on articles."
    }
  ];

  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold  mb-4">
            Where Knowledge Meets Impact
          </h2>
          <p className=" max-w-2xl mx-auto">
            Join thought leaders who trust FactFlow to amplify their expertise.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.03 }}
            >
              <div className="bg-[#0d3157] rounded-lg p-4 border border-blue-800/50">
                <stat.icon className="w-6 h-6 text-blue-300 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#0d3157] rounded-lg p-6 border border-blue-800/50"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-blue-300" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-blue-100 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Extra2;