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
    <section className="min-h-[70vh] flex flex-col justify-center px-4 py-12">
      <div className="w-full max-w-lg mx-auto">
        <div className="mb-4 flex justify-between text-sm text-skin-muted">
          <span>質問 {currentIndex + 1} / {QUESTIONS.length}</span>
        </div>
        <div className="h-1.5 bg-skin-muted rounded-full overflow-hidden mb-8">
          <div
            className="h-full bg-skin-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <Card className="border-skin-border bg-skin-card">
          <CardHeader>
            <h2 className="text-lg font-semibold text-skin-foreground">
              {question.text}
            </h2>
          </CardHeader>
          <CardContent className="space-y-2">
            {question.choices.map((choice, i) => (
              <Button
                key={i}
                variant="outline"
                className="w-full justify-start h-auto py-3 px-4 text-left border-skin-border hover:bg-skin-accent hover:border-skin-primary"
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
