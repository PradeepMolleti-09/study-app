import React from 'react';
import { motion } from 'framer-motion';

const StatCard = ({ number, label, suffix = "" }) => {
    return (
        <div className="flex flex-col items-center text-center p-6 bg-white border-r last:border-0 border-gray-100">
            <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold text-hrts-blue mb-2"
            >
                {number}{suffix}
            </motion.h3>
            <p className="text-gray-500 font-medium">{label}</p>
        </div>
    );
};

const Stats = () => {
    const stats = [
        { number: "18", suffix: "+", label: "Years Experience" },
        { number: "50", suffix: "+", label: "Clients" },
        { number: "50,000", suffix: "+", label: "Professionals Placed" },
        { number: "125", suffix: " Cr", label: "Turnover (FY 24-25)" },
    ];

    return (
        <div className="relative z-20 -mt-10 mb-20">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-xl shadow-2xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 overflow-hidden border border-gray-100">
                    {stats.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;
