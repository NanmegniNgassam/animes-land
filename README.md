# 🌸 Animes Land

> Une plateforme minimaliste pour explorer l'univers des animés — propulsée par Next.js et l'API Jikan.

Animes-land est un micro-projet conçu pour visualiser des animés populaires, explorer leurs détails, et rechercher ses séries favorites. Il a pour objectif de consolider mes compétences en **Next.js**, en particulier autour de la **récupération de données**, la **navigation dynamique**, et les **bonnes pratiques de développement frontend moderne**.

---

## 🚀 Demo

👉 [Lien vers le site déployé](https://animes-land.gilles-ngassam.com)

---

## ✨ Fonctionnalités principales

- 🎥 Affichage des animés les plus populaires
- 🔎 Recherche en direct d’un animé par nom
- 📊 Classement des animés par score (Top 100)
- 📄 Fiches détaillées : synopsis, personnages, infos clés
- 🧭 Navigation rapide et responsive
- 🧠 Architecture pensée pour la performance (ISR/SSR)

---

## 🛠️ Stack technique

- **Framework** : [Next.js 13+ (App Router)](https://nextjs.org/)
- **Langage** : TypeScript
- **Style** :CSS
- **API** : [Jikan API v4](https://docs.api.jikan.moe/)
- **Déploiement** : Vercel

---

## 📁 Structure des pages

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Animés populaires du moment |
| Animés | `/animes` | Visualisation des animés |
| Détail animé | `/animes/[id]` | Détails complets d’un animé |
| Recherche | `/search` | Recherche en live |
| Top animés | `/top` | Classement par score |
| À propos | `/about` | Présentation du projet et de l’API |

---

## 📚 Objectifs pédagogiques

- Maîtrise de la **data fetching strategy** (ISR, SSR, SSG)
- Utilisation d'une **API REST tierce** (fetch, erreurs, pagination)
- Mise en place de **routes dynamiques** (`/anime/[id]`)
- Amélioration de l'**expérience utilisateur** (UX / UI / SEO)
- Travail en **mobile-first** et responsive design

---

## 🧪 Fonctionnalités prévues (roadmap)

- [ ] Dark mode toggle
- [ ] Skeleton loaders pour les pages lentes
- [ ] Mise en cache API avec SWR
- [ ] Page personnages (bonus)

---

## 🙏 Remerciements

Un grand merci à [Jikan API](https://docs.api.jikan.moe/) pour fournir une interface ouverte et gratuite vers la base de données MyAnimeList.

---

## 📜 Licence

Ce projet est open-source sous licence [MIT](LICENSE).

---

> Développé avec ❤️ pour apprendre et partager — par [Gilles NGASSAM].
