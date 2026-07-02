DevMentor AI

Sistema di valutazione candidatura basato su dati reali + intelligenza artificiale

DevMentor AI analizza la compatibilità tra il tuo profilo e una job description, combinando dati GitHub, parsing del CV e analisi AI per fornirti un report completo sulla tua candidatura.

Features

Match Score — calcola la percentuale di compatibilità tra le tue skill e la job description
Skill Analysis — identifica le skill che hai e quelle mancanti rispetto al ruolo
GitHub Integration — analizza i tuoi repository, linguaggi e top repos tramite GitHub API
AI Analysis — genera punti di forza, punti deboli, raccomandazioni e learning roadmap
Cover Letter Generator — genera una lettera di presentazione personalizzata in italiano
PDF Upload — supporta upload del CV in formato PDF oltre al testo libero

Tech Stack

Backend

Node.js + Express — API REST
Groq SDK — AI con modello llama-3.3-70b-versatile
GitHub REST API — fetch dati profilo e repository
Multer — gestione upload file PDF
pdfjs-dist — estrazione testo da PDF

Frontend

React + Vite — UI moderna e veloce
React Router — navigazione tra pagine
Tailwind CSS — styling utility-first
Axios — chiamate HTTP

Come Funziona

Input utente
├── Job Description (testo libero)
├── CV (testo o PDF)
└── GitHub Username
│
▼
Backend Express
├── GitHub API → fetch repo, linguaggi, top repos
├── Parser → estrae keyword da JD e CV
├── Match Engine → calcola skill matched/missing e score
└── Groq AI → genera analisi completa
│
▼
Output
├── Match Score (0-100%)
├── Skill trovate / mancanti
├── GitHub Summary
├── AI Analysis (strengths, weaknesses, roadmap, cv tips)
└── Cover Letter generata

Match Score con colore dinamico (verde/giallo/rosso)
Skill Tags — verde per le trovate, rosso per le mancanti
GitHub Summary — repo totali, linguaggi, top repositories
AI Analysis — 5 sezioni: forze, debolezze, raccomandazioni, tips CV, roadmap
Cover Letter Generator — genera e copia con un click

Architettura AI

Il sistema usa un approccio ibrido:

Parser manuale — estrae keyword tecniche da una lista di 40+ skill (React, Node, TypeScript, PostgreSQL, Docker, ecc.) sia dalla JD che dal CV
Match engine — calcola l'intersezione delle skill per lo score
Groq AI — riceve JD, CV, GitHub summary e skill match per generare analisi qualitativa strutturata in JSON

Questo approccio garantisce uno score oggettivo (basato su dati reali) + insights qualitativi (generati dall'AI).
