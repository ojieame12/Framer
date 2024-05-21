import { useEffect } from "react";

// Custom hook to load Hubot Sans font
export const useHubotSansFont = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://fonts.googleapis.com/css2?family=Hubot+Sans&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);
    }, []);
};
