"use client";

import { useState } from "react";
import Link from "next/link";

export default function SelfAssessment() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);

  // Official PHQ-9 Question Set
  const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself — or that you are a failure?",
    "Trouble concentrating on things, such as reading or watching TV?",
    "Moving or speaking so slowly that other people could have noticed?",
    "Thoughts that you would be better off dead, or of hurting yourself?"
  ];

  const handleAnswer = (points: number) => {
    setScore(score + points);
    setStep(step + 1);
  };

  // Backend Clinical Scoring Logic based on PHQ-9 standards
  const getResults = () => {
    // 0-4: Minimal
    if (score <= 4) return { 
      label: "Minimal Symptoms", 
      advice: "You have a solid foundation. Our 'Ignite Your Life' blueprint can help you stay proactive and balanced.", 
      link: "/programs/ignite" 
    };
    // 5-9: Mild
    if (score <= 9) return { 
      label: "Mild Symptoms", 
      advice: "You may be feeling slightly overwhelmed. A structured transformation can help you reclaim your spark.", 
      link: "/programs/ignite" 
    };
    // 10-14: Moderate
    if (score <= 14) return { 
      label: "Moderate Symptoms", 
      advice: "These symptoms are significant. We recommend our 'Guilt Free' program or a specialized therapy session.", 
      link: "/programs/guilt-free" 
    };
    // 15+: Moderately Severe to Severe
    return { 
      label: "Moderately Severe to Severe", 
      advice: "Your well-being is a priority. Please book a clinical consultation immediately for professional support.", 
      link: "/contact" 
    };
  };

  const results = getResults();

  return (
    <main className="min-h-screen py-20 px-6 bg-muted flex items-center justify-center">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 border border-border">
        {step < questions.length ? (
          <>
            <div className="mb-8 text-center">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange bg-brand-orange/10 px-3 py-1 rounded-full">
                Clinical Screening: Question {step + 1} of {questions.length}
              </span>
              <p className="text-xs text-subtext mt-4 italic">Over the last 2 weeks, how often have you been bothered by:</p>
              <h2 className="text-2xl font-bold text-ink mt-2 leading-tight">
                {questions[step]}
              </h2>
            </div>
            
            <div className="grid gap-3">
              {[
                { label: "Not at all", p: 0 },
                { label: "Several days", p: 1 },
                { label: "More than half the days", p: 2 },
                { label: "Nearly every day", p: 3 }
              ].map((option) => (
                <button 
                  key={option.p}
                  onClick={() => handleAnswer(option.p)} 
                  className="w-full text-left p-5 rounded-2xl border border-border hover:bg-brand-blue hover:text-white transition-all font-medium group flex justify-between items-center"
                >
                  <span>{option.label}</span>
                  <span className="text-xs opacity-0 group-hover:opacity-50 transition-opacity">Score: +{option.p}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-6">🌿</div>
            <h2 className="text-sm font-bold text-brand-orange uppercase mb-2 tracking-widest">Assessment Result</h2>
            <p className="text-3xl font-bold text-ink mb-4">{results.label}</p>
            <p className="text-subtext mb-10 leading-relaxed max-w-md mx-auto">
              {results.advice}
            </p>
            
            <div className="flex flex-col gap-4">
              <Link href={results.link} className="bg-brand-blue text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-opacity-90 transition-all">
                Proceed to Recommended Support
              </Link>
              <Link href="/" className="text-sm font-semibold text-subtext hover:text-brand-blue transition-colors">
                ← Return to Home
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}