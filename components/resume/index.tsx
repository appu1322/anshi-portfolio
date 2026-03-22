import React, { FC } from 'react';
import { Download } from "lucide-react";

interface ResumeProps {
    isResponsive?: boolean;
}

const Resume: FC<ResumeProps> = ({ isResponsive = false }) => {
    return (
        <a
            href="/Apoorv_Saxena_Resume.pdf"
            target="_blank"
            className={`hidden ${isResponsive ? "inline-flex" : ""} items-center justify-center gap-2 px-4 py-2 rounded-lg
             border border-black/10 dark:border-white/10
             text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition`}
        >
            <Download size={16} />
            Resume
        </a>
    )
}

export default Resume