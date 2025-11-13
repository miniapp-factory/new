import { useState } from "react";
import QuizQuestion from "./quiz-question";
import QuizResult from "./quiz-result";
import { Button } from "@/components/ui/button";

type Question = {
  text: string;
  options: { label: string; princess: string }[];
};

const questions: Question[] = [
  {
    text: "What is your favorite type of adventure?",
    options: [
      { label: "Exploring enchanted forests", princess: "Cinderella" },
      { label: "Sailing the seas", princess: "Ariel" },
      { label: "Discovering hidden treasures", princess: "Rapunzel" },
      { label: "Helping others", princess: "Belle" },
    ],
  },
  {
    text: "Which trait describes you best?",
    options: [
      { label: "Kind and resilient", princess: "Cinderella" },
      { label: "Curious and brave", princess: "Ariel" },
      { label: "Creative and free-spirited", princess: "Rapunzel" },
      { label: "Intelligent and compassionate", princess: "Belle" },
    ],
  },
  {
    text: "What is your favorite pastime?",
    options: [
      { label: "Reading books", princess: "Belle" },
      { label: "Dancing", princess: "Cinderella" },
      { label: "Swimming", princess: "Ariel" },
      { label: "Painting", princess: "Rapunzel" },
    ],
  },
  {
    text: "How do you handle challenges?",
    options: [
      { label: "Stay hopeful", princess: "Cinderella" },
      { label: "Seek knowledge", princess: "Belle" },
      { label: "Take risks", princess: "Ariel" },
      { label: "Find creative solutions", princess: "Rapunzel" },
    ],
  },
  {
    text: "What is your dream?",
    options: [
      { label: "A fairytale ending", princess: "Cinderella" },
      { label: "A grand adventure", princess: "Ariel" },
      { label: "A world of stories", princess: "Belle" },
      { label: "A place where I can shine", princess: "Rapunzel" },
    ],
  },
];

export default function Quiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const handleAnswer = (princess: string) => {
    const newAnswers = [...answers, princess];
    setAnswers(newAnswers);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      const counts: Record<string, number> = {};
      newAnswers.forEach((p) => {
        counts[p] = (counts[p] || 0) + 1;
      });
      const most = Object.entries(counts).reduce((a, b) =>
        b[1] > a[1] ? b : a
      )[0];
      setResult(most);
    }
  };

  if (result) {
    return <QuizResult princess={result} />;
  }

  return (
    <div className="w-full max-w-md">
      <QuizQuestion
        question={questions[current]}
        onAnswer={handleAnswer}
      />
      <div className="mt-4 flex justify-between">
        <Button
          variant="outline"
          disabled={current === 0}
          onClick={() => setCurrent(current - 1)}
        >
          Back
        </Button>
        <Button
          variant="outline"
          disabled={answers.length === current}
          onClick={() => handleAnswer(answers[current])}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
