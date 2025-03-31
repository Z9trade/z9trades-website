import { useState, useEffect } from "react";

export const useScrollSpy = (sectionIds: string[], offset = 0) => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "";

            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const { top } = element.getBoundingClientRect();
                    if (top <= offset) {
                        currentSection = id;
                    }
                }
            }
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Run on mount
        return () => window.removeEventListener("scroll", handleScroll);
    }, [sectionIds, offset]);

    return activeSection;
};
