import React, { useState } from "react";
import { FaUser, FaPhone, FaCalendarAlt, FaEnvelope, FaKey, FaGlobe, FaTextHeight, FaHashtag, FaClock, FaPalette, FaAlignLeft } from "react-icons/fa";
import Select from "react-select";
import { useHubotSansFont } from "./useHubotSansFont";

// IconField Component
export const IconField = ({ type, value, onChange, placeholder, options, inputStyles, placeholderColor, iconColor }) => {
    useHubotSansFont();

    const [isFocused, setIsFocused] = useState(false);

    const getIcon = () => {
        switch (type) {
            case "tel":
                return <FaPhone />;
            case "date":
                return <FaCalendarAlt />;
            case "email":
                return <FaEnvelope />;
            case "password":
                return <FaKey />;
            case "url":
                return <FaGlobe />;
            case "number":
                return <FaHashtag />;
            case "time":
                return <FaClock />;
            case "color":
                return <FaPalette />;
            case "multiselect":
            case "singleselect":
                return <FaTextHeight />;
            case "longtext":
                return <FaAlignLeft />;
            default:
                return <FaUser />;
        }
    };

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    if (type === "multiselect" || type === "singleselect") {
        return (
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%" }}>
                    <span style={{ position: "absolute", top: "16px", left: "14px", color: iconColor, pointerEvents: "none", fontSize: `${inputStyles.fontSize}px` }}>
                        {getIcon()}
                    </span>
                    <div style={{ width: "100%" }}>
                        <Select
                            isMulti={type === "multiselect"}
                            value={value}
                            onChange={onChange}
                            options={options}
                            placeholder={placeholder}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            styles={{
                                control: (base, state) => ({
                                    ...base,
                                    paddingLeft: "40px",
                                    paddingTop: "18px",
                                    paddingBottom: "18px",
                                    fontSize: `${inputStyles.fontSize}px`,
                                    lineHeight: "1.5",
                                    color: inputStyles.color,
                                    backgroundColor: inputStyles.backgroundColor,
                                    borderRadius: `${inputStyles.borderRadius}px`,
                                    border: state.isFocused
                                        ? `1px solid ${inputStyles.borderColorFocused}`
                                        : `1px solid ${inputStyles.borderColor}`,
                                    boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                                    fontFamily: inputStyles.fontFamily,
                                    fontWeight: inputStyles.fontWeight,
                                    minHeight: "48px",
                                    display: "flex",
                                    alignItems: "center",
                                    width: "100%",
                                }),
                                multiValue: (styles) => ({
                                    ...styles,
                                    backgroundColor: "#f0f0f0",
                                    borderRadius: "8px",
                                    color: "#1A0C36",
                                    fontFamily: inputStyles.fontFamily,
                                }),
                                placeholder: (base) => ({
                                    ...base,
                                    color: placeholderColor,
                                }),
                            }}
                        />
                    </div>
                </div>
            </div>
        );
    }

    if (type === "checkbox") {
        return (
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%" }}>
                <input
                    type="checkbox"
                    checked={value}
                    onChange={onChange}
                    style={{ marginRight: "10px", width: "20px", height: "20px", borderRadius: "4px", border: "1px solid #d2d6dc" }}
                />
                <label style={{ fontFamily: inputStyles.fontFamily, color: inputStyles.color, fontSize: `${inputStyles.fontSize}px`, fontWeight: inputStyles.fontWeight }}>
                    {placeholder}
                </label>
            </div>
        );
    }

    if (type === "longtext") {
        return (
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ position: "relative", display: "flex", alignItems: "flex-start", width: "100%" }}>
                    <span style={{ position: "absolute", top: "16px", left: "14px", color: iconColor, pointerEvents: "none", fontSize: `${inputStyles.fontSize}px` }}>
                        {getIcon()}
                    </span>
                    <textarea
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        style={{
                            padding: "18px 20px 18px 40px",
                            fontSize: `${inputStyles.fontSize}px`,
                            lineHeight: "1.5",
                            color: inputStyles.color,
                            backgroundColor: inputStyles.backgroundColor,
                            borderRadius: `${inputStyles.borderRadius}px`,
                            border: isFocused ? `1px solid ${inputStyles.borderColorFocused}` : `1px solid ${inputStyles.borderColor}`,
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                            fontFamily: inputStyles.fontFamily,
                            fontWeight: inputStyles.fontWeight,
                            width: "100%",
                            height: "100px",
                        }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
            <div style={{ position: "relative", display: "flex", alignItems: "center", width: "100%" }}>
                <span style={{ position: "absolute", top: "16px", left: "14px", color: iconColor, pointerEvents: "none" }}>
                    {getIcon()}
                </span>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    style={{
                        padding: "18px 20px 18px 40px",
                        fontSize: `${inputStyles.fontSize}px`,
                        lineHeight: "1.5",
                        color: inputStyles.color,
                        backgroundColor: inputStyles.backgroundColor,
                        borderRadius: `${inputStyles.borderRadius}px`,
                        border: isFocused ? `1px solid ${inputStyles.borderColorFocused}` : `1px solid ${inputStyles.borderColor}`,
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
                        fontFamily: inputStyles.fontFamily,
                        fontWeight: inputStyles.fontWeight,
                        width: "100%",
                        height: "48px",
                    }}
                />
            </div>
        </div>
    );
};
