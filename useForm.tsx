import { useState } from "react";

export const useForm = (layout, apiEndpoint) => {
    const initialValues = layout.map((row) => row.fields.map(() => ""));
    const [inputValues, setInputValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (rowIndex, colIndex) => (value) => {
        setInputValues((prevValues) => {
            const newValues = [...prevValues];
            if (layout[rowIndex].fields[colIndex].type === "checkbox") {
                newValues[rowIndex][colIndex] = value.target.checked;
            } else if (
                layout[rowIndex].fields[colIndex].type === "multiselect" ||
                layout[rowIndex].fields[colIndex].type === "singleselect"
            ) {
                newValues[rowIndex][colIndex] = value;
            } else {
                newValues[rowIndex][colIndex] = value.target.value;
            }
            return newValues;
        });
    };

    const validateForm = () => {
        const newErrors = {};
        layout.forEach((row, rowIndex) => {
            row.fields.forEach((field, colIndex) => {
                const value = inputValues[rowIndex][colIndex];
                if (field.type === "email" && !/\S+@\S+\.\S+/.test(value)) {
                    newErrors[`row${rowIndex}_col${colIndex}`] = "Invalid email address";
                }
                if (field.type === "tel" && !/^\+?\d{10,15}$/.test(value)) {
                    newErrors[`row${rowIndex}_col${colIndex}`] = "Invalid phone number";
                }
            });
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            const data = inputValues.map((row) =>
                row.map((value) =>
                    typeof value === "object" ? value.value : value
                )
            );

            const fields = {};
            layout.forEach((row, rowIndex) => {
                row.fields.forEach((field, colIndex) => {
                    fields[field.placeholder] = data[rowIndex][colIndex];
                });
            });

            const payload = {
                records: [{ fields: fields }],
            };

            const requestOptions = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            };

            fetch(apiEndpoint, requestOptions)
                .then((response) => response.json())
                .then((data) => {
                    alert(`Form submitted successfully: ${JSON.stringify(data)}`);
                    setSubmitted(true);
                })
                .catch((error) => {
                    alert(`Form submission error: ${error}`);
                });
        } else {
            alert("Form contains errors. Please fix them before submitting.");
        }
    };

    return { inputValues, errors, submitted, handleInputChange, handleSubmit };
};
