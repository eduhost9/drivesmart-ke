import Link from "next/link";

export default function RoadSignsPage() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-3">
        Road Signs
      </h1>

      <p className="text-slate-500 mb-8">
        Learn road signs then take a quiz.
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <Link
          href="/dashboard/road-signs/learn"
          className="bg-white p-8 rounded-2xl border hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-3">
            📚 Study Signs
          </h2>

          <p className="text-slate-500">
            Learn signs one by one using guided lessons.
          </p>
        </Link>

        <Link
          href="/dashboard/road-signs/quiz"
          className="bg-white p-8 rounded-2xl border hover:shadow-lg transition"
        >
          <h2 className="text-2xl font-semibold mb-3">
            📝 Quiz
          </h2>

          <p className="text-slate-500">
            Test your understanding of signs.
          </p>
        </Link>

      </div>
    </div>
  );
}