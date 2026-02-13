"use client";

import { useState, useCallback } from "react";
import type { Choice } from "@/data/diagnosis";
import { QUESTIONS, calculateResult } from "@/data/diagnosis";
import type { SkinTypeId } from "@/data/diagnosis";
import { Hero } from "./Hero";
import { DiagnosisQuiz } from "./DiagnosisQuiz";
import { ResultCard } from "./ResultCard";
import { OtherTypesScroll } from "./OtherTypesScroll";
import { EventFlyer } from "./EventFlyer";
import { ApplicationForm } from "./ApplicationForm";
import { ApplicationComplete } from "./ApplicationComplete";

type Step =
  | "hero"
  | "quiz"
  | "result"
  | "flyer"
  | "form"
  | "complete";

export function DiagnosisLp() {
  const [step, setStep] = useState<Step>("hero");
  const [quizIndex, setQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Choice>>({});
  const [resultType, setResultType] = useState<SkinTypeId | null>(null);

  const handleStart = useCallback(() => setStep("quiz"), []);

  const handleAnswer = useCallback((questionId: number, choice: Choice) => {
    setAnswers((prev) => ({ ...prev, [questionId]: choice }));
    if (quizIndex >= QUESTIONS.length - 1) {
      const final = { ...answers, [questionId]: choice };
      setResultType(calculateResult(final));
      setStep("result");
    } else {
      setQuizIndex((i) => i + 1);
    }
  }, [quizIndex, answers]);

  const handleApplicationSubmit = useCallback(() => setStep("complete"), []);
  const handleBackToTop = useCallback(() => {
    setStep("hero");
    setQuizIndex(0);
    setAnswers({});
    setResultType(null);
  }, []);

  const handleQuizBack = useCallback(() => {
    if (quizIndex <= 0) {
      setStep("hero");
      setQuizIndex(0);
      setAnswers({});
    } else {
      setQuizIndex((i) => i - 1);
    }
  }, [quizIndex]);

  if (step === "complete") {
    return (
      <main className="min-h-screen bg-skin-background">
        <ApplicationComplete onBack={handleBackToTop} />
      </main>
    );
  }

  if (step === "hero") {
    return (
      <main className="min-h-screen bg-skin-background">
        <Hero onStart={handleStart} />
      </main>
    );
  }

  if (step === "quiz") {
    return (
      <main className="min-h-screen bg-skin-background">
        <DiagnosisQuiz
          currentIndex={quizIndex}
          answers={answers}
          onAnswer={handleAnswer}
          onBack={handleQuizBack}
        />
      </main>
    );
  }

  // result → flyer → form (scrollable single page)
  return (
    <main className="min-h-screen bg-skin-background">
      {resultType && (
        <>
          <ResultCard skinTypeId={resultType} />
          <OtherTypesScroll currentTypeId={resultType} />
          <EventFlyer />
          <ApplicationForm onSubmit={handleApplicationSubmit} />
        </>
      )}
    </main>
  );
}
