const TECH_KEYWORDS = [
  // Languages
  "javascript",
  "typescript",
  "python",
  "java",
  "php",
  "ruby",
  "go",
  "rust",
  "c#",
  "c++",
  // Frontend
  "react",
  "vue",
  "angular",
  "nextjs",
  "nuxt",
  "svelte",
  "html",
  "css",
  "tailwind",
  "bootstrap",
  // Backend
  "node",
  "express",
  "nestjs",
  "fastapi",
  "django",
  "laravel",
  "spring",
  // Database
  "postgresql",
  "mysql",
  "mongodb",
  "redis",
  "sqlite",
  "prisma",
  "sequelize",
  // Tools
  "git",
  "docker",
  "kubernetes",
  "aws",
  "gcp",
  "azure",
  "ci/cd",
  "jest",
  "vitest",
  // Other
  "rest",
  "graphql",
  "websocket",
  "socket.io",
  "api",
  "microservices",
];

export const parseJobDescription = (text) => {
  const lower = text.toLowerCase();
  return TECH_KEYWORDS.filter((keyword) => lower.includes(keyword));
};

export const parseCV = (text) => {
  const lower = text.toLowerCase();
  return TECH_KEYWORDS.filter((keyword) => lower.includes(keyword));
};
