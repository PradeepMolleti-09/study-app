import React from 'react';
import { motion } from 'framer-motion';
import { Users, Briefcase, Code, Database, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ icon: Icon, title, description, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -10 }}
        className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-lg hover:border-hrts-orange/30 transition-all duration-300"
    >
        <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center text-hrts-blue group-hover:bg-hrts-orange group-hover:text-white transition-all duration-300 mb-6">
            <Icon size={28} />
        </div>
        <h3 className="text-xl font-bold mb-4 group-hover:text-hrts-orange transition-colors">{title}</h3>
        <p className="text-gray-500 mb-6 leading-relaxed">
            {description}
        </p>
        <Link to="/services" className="flex items-center gap-2 text-hrts-blue font-bold group-hover:gap-4 transition-all">
            Learn More <ArrowRight size={18} />
        </Link>
    </motion.div>
);

const ServicesGrid = () => {
    const services = [
        {
            icon: Users,
            title: "Manpower Outsourcing",
            description: "Complete lifecycle management from recruitment to payroll and compliance.",
            delay: 0.1
        },
        {
            icon: Briefcase,
            title: "RPO Services",
            description: "Scalable Recruitment Process Outsourcing for high-volume hiring needs.",
            delay: 0.2
        },
        {
            icon: Code,
            title: "IT & Non-IT Staffing",
            description: "Expert staffing solutions across diverse sectors including Technology and Finance.",
            delay: 0.3
        },
        {
            icon: Database,
            title: "Payroll Management",
            description: "End-to-end payroll processing with 100% accuracy and statutory compliance.",
            delay: 0.4
        },
        {
            icon: FileText,
            title: "Statutory Compliance",
            description: "Hassle-free management of PF, ESI, Labor Laws, and audit support.",
            delay: 0.5
        }
    ];

    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-hrts-orange font-bold tracking-wider uppercase text-sm"
                    >
                        Our Expertise
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mt-4 mb-6"
                    >
                        Comprehensive Workforce Solutions
                    </motion.h2>
                    <p className="text-gray-500 text-lg">
                        Empowering businesses with strategic talent acquisition and management solutions tailored to your unique growth needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}

                    {/* Experience Card */}
                    <div className="bg-hrts-blue p-8 rounded-2xl flex flex-col justify-center text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                        <h3 className="text-2xl font-bold mb-4">Want a custom solution?</h3>
                        <p className="text-white/70 mb-8">
                            Let's discuss how we can help you scale your workforce efficiently.
                        </p>
                        <Link to="/contact" className="btn-primary w-fit">
                            Talk to an Expert
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
