import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Code, Database, FileText, CheckCircle2, ArrowRight } from 'lucide-react';

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

const ServiceRow = ({ id, title, icon: Icon, description, points, reverse = false }) => (
    <section id={id} className={`py-24 ${reverse ? 'bg-gray-50' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
            <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-20`}>
                <div className="lg:w-1/2">
                    <div className="w-16 h-16 bg-hrts-blue rounded-2xl flex items-center justify-center text-white mb-8 shadow-xl">
                        <Icon size={32} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
                    <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        {description}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {points.map((point, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <CheckCircle2 className="text-hrts-orange shrink-0" size={20} />
                                <span className="text-gray-700 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className={`bg-hrts-blue/5 rounded-3xl p-12 border border-gray-100 ${reverse ? 'rotate-1' : '-rotate-1 hover:rotate-0'} transition-transform duration-500`}
                    >
                        <div className="bg-white p-8 rounded-2xl shadow-2xl">
                            <div className="flex justify-between items-center mb-6">
                                <h4 className="font-bold text-hrts-blue">Service Dashboard</h4>
                                <div className="w-4 h-4 bg-hrts-orange rounded-full animate-pulse"></div>
                            </div>
                            <div className="space-y-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="h-4 bg-gray-100 rounded w-full"></div>
                                ))}
                                <div className="h-4 bg-gray-100 rounded w-2/3"></div>
                            </div>
                            <div className="mt-8 flex gap-2">
                                <div className="w-12 h-12 rounded-full bg-hrts-blue/10"></div>
                                <div className="flex-1 space-y-2 mt-2">
                                    <div className="h-3 bg-gray-100 rounded w-full"></div>
                                    <div className="h-3 bg-gray-100 rounded w-1/2"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    </section>
);

const Services = () => {
    const allServices = [
        {
            id: "manpower",
            icon: Users,
            title: "Manpower Outsourcing",
            description: "End-to-end management of your non-core workforce, allowing you to focus on your business goals while we handle everything else.",
            points: ["Recruitment", "Onboarding", "Payroll Processing", "Exit Management", "Performance Appraisal", "Statutory Compliance"],
            reverse: false
        },
        {
            id: "rpo",
            icon: Briefcase,
            title: "RPO Services",
            description: "Our Recruitment Process Outsourcing (RPO) experts integrate with your team to deliver high-quality talent at scale with full governance.",
            points: ["On-site RPO Experts", "Multi-channel Sourcing", "Pan-India Hiring", "Recruitment Dashboards", "Governance & SLA", "Compliance Audit"],
            reverse: true
        },
        {
            id: "staffing",
            icon: Code,
            title: "IT & Non-IT Staffing",
            description: "From developers and designers to finance and healthcare professionals, we provide specialized staffing across all major industries.",
            points: ["Permanent Hiring", "Temporary Staffing", "Executive Search", "Bulk Hiring", "Technical Assessments", "Global Reach"],
            reverse: false
        },
        {
            id: "payroll",
            icon: Database,
            title: "Payroll & Compliance",
            description: "We take the complexity out of payroll and statutory compliance with automated systems and expert advisory support.",
            points: ["PF & ESI Management", "Salary Processing", "Tax Compliance (Form 16)", "Bonus & Gratuity", "Digital KYC", "Statutory Dashboards"],
            reverse: true
        }
    ];

    return (
        <div>
            <Breadcrumb title="Our Services" />

            {/* Intro */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-4xl font-bold mb-6">Expert Workforce Solutions Tailored For Your Growth</h2>
                    <p className="text-gray-500 text-lg leading-relaxed">
                        From talent acquisition to lifecycle management, we provide a comprehensive suite of HR services designed to optimize your workforce and ensure 100% compliance.
                    </p>
                </div>
            </section>

            {allServices.map((service, i) => (
                <ServiceRow key={i} {...service} />
            ))}

            {/* CTA */}
            <section className="py-24 bg-hrts-orange">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold text-white mb-8">Ready to transform your HR operations?</h2>
                    <button className="bg-hrts-blue text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 mx-auto">
                        Request Service Consultation <ArrowRight />
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Services;
