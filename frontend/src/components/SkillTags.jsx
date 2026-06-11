export default function SkillTags({ matched, missing }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4">
      {/* Matched */}
      <div>
        <p className="text-sm text-gray-400 mb-2">✅ Skill trovate</p>
        <div className="flex flex-wrap gap-2">
          {matched.map((skill) => (
            <span
              key={skill}
              className="bg-green-900 text-green-300 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Missing */}
      <div>
        <p className="text-sm text-gray-400 mb-2">❌ Skill mancanti</p>
        <div className="flex flex-wrap gap-2">
          {missing.map((skill) => (
            <span
              key={skill}
              className="bg-red-900 text-red-300 text-sm px-3 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
