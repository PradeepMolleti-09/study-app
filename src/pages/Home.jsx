import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Globe, Heart, Shield, TrendingUp } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import Stats from '../components/Stats';
import ServicesGrid from '../components/ServicesGrid';

const IndustrySection = () => {
    const industries = [
        { name: 'BFSI', icon: '🏦' },
        { name: 'Manufacturing', icon: '🏭' },
        { name: 'Technology', icon: '💻' },
        { name: 'Healthcare', icon: '🏥' },
        { name: 'Telecom', icon: '📱' },
        { name: 'Retail', icon: '🛒' },
        { name: 'Logistics', icon: '🚚' },
        { name: 'E-Commerce', icon: '📦' },
    ];

    return (
        <section className="py-24 bg-hrts-blue text-white overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
                    <p className="text-white/60 max-w-2xl mx-auto">
                        Deep domain expertise across diverse sectors, providing specialized talent solutions that drive industry growth.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                    {industries.map((ind, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="p-6 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center gap-4 hover:bg-white/10 transition-colors"
                        >
                            <span className="text-4xl">{ind.icon}</span>
                            <span className="font-semibold text-sm">{ind.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ClientStrip = () => {
    const clients = ['Tata Projects', 'HSBC', 'Adani', 'Novartis', 'PwC', 'Pfizer', 'Sandoz', 'NCBS', 'Inox Solar'];

    return (
        <section className="py-20 bg-white border-b border-gray-100 overflow-hidden">
            <div className="container mx-auto px-4 mb-10">
                <p className="text-center text-gray-400 font-semibold uppercase tracking-widest text-xs">Trusted by Global Leaders</p>
            </div>
            <div className="flex overflow-hidden group">
                <div className="flex animate-marquee whitespace-nowrap py-4">
                    {[...clients, ...clients].map((client, i) => (
                        <div key={i} className="mx-12 text-3xl font-black text-gray-200 grayscale hover:grayscale-0 transition-all hover:text-hrts-blue select-none">
                            {client.toUpperCase()}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Testimonials = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/3">
                        <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
                        <p className="text-gray-500 mb-8">
                            Don't just take our word for it. Hear from our industry partners about their experience working with HRTS.
                        </p>
                        <div className="flex gap-4">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-hrts-blue font-bold">"</div>
                            <div className="mt-4">
                                <p className="font-bold text-hrts-blue">4.9/5 Average Rating</p>
                                <p className="text-sm text-gray-400">Based on 50+ Enterprise Clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 relative">
                            <div className="text-hrts-orange text-4xl font-serif absolute -top-4 left-8">"</div>
                            <p className="italic text-gray-600 mb-8 mt-4 leading-relaxed">
                                "HRTS has been our primary staffing partner for mass hiring. Their ability to source quality talent across India is unmatched."
                            </p>
                            <div>
                                <p className="font-bold text-hrts-blue">HR Director</p>
                                <p className="text-sm text-hrts-orange">Adani Solar</p>
                            </div>
                        </div>
                        <div className="p-8 bg-white rounded-3xl shadow-xl border border-gray-100 relative mt-8 md:mt-20">
                            <div className="text-hrts-orange text-4xl font-serif absolute -top-4 left-8">"</div>
                            <p className="italic text-gray-600 mb-8 mt-4 leading-relaxed">
                                "Professional, compliant, and transparent. Their payroll management system has saved us countless man-hours."
                            </p>
                            <div>
                                <p className="font-bold text-hrts-blue">Operations Head</p>
                                <p className="text-sm text-hrts-orange">Tata Projects</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FinalCTA = () => {
    return (
        <section className="bg-hrts-orange py-20 text-white overflow-hidden relative">
            <div className="container mx-auto px-4 text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to Scale Your Workforce?</h2>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-hrts-blue text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-hrts-blue/90 transition-all">
                        Talk to an Expert
                    </button>
                    <button className="bg-white text-hrts-orange px-10 py-4 rounded-full font-bold shadow-2xl hover:bg-gray-50 transition-all">
                        Request Proposal
                    </button>
                </div>
            </div>
            {/* Abstract Background */}
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            </div>
        </section>
    );
}

const Home = () => {
    return (
        <div className="page-wrapper">
            <HeroSection />
            <Stats />
            <ClientStrip />
            <ServicesGrid />
            <IndustrySection />
            <Testimonials />
            <FinalCTA />
        </div>
    );
};

export default Home;
