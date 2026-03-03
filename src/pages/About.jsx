import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Globe, Building2, TrendingUp, ShieldCheck, HeartPulse } from 'lucide-react';
import ceoImg from '../assets/ceo.png';
import advisorImg from '../assets/advisor.png';
import avpImg from '../assets/avp.png';
import mapImg from '../assets/map.png';


const Breadcrumb = ({ title }) => (
    <div className="bg-hrts-blue pt-32 pb-12 text-white">
        <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
            <div className="flex items-center gap-2 text-white/60">
                <span>Home</span>
                <span>/</span>
                <span className="text-hrts-orange">{title}</span>
            </div>
        </div>
    </div>
);

const About = () => {
    const stats = [
        { label: "Branches", value: "3", icon: Building2 },
        { label: "Operating Locations", value: "110+", icon: MapPin },
        { label: "Direct Employees", value: "70+", icon: Users },
        { label: "Associates", value: "4,500+", icon: Users },
        { label: "Placements", value: "50,000+", icon: Globe },
    ];

    const management = [
        { name: "Narendra Kotti", role: "CEO", img: ceoImg, desc: "Leading HRTS with a vision for excellence since 2008." },
        { name: "Dr SSN Srinivas", role: "Advisor", img: advisorImg, desc: "20+ years experience (TISS, PwC, HSBC, Tata Projects)." },
        { name: "KVS Rajani Kant", role: "AVP HR Operations", img: avpImg, desc: "Law Graduate, MBA with deep Pharma/Retail exposure." },
    ];

    const growthData = [
        { year: "FY 20-21", value: 41 },
        { year: "FY 21-22", value: 64 },
        { year: "FY 22-23", value: 85 },
        { year: "FY 23-24", value: 115 },
        { year: "FY 24-25", value: 125 },
    ];

    return (
        <div className="bg-white">
            <Breadcrumb title="About Us" />

            {/* Hero Content */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <span className="text-hrts-orange font-bold uppercase tracking-widest text-sm">Since June 9, 2008</span>
                            <h2 className="text-4xl font-bold mt-4 mb-8">Pioneering Excellence in HR Talent Solutions</h2>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Founded with a mission to bridge the gap between talent and opportunity, HR Talent Solutions Pvt Ltd (HRTS) has evolved into a premier workforce solutions provider in India.
                            </p>
                            <div className="grid grid-cols-2 gap-8">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-hrts-blue/5 rounded-full flex items-center justify-center text-hrts-blue shrink-0">
                                        <ShieldCheck size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">100% Compliance</h4>
                                        <p className="text-sm text-gray-500">Legal & Ethical Standards</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 bg-hrts-blue/5 rounded-full flex items-center justify-center text-hrts-blue shrink-0">
                                        <TrendingUp size={20} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Rapid Growth</h4>
                                        <p className="text-sm text-gray-500">Industry-leading CAGR</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 relative bg-gray-50 rounded-3xl p-8 overflow-hidden group">
                            <img src={mapImg} alt="India Presence" className="w-full h-auto object-contain transform group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                            <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                                {stats.slice(0, 4).map((stat, i) => (
                                    <div key={i} className={`p-6 rounded-2xl border border-gray-100 shadow-sm ${i === 0 ? 'bg-hrts-blue text-white' : 'bg-white'}`}>
                                        <p className={`text-2xl font-bold mb-1 ${i === 0 ? 'text-white' : 'text-hrts-blue'}`}>{stat.value}</p>
                                        <p className={`text-xs ${i === 0 ? 'text-white/60' : 'text-gray-500'}`}>{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Growth Graph Section */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Our Growth Journey</h2>
                        <p className="text-gray-500">Consistently delivering value and scaling operations pan-India.</p>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
                        <div className="flex items-end justify-between gap-2 h-64 border-b border-gray-200">
                            {growthData.map((data, i) => (
                                <div key={i} className="flex flex-col items-center flex-1 group">
                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${(data.value / 125) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 1 }}
                                        className="w-12 bg-hrts-blue rounded-t-lg relative group-hover:bg-hrts-orange transition-colors"
                                    >
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-hrts-blue text-white px-2 py-1 rounded text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                            ₹{data.value} Cr
                                        </div>
                                    </motion.div>
                                    <p className="text-xs font-bold text-gray-400 mt-4 uppercase tracking-tighter">{data.year}</p>
                                </div>
                            ))}
                        </div>
                        <p className="text-center mt-8 text-sm font-bold text-hrts-blue uppercase tracking-widest">Revenue Turnover (In Crores)</p>
                    </div>
                </div>
            </section>

            {/* Management Section */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold">Expert Leadership</h2>
                        <p className="text-gray-500 mt-4">Driven by experienced professionals from TISS, PwC, HSBC, and Tata Projects.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {management.map((person, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="group p-6 bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden"
                            >
                                <div className="aspect-square rounded-2xl overflow-hidden mb-6 border-4 border-gray-50 group-hover:border-hrts-orange/20 transition-all">
                                    <img src={person.img} alt={person.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-hrts-blue">{person.name}</h3>
                                <p className="text-hrts-orange font-bold text-sm uppercase mb-4">{person.role}</p>
                                <p className="text-gray-500 text-sm leading-relaxed">{person.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Values */}
            <section className="py-24 bg-hrts-blue text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-4xl font-bold text-white mb-8">Our Vision & Core Values</h2>
                            <p className="text-white/60 mb-12">
                                We believe in creating a sustainable ecosystem where businesses find the right talent and professionals find the right opportunities.
                            </p>
                            <div className="grid grid-cols-1 gap-6">
                                {[
                                    { title: "Integrity", d: "Highest ethical standards in every transaction." },
                                    { title: "Compliance", d: "Zero compromise on statutory and legal frameworks." },
                                    { title: "Reliability", d: "Consistent performance you can bank on." },
                                    { title: "Scalability", d: "Agile solutions that grow with your business." },
                                    { title: "Technology-Driven", d: "Modern HR tools for digital transformation." },
                                ].map((v, i) => (
                                    <div key={i} className="flex gap-6 items-start">
                                        <div className="w-6 h-6 border-2 border-hrts-orange rounded-full flex-shrink-0 mt-1"></div>
                                        <div>
                                            <h4 className="font-bold text-xl">{v.title}</h4>
                                            <p className="text-white/40">{v.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="bg-white/10 p-12 rounded-3xl border border-white/20 backdrop-blur-sm h-full flex flex-col justify-center">
                                <Globe className="text-hrts-orange mb-8" size={64} />
                                <h3 className="text-3xl font-bold mb-6 italic">"To be India's most trusted and technologically advanced workforce solutions partner."</h3>
                                <p className="text-white/60">— Mission Statement</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
