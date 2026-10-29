"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { roadSigns } from "@/features/road-signs/data/roadSigns";



export default function LearnRoadSignsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const sign = roadSigns[currentIndex];

  const progress = Math.round(
    ((currentIndex + 1) / roadSigns.length) * 100
  );

  const nextSign = () => {
    if (currentIndex < roadSigns.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const previousSign = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress */}
      <div className="mb-8">
        <p className="text-sm text-slate-500">
          Sign {currentIndex + 1} of {roadSigns.length}
        </p>
<p className="text-slate-500 text-sm mt-3 text-center">
  Study the shape, colour and symbol carefully.
</p>
        <div className="w-full bg-slate-200 h-3 rounded-full mt-2">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="flex justify-between mt-2 text-sm text-slate-500">
  <span>
    {progress}% Complete
  </span>

  <span>
    {currentIndex + 1} / {roadSigns.length}
  </span>
</div>
      </div>

      {/* Main Card */}
      <div className="bg-white p-8 md:p-10 rounded-3xl border shadow-sm">
        {/* Image */}
        <div className="flex justify-center mb-8">
         <Image
  src={sign.image}
  alt={sign.name}
  width={250}
  height={250}
  className="rounded-2xl border shadow-sm"
  priority
/>
    </div>

        {/* Sign Details */}
        <div className="flex justify-center gap-3 mt-4">
 <h1 className="text-3xl md:text-5xl font-bold text-center mt-6">
  {sign.name}
</h1>

 <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
    {sign.category}
  </span>

  <span className="px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
    Sign {currentIndex + 1}
  </span>
</div>
        </div>

        {/* Study Notes */}
        <div className="mt-8 space-y-4">
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <h3 className="font-bold text-blue-700">
              Meaning
            </h3>

            <p className="mt-2">
              {sign.meaning}
            </p>
          </div>

          <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
            <h3 className="font-bold text-green-700">
              Examiner Expects
            </h3>

            <p className="mt-2">
              {sign.examiner}
            </p>
          </div>

          <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
            <h3 className="font-bold text-red-700">
              Common Mistake
            </h3>

            <p className="mt-2">
              {sign.mistake}
            </p>
          </div>
        </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        <button
          onClick={previousSign}
          disabled={currentIndex === 0}
          className="
            px-6 py-3
            rounded-xl
            border
            bg-white
            hover:bg-slate-50
            disabled:opacity-50
            disabled:cursor-not-allowed
          "
        >
          ← Previous
        </button>

        {currentIndex === roadSigns.length - 1 ? (
          <Link
            href="/dashboard/road-signs/quiz"
            className="
              px-6 py-3
              rounded-xl
              bg-green-600
              hover:bg-green-700
              text-white
            "
          >
            Start Quiz
          </Link>
        ) : (
          <button
            onClick={nextSign}
            className="
              px-6 py-3
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
            "
          >
            Next →
          </button>
        )}
      </div>
    </div>
  );
}