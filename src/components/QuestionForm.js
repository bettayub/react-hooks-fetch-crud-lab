import React, { useState } from "react";

function QuestionForm() {
  const [formData, setFormData] = useState({
    prompt: "",
    answer1: "",
    answer2: "",
    answer3: "",
    answer4: "",
    correctIndex: 0,
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    fetch("http://localhost:4000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: formData.prompt,
        answers: [
          formData.answer1,
          formData.answer2,
          formData.answer3,
          formData.answer4,
        ],
        correctIndex: parseInt(formData.correctIndex),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Assuming the API returns the newly created question object
        // Update the state with the new question
        // Note: You may need to handle errors or validation here
      });
  }

  // Rest of the JSX code for the form
}

export default QuestionForm;
