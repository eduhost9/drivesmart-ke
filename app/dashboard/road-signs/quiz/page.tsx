"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { roadSigns } from "@/features/road-signs/data/roadSigns";

export default function RoadSignsQuizPage() {
  const [questions, setQuestions] = useState<
  typeof roadSigns
>([]);

useEffect(() => {
  const shuffled = [...roadSigns]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  setQuestions(shuffled);
}, []);

  const [currentQuestion, setCurrentQuestion] =
    useState(0);

  const [selectedAnswer, setSelectedAnswer] =
    useState("");

  const [score, setScore] = useState(0);

  const [showFeedback, setShowFeedback] =
    useState(false);

  const [quizFinished, setQuizFinished] =
    useState(false);
if (questions.length === 0) {
  return (
    <div className="text-center mt-20">
      Loading Quiz...
    </div>
  );
}
  const sign = questions[currentQuestion];

  if (!sign) {
    return null;
  }

  const generateChoices = () => {
    const wrongAnswers = roadSigns
      .filter((s) => s.id !== sign.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3)
      .map((s) => s.name);

    return [...wrongAnswers, sign.name]
      .sort(() => Math.random() - 0.5);
  };

  const choices = generateChoices();

  const handleSubmit = () => {
    if (!selectedAnswer) return;

    if (selectedAnswer === sign.name) {
      setScore((prev) => prev + 1);
    }

    setShowFeedback(true);
  };

  const nextQuestion = () => {
    if (currentQuestion >= questions.length - 1) {
      setQuizFinished(true);
      return;
    }

    setSelectedAnswer("");
    setShowFeedback(false);
    setCurrentQuestion((prev) => prev + 1);
  };

  if (quizFinished) {
    const percentage = Math.round(
      (score / questions.length) * 100
    );

    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-3xl border">

          <h1 className="text-4xl font-bold text-center">
            Quiz Complete
          </h1>

          <p className="text-center mt-6 text-2xl">
            Score: {score}/{questions.length}
          </p>

          <p className="text-center mt-4">
            {percentage}%
          </p>

          <div className="text-center mt-8">
            <button
              onClick={() => window.location.reload()}
              className="
                px-6 py-3
                bg-blue-600
                text-white
                rounded-xl
              "
            >
              Retake Quiz
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">

      <p className="text-sm text-slate-500 mb-6">
        Question {currentQuestion + 1} of 10
      </p>

      <div className="bg-white p-8 rounded-3xl border">

        <div className="flex justify-center mb-8">
          <Image
            src={sign.image}
            alt={sign.name}
            width={220}
            height={220}
          />
        </div>

        <h2 className="text-2xl font-bold text-center">
          What does this sign indicate?
        </h2>

        <div className="space-y-3 mt-8">

          {choices.map((choice) => (
            <button
              key={choice}
              onClick={() =>
                setSelectedAnswer(choice)
              }
              className={`
                w-full
                text-left
                border
                rounded-xl
                p-4
                ${
                  selectedAnswer === choice
                    ? "border-blue-600 bg-blue-50"
                    : ""
                }
              `}
            >
              {choice}
            </button>
          ))}

        </div>

        {!showFeedback ? (
          <button
            onClick={handleSubmit}
            className="
              mt-6
              w-full
              bg-blue-600
              text-white
              py-3
              rounded-xl
            "
          >
            Submit
          </button>
        ) : (
          <div className="mt-6">

            <div
              className={`p-4 rounded-xl ${
                selectedAnswer === sign.name
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {selectedAnswer === sign.name
                ? "Correct!"
                : `Incorrect. Answer: ${sign.name}`}
            </div>

            <button
              onClick={nextQuestion}
              className="
                mt-4
                w-full
                bg-green-600
                text-white
                py-3
                rounded-xl
              "
            >
              Next Question
            </button>

          </div>
        )}

      </div>

    </div>
  );
}