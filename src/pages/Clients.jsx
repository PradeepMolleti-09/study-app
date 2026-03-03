import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Truck, Activity, Cpu, ShoppingCart, ShieldCheck } from 'lucide-react';

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

const Clients = () => {
    const logos = [
        'Tata Projects', 'HSBC', 'Adani', 'Novartis', 'PwC', 'Pfizer', 'Sandoz', 'NCBS', 'Inox Solar'
    ];

    const caseStudies = [
        {
            title: "Mass Hiring – Adani Solar",
            desc: "Successfully onboarded 1000+ technical associates within 45 days for their new manufacturing unit.",
            icon: Cpu,
            stats: "1000+ Placements"
        },
        {
            title: "Bulk Onboarding – Tata Projects",
            desc: "Managed end-to-end recruitment and compliance for large-scale infrastructure projects across India.",
            icon: Building2,
            stats: "Pan-India Reach"
        },
        {
            title: "Compliance & Payroll – Manufacturing",
            desc: "Digitized payroll for 2000+ associates with 100% statutory compliance and zero audit observations.",
            icon: ShieldCheck,
            stats: "100% Compliant"
        }
    ];

    return (
        <div>
            <Breadcrumb title="Our Clients" />

            {/* Intro */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-4xl font-bold mb-6">Trusted by Industry Leaders</h2>
                        <p className="text-gray-500 text-lg">
                            We take pride in our long-standing relationships with the world's most reputable brands, delivering consistent excellence since 2008.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                        {logos.map((logo, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="p-12 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center text-center font-black text-gray-300 hover:text-hrts-blue transition-colors group"
                            >
                                <div className="skill-card">
                                    <span className="text-xl md:text-2xl tracking-tighter uppercase">{logo}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Snapshots */}
            <section className="py-24 bg-hrts-blue text-white overflow-hidden relative">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
                        <p className="text-white/60">Real impact across various industries and project scales.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {caseStudies.map((cs, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm group hover:bg-white/10 transition-all"
                            >
                                <div className="w-14 h-14 bg-hrts-orange rounded-2xl flex items-center justify-center text-white mb-6 transform group-hover:rotate-6 transition-transform">
                                    <cs.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{cs.title}</h3>
                                <p className="text-white/60 mb-8 leading-relaxed text-sm">{cs.desc}</p>
                                <div className="pt-6 border-t border-white/10">
                                    <p className="text-hrts-orange font-black text-lg">{cs.stats}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                {/* Background Decorative */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-hrts-orange/5 to-transparent"></div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            {
                                quote: "HRTS has been our primary staffing partner for mass hiring. Their ability to source quality talent across India is unmatched.",
                                author: "Senior HR Manager",
                                client: "Adani Solar"
                            },
                            {
                                quote: "Professionalism and compliance are the two things we value most in HRTS. They have never failed us in 5 years of partnership.",
                                author: "Head of Operations",
                                client: "Tata Projects"
                            }
                        ].map((t, i) => (
                            <div key={i} className="p-10 bg-white rounded-3xl shadow-xl relative mt-4">
                                <div className="absolute -top-6 left-10 w-12 h-12 bg-hrts-orange rounded-full flex items-center justify-center text-white text-2xl font-serif">"</div>
                                <p className="italic text-gray-600 mb-8 mt-6">"{t.quote}"</p>
                                <div>
                                    <h4 className="font-bold text-hrts-blue">{t.author}</h4>
                                    <p className="text-hrts-orange text-sm font-bold uppercase">{t.client}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Clients;
