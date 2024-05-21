import React from "react";
import { motion } from "framer-motion";

export const SubmitButton = ({
    handleSubmit,
    buttonText,
    buttonFontSize,
    buttonFontWeight,
    buttonColor,
    buttonBackgroundColor,
    buttonBorderColor,
    buttonBorderRadius,
    buttonHoverBackgroundColor,
    fontFamily,
}) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.05,
                backgroundColor: buttonHoverBackgroundColor,
            }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            style={{
                justifyContent: "center",
                alignItems: "center",
                padding: "18px 20px",
                fontSize: `${buttonFontSize}px`,
                fontWeight: buttonFontWeight,
                color: buttonColor,
                backgroundColor: buttonBackgroundColor,
                borderRadius: `${buttonBorderRadius}px`,
                border: `1px solid ${buttonBorderColor}`,
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                fontFamily,
                width: "100%",
                cursor: "pointer",
            }}
            onClick={handleSubmit}
        >
            {buttonText}
        </motion.button>
    );
};
