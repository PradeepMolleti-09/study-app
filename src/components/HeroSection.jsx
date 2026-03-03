import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, CheckCircle } from 'lucide-react';
import heroImg from '../assets/hero_team.png';

const HeroSection = () => {
    return (
        <section className="relative min-height-[90vh] bg-hrts-blue overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
            {/* Background Shapes */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-hrts-orange opacity-10 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 text-center lg:text-left"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-1.5 bg-white/10 text-white rounded-full text-sm font-semibold mb-6 border border-white/20"
                        >
                            Trusted Partners Since 2008
                        </motion.span>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                            Building <span className="text-hrts-orange underline decoration-hrts-orange/30">Strong Teams</span> for Growing Businesses
                        </h1>

                        <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0">
                            India's leading Recruitment & Staffing partner delivering excellence for over 18 years across various industries.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <button className="btn-primary group">
                                HIRE TALENT NOW <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="btn-outline">
                                Explore Services
                            </button>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-white/60">
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-hrts-orange" />
                                <span className="text-sm">ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle size={18} className="text-hrts-orange" />
                                <span className="text-sm">Compliance Driven</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex-1 relative"
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                            <img
                                src={heroImg}
                                alt="Corporate Team"
                                className="w-full h-auto object-cover transform hover:scale-105 transition-duration-700"
                            />
                        </div>

                        {/* Stats Overlay */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl hidden md:block"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-hrts-orange/10 rounded-full flex items-center justify-center text-hrts-orange">
                                    <Users size={24} />
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-hrts-blue">50,000+</p>
                                    <p className="text-sm text-gray-500">Professionals Placed</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default HeroSection;
