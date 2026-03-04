import React from 'react';
import { motion } from 'framer-motion';
import ProfileCell from './cells/ProfileCell';
import TerminalCell from './cells/TerminalCell';
import TechStackCell from './cells/TechStackCell';
import StatsCell from './cells/StatsCell';
import ProjectCell from './cells/ProjectCell';
import DataVizCell from './cells/DataVizCell';
import ContactCell from './cells/ContactCell';
import ExperienceCell from './cells/ExperienceCell';

const BentoGrid = ({ onProjectClick, onExperienceClick, onTechStackClick }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
            {/* Row 1 */}
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 row-span-2">
                <ProfileCell />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
                <TerminalCell />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
                <ProjectCell onClick={onProjectClick} />
            </motion.div>

            {/* Row 2, 3, 4 - Experience Extension placed on right side */}
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2 row-span-3">
                <ExperienceCell onClick={onExperienceClick} />
            </motion.div>

            {/* Row 3 - TechStack placed below Profile */}
            <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
                <TechStackCell onClick={onTechStackClick} />
            </motion.div>

            {/* Row 4 - Stats and Contact placed below TechStack */}
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
                <StatsCell />
            </motion.div>
            <motion.div variants={itemVariants} className="md:col-span-1 lg:col-span-1">
                <ContactCell />
            </motion.div>
        </motion.div>
    );
};

export default BentoGrid;
