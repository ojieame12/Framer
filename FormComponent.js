import React from "react";
import { IconField } from "./IconField";

export const FormComponent = ({
    layout,
    inputStyles,
    inputPlaceholderColor,
    iconColor,
    handleInputChange,
    inputValues,
    errors,
}) => {
    return (
        <form
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                gap: `${inputStyles.gap}px`,
            }}
        >
            {layout.map((row, rowIndex) => (
                <div
                    key={rowIndex}
                    style={{
                        display: "flex",
                        gap: `${inputStyles.gap}px`,
                        width: "100%",
                    }}
                >
                    {row.fields.map((field, colIndex) => (
                        <div key={colIndex} style={{ flex: 1 }}>
                            <IconField
                                type={field.type}
                                value={inputValues[rowIndex][colIndex]}
                                onChange={handleInputChange(rowIndex, colIndex)}
                                placeholder={field.placeholder}
                                options={
                                    field.type === "multiselect" ||
                                    field.type === "singleselect"
                                        ? field.options.map((option) => ({
                                              label: option,
                                              value: option,
                                          }))
                                        : []
                                }
                                inputStyles={inputStyles}
                                placeholderColor={inputPlaceholderColor}
                                iconColor={iconColor}
                            />
                            {errors[`row${rowIndex}_col${colIndex}`] && (
                                <span
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                    }}
                                >
                                    {
                                        errors[`row${rowIndex}_col${colIndex}`]
                                    }
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            ))}
        </form>
    );
};
