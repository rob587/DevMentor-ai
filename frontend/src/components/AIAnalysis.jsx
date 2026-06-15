export default function AIAnalysis({ analysis }) {
  if (!analysis) return null;

  const sections = [
    {
      title: "Punti di forza",
      emoji: "💪",
      items: analysis.strengths,
      color: "text-green-400",
    },
    {
      title: "Punti deboli",
      emoji: "⚠️",
      items: analysis.weaknesses,
      color: "text-red-400",
    },
    {
      title: "Raccomandazioni",
      emoji: "🎯",
      items: analysis.recommendations,
      color: "text-indigo-400",
    },
    {
      title: "Tips per il CV",
      emoji: "📄",
      items: analysis.cvTips,
      color: "text-yellow-400",
    },
    {
      title: "Learning Roadmap",
      emoji: "🗺️",
      items: analysis.learningRoadmap,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => (
        <div
          key={section.title}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6"
        >
          <p className={`font-semibold mb-3 ${section.color}`}>
            {section.emoji} {section.title}
          </p>
          <ul className="flex flex-col gap-2">
            {section.items.map((item, index) => (
              <li key={index} className="text-gray-300 text-sm flex gap-2">
                <span className="text-gray-600">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
