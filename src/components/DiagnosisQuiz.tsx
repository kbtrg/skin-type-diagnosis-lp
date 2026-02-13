"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { Choice, Question } from "@/data/diagnosis";
import { QUESTIONS } from "@/data/diagnosis";

interface DiagnosisQuizProps {
  currentIndex: number;
  answers: Record<number, Choice>;
  onAnswer: (questionId: number, choice: Choice) => void;
}

export function DiagnosisQuiz({
  currentIndex,
  answers,
  onAnswer,
}: DiagnosisQuizProps) {
  const question = QUESTIONS[currentIndex];
  if (!question) return null;

  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;

  return (
    <section className="min-h-[80vh] flex flex-col justify-center px-4 py-16">
      <div className="w-full max-w-xl mx-auto">
        <p className="font-serif text-xs tracking-[0.15em] text-skin-muted uppercase mb-3">
          質問 {currentIndex + 1} / {QUESTIONS.length}
        </p>
        <div className="h-1 bg-skin-border rounded-full overflow-hidden mb-10">
          <div
            className="h-full bg-skin-brand rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <Card className="border-skin-border bg-skin-card shadow-sm overflow-hidden">
          <CardHeader className="pb-2 pt-8 px-8">
            <h2 className="font-serif text-xl text-skin-foreground leading-relaxed">
              {question.text}
            </h2>
          </CardHeader>
          <CardContent className="space-y-3 px-8 pb-8">
            {question.choices.map((choice, i) => (
              <Button
                key={i}
                variant="outline"
                className="w-full justify-start h-auto py-4 px-5 text-left border-skin-border bg-white hover:bg-skin-accent hover:border-skin-brand-muted text-skin-foreground font-normal rounded-md transition-colors"
                onClick={() => onAnswer(question.id, choice)}
              >
                {choice.text}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
