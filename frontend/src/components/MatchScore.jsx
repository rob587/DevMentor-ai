export default function MatchScore({ score }) {
  const getColor = () => {
    if (score >= 70) return "text-green-400";
    if (score >= 40) return "text-yellow-400";
    return "text-red-400";
  };

  const getMessage = () => {
    if (score >= 70) return "Ottima compatibilità! 🔥";
    if (score >= 40) return "Compatibilità discreta, puoi migliorare 💪";
    return "Bassa compatibilità, lavora sulle skill mancanti 📚";
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 text-center">
      <p className="text-gray-400 text-sm mb-2">Match Score</p>
      <p className={`text-7xl font-bold ${getColor()}`}>{score}%</p>
      <p className="text-gray-300 mt-3">{getMessage()}</p>
    </div>
  );
}
