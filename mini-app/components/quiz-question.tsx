import { Button } from "@/components/ui/button";

type Props = {
  question: {
    text: string;
    options: { label: string; princess: string }[];
  };
  onAnswer: (princess: string) => void;
};

export default function QuizQuestion({ question, onAnswer }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{question.text}</h2>
      <div className="grid gap-2">
        {question.options.map((opt) => (
          <Button
            key={opt.princess}
            variant="outline"
            onClick={() => onAnswer(opt.princess)}
          >
            {opt.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
