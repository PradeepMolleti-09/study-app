import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-hrts-blue text-white pt-20 pb-10 overflow-hidden relative">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Company Info */}
                    <div className="col-span-1 lg:col-span-1">
                        <Link to="/" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                                <span className="text-hrts-blue font-bold text-xl">H</span>
                            </div>
                            <span className="text-2xl font-bold text-white">HRTS</span>
                        </Link>
                        <p className="text-white/60 mb-8 leading-relaxed">
                            Leading HR solutions provider since 2008. Dedicated to connecting great talent with great companies.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-hrts-orange hover:border-hrts-orange transition-all">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-hrts-orange">Quick Links</h4>
                        <ul className="flex flex-col gap-4">
                            {['Home', 'About Us', 'Services', 'Clients', 'Careers', 'Contact Us'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase().replace(' ', '')}`} className="text-white/60 hover:text-white hover:translate-x-2 transition-all inline-block flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-hrts-orange scale-0 group-hover:scale-100 transition-all"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-hrts-orange">Our Services</h4>
                        <ul className="flex flex-col gap-4">
                            {['Manpower Outsourcing', 'RPO Services', 'IT & Non-IT Staffing', 'Payroll Management', 'Statutory Compliance'].map((item) => (
                                <li key={item}>
                                    <Link to="/services" className="text-white/60 hover:text-white transition-all">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h4 className="text-lg font-bold mb-6 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-hrts-orange">Contact</h4>
                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-hrts-orange shrink-0 mt-1" size={20} />
                                <p className="text-white/60 text-sm">
                                    HR Talent Solutions Pvt Ltd, Corporate Office, India
                                </p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="text-hrts-orange shrink-0" size={20} />
                                <p className="text-white/60 text-sm">+91 99 08 11 91 91</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="text-hrts-orange shrink-0" size={20} />
                                <p className="text-white/60 text-sm">info@hrtalentsolutions.in</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 mt-16 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-white/40 text-sm">
                        © 2026 HR Talent Solutions Pvt Ltd. All Rights Reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-white/40 text-sm hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-white/40 text-sm hover:text-white">Terms of Service</a>
                    </div>
                    <button
                        onClick={scrollToTop}
                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-hrts-orange transition-all group"
                    >
                        <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Background Text Decoration */}
            <div className="absolute top-0 right-0 pointer-events-none opacity-[0.03] select-none scale-150 origin-top-right">
                <h2 className="text-[200px] font-black leading-none">HRTS</h2>
            </div>
        </footer>
    );
};

export default Footer;
