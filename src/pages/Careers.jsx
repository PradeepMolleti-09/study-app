import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Clock, ArrowRight, Upload, CheckCircle2, FileText } from 'lucide-react';

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

const Careers = () => {
    const [isUploading, setIsUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [submitted, setSubmitted] = useState(false);

    const simulateUpload = (e) => {
        e.preventDefault();
        setIsUploading(true);
        let current = 0;
        const interval = setInterval(() => {
            current += 10;
            setProgress(current);
            if (current >= 100) {
                clearInterval(interval);
                setTimeout(() => {
                    setIsUploading(false);
                    setSubmitted(true);
                }, 500);
            }
        }, 200);
    };

    const jobs = [
        { title: "Regional HR Manager", loc: "Hyderabad", exp: "8-10 Years", type: "Full Time" },
        { title: "Payroll Executive", loc: "Bangalore", exp: "2-4 Years", type: "Full Time" },
        { title: "Recruitment Lead - IT", loc: "Remote/Pune", exp: "5-7 Years", type: "Contract" },
        { title: "Compliance Associate", loc: "Mumbai", exp: "3-5 Years", type: "Full Time" },
    ];

    return (
        <div>
            <Breadcrumb title="Careers" />

            {/* Hero Intro */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center max-w-3xl">
                    <h2 className="text-4xl font-bold mb-6">Build Your Career with HRTS</h2>
                    <p className="text-gray-500 text-lg">
                        Join a team of driven professionals and work with India's top brands. We value integrity, efficiency, and continuous growth.
                    </p>
                </div>
            </section>

            {/* active Jobs */}
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold">Latest Openings</h2>
                            <p className="text-gray-500 mt-2">Find your next big opportunity today.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {jobs.map((job, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-hrts-blue mb-2">{job.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 font-medium">
                                        <span className="flex items-center gap-1"><MapPin size={16} /> {job.loc}</span>
                                        <span className="flex items-center gap-1"><Clock size={16} /> {job.exp}</span>
                                        <span className="bg-hrts-orange/10 text-hrts-orange px-3 py-1 rounded-full text-xs font-bold uppercase">{job.type}</span>
                                    </div>
                                </div>
                                <button className="btn-primary py-2 text-sm whitespace-nowrap">Apply Now</button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resume Submission */}
            <section className="py-24 bg-hrts-blue text-white overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-20 items-center">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-bold mb-6">Submit Your Resume</h2>
                            <p className="text-white/60 text-lg mb-10">
                                Don't see a matching role? Submit your profile for future opportunities. Our team will reach out when a suitable position opens up.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { t: "Pan-India Exposure", d: "Work on domestic and international projects." },
                                    { t: "Fast Hiring Process", d: "Transparent and efficient recruitment cycles." },
                                    { t: "Top Brand Clients", d: "Build your resume by working with industry leaders." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-6 h-6 bg-hrts-orange rounded-full flex items-center justify-center text-white shrink-0 mt-1">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold">{item.t}</h4>
                                            <p className="text-white/40 text-sm">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-1/2 w-full">
                            <div className="bg-white p-10 rounded-3xl shadow-2xl text-gray-800">
                                {!submitted ? (
                                    <form className="space-y-6" onSubmit={simulateUpload}>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Full Name</label>
                                                <input required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-hrts-orange outline-none transition-all" />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-gray-700">Email Address</label>
                                                <input required type="email" className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-hrts-orange outline-none transition-all" />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-gray-700">Preferred Role</label>
                                            <input required className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-hrts-orange outline-none transition-all" placeholder="e.g. HR Manager, Recruiter" />
                                        </div>

                                        <div className="space-y-2 text-center">
                                            <label className="text-sm font-bold text-gray-700 mb-4 block text-left">Upload Resume (PDF/DOC)</label>
                                            <div className="border-2 border-dashed border-gray-200 rounded-2xl p-8 hover:border-hrts-orange transition-colors cursor-pointer relative overflow-hidden group">
                                                <Upload className="mx-auto text-gray-400 group-hover:text-hrts-orange mb-4" size={40} />
                                                <p className="text-gray-500 text-sm group-hover:text-gray-800 transition-colors">Drag and drop or <span className="text-hrts-orange font-bold underline">Browse</span></p>
                                                <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer" required />
                                            </div>
                                        </div>

                                        {isUploading && (
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-xs font-bold text-hrts-blue">
                                                    <span>Uploading Resume...</span>
                                                    <span>{progress}%</span>
                                                </div>
                                                <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        className="h-full bg-hrts-orange"
                                                        style={{ width: `${progress}%` }}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        <button
                                            type="submit"
                                            disabled={isUploading}
                                            className="w-full bg-hrts-orange text-white py-4 rounded-xl font-bold shadow-xl hover:translate-y-[-2px] active:scale-95 transition-all disabled:opacity-50"
                                        >
                                            {isUploading ? "Processing..." : "Submit Application"}
                                        </button>
                                    </form>
                                ) : (
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="text-center py-10"
                                    >
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 size={40} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-hrts-blue mb-4">Application Submitted!</h3>
                                        <p className="text-gray-500 mb-8">Thank you for your interest. Our recruitment team will review your profile and get back to you soon.</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-hrts-orange font-bold underline"
                                        >
                                            Submit another resume
                                        </button>
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
