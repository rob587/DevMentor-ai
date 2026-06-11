export default function GitHubSummary({ github }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 flex flex-col gap-4">
      <p className="text-gray-400 text-sm">{"🐙"} GitHub Summary</p>

      {/* Stats */}
      <div className="flex gap-4">
        <div className="bg-gray-800 rounded-lg p-4 flex-1 text-center">
          <p className="text-3xl font-bold text-indigo-400">
            {github.totalRepos}
          </p>
          <p className="text-gray-400 text-sm mt-1">Repository</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 flex-1 text-center">
          <p className="text-3xl font-bold text-indigo-400">
            {github.languages.length}
          </p>
          <p className="text-gray-400 text-sm mt-1">Linguaggi</p>
        </div>
      </div>

      {/* Languages */}
      <div>
        <p className="text-sm text-gray-400 mb-2">Linguaggi principali</p>
        <div className="flex flex-wrap gap-2">
          {github.languages.map((lang) => (
            <span
              key={lang}
              className="bg-indigo-900 text-indigo-300 text-sm px-3 py-1 rounded-full"
            >
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Top Repos */}
      <div>
        <p className="text-sm text-gray-400 mb-2">Top repositories</p>
        <div className="flex flex-col gap-2">
          {github.topRepos.map((repo) => (
            <a
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-700 rounded-lg px-4 py-3 flex justify-between items-center transition-colors"
            >
              <span className="text-white font-medium">{repo.name}</span>
              <span className="text-yellow-400 text-sm">
                {"⭐"} {repo.stars}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
