import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Search, MessageSquare, Briefcase, Globe } from 'lucide-react';

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

const Contact = () => {
    const contactDetails = [
        { icon: Phone, label: "Phone", details: "+91 99 08 11 91 91", color: "text-blue-500" },
        { icon: Mail, label: "Email", details: "info@hrtalentsolutions.in", color: "text-orange-500" },
        { icon: Globe, label: "Website", details: "www.hrtalentsolutions.in", color: "text-purple-500" },
        { icon: MapPin, label: "Office", details: "HR Talent Solutions Pvt Ltd, Corporate Headquarters, India", color: "text-red-500" },
    ];

    return (
        <div className="bg-white">
            <Breadcrumb title="Contact Us" />

            {/* Intro */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center max-w-4xl">
                    <h2 className="text-4xl font-bold mb-6">Let's Build Your Workforce Together</h2>
                    <p className="text-gray-500 text-lg">
                        Have a question or looking for a customized staffing solution? Reach out to us today and our team will get back to you within 24 hours.
                    </p>
                </div>
            </section>

            {/* Main Grid */}
            <section className="py-24 bg-gray-50 relative overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-12 items-start">

                        {/* Contact Details Column */}
                        <div className="lg:w-1/3 grid grid-cols-1 gap-6 w-full">
                            {contactDetails.map((detail, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 flex items-start gap-6 group hover:border-hrts-orange/20 transition-all"
                                >
                                    <div className={`w-14 h-14 bg-gray-50 flex items-center justify-center rounded-2xl ${detail.color} transition-all group-hover:bg-hrts-blue group-hover:text-white`}>
                                        <detail.icon size={26} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">{detail.label}</h4>
                                        <p className="text-hrts-blue font-bold text-lg leading-relaxed">{detail.details}</p>
                                    </div>
                                </motion.div>
                            ))}

                            <div className="bg-hrts-blue p-10 rounded-3xl text-white mt-6 relative overflow-hidden shadow-2xl">
                                <h3 className="text-2xl font-bold mb-6">Corporate Office</h3>
                                <p className="text-white/60 mb-8">Visit us for a consultation or send us your requirements via post.</p>
                                <div className="flex items-center gap-4 text-hrts-orange font-bold">
                                    <span>View on Maps</span>
                                    <div className="w-10 h-10 border border-hrts-orange rounded-full flex items-center justify-center translate-x-1 group-hover:translate-x-3 transition-transform">
                                        <Search size={18} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Column */}
                        <div className="lg:w-2/3 w-full">
                            <div className="bg-white p-12 rounded-3xl shadow-2xl border border-gray-100">
                                <form className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-gray-700">Full Name</label>
                                            <input required className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-hrts-orange outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-gray-700">Company Name</label>
                                            <input className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-hrts-orange outline-none transition-all" placeholder="Acme Corp" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-gray-700">Phone Number</label>
                                            <input required className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-hrts-orange outline-none transition-all" placeholder="+91 00000 00000" />
                                        </div>
                                        <div className="space-y-3">
                                            <label className="text-sm font-bold text-gray-700">Email Address</label>
                                            <input required type="email" className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-hrts-orange outline-none transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700">Requirement Type</label>
                                        <select className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-hrts-orange outline-none transition-all">
                                            <option>Manpower Outsourcing</option>
                                            <option>RPO Services</option>
                                            <option>IT & Non-IT Staffing</option>
                                            <option>Payroll & Compliance</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>

                                    <div className="space-y-3">
                                        <label className="text-sm font-bold text-gray-700">Message</label>
                                        <textarea rows={5} className="w-full bg-gray-50 border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-hrts-orange outline-none transition-all" placeholder="Tell us more about your requirements..."></textarea>
                                    </div>

                                    <button type="submit" className="w-full bg-hrts-orange text-white py-5 rounded-2xl font-bold text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3">
                                        Get in Touch <MessageSquare size={22} />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-[450px] w-full bg-gray-200 grayscale contrast-125 brightness-90 relative overflow-hidden group">
                <div className="absolute inset-0 bg-hrts-blue/10 pointer-events-none group-hover:bg-transparent transition-colors duration-500"></div>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2233913120413!2d77.40516037550!3d28.5321306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43171ec2b%3A0x4445353160a0a552!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </section>
        </div>
    );
};

export default Contact;
