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
}
