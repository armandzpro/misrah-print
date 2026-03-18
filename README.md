# 🖨️ Misrah Print — Projet Astro
## Site web officiel : print.misrah-group.com

---

## 🚀 Démarrage rapide (5 étapes)

### 1. Installer Node.js
Télécharge et installe Node.js LTS : https://nodejs.org

### 2. Ouvrir le projet dans VS Code
```
File → Open Folder → sélectionner le dossier misrah-print
```

### 3. Installer les dépendances
Dans le terminal VS Code (Ctrl+` ou Terminal → New Terminal) :
```bash
npm install
```

### 4. Lancer en local
```bash
npm run dev
```
→ Ouvre http://localhost:4321 dans ton navigateur

### 5. Builder pour la production
```bash
npm run build
```
→ Génère le dossier `dist/` prêt à déployer sur Netlify

---

## 📁 Fichiers à modifier en priorité

### ✅ Contenu (sans toucher au code)
| Fichier | Ce qu'il contient |
|---------|-------------------|
| `src/content/site.json` | Nom, tel, email, adresse, horaires, réseaux |
| `src/content/services.json` | Les 6 services (icône, nom, description) |
| `src/content/portfolio.json` | Les réalisations (titre, catégorie, image) |

### ✅ Images
Dépose tes photos ici :
```
public/images/logo.png           ← Logo principal
public/images/portfolio/         ← Photos de réalisations
```

Puis dans `portfolio.json`, remplace les chemins :
```json
"image": "/images/portfolio/ma-photo.jpg"
```

---

## 🌐 Déploiement sur Netlify

### Étape 1 — Créer un compte GitHub
→ https://github.com → Sign Up

### Étape 2 — Pousser le projet
```bash
git init
git add .
git commit -m "Initial commit — Misrah Print"
git branch -M main
git remote add origin https://github.com/TON_USER/misrah-print.git
git push -u origin main
```

### Étape 3 — Connecter Netlify
1. Va sur https://netlify.com → Log in → Add new site
2. Import from Git → GitHub → sélectionner `misrah-print`
3. Build command : `npm run build`
4. Publish directory : `dist`
5. Deploy site ✅

### Étape 4 — Configurer le sous-domaine
Dans Netlify → Site Settings → Domain Management :
- Add custom domain : `print.misrah-group.com`
- Netlify te donne les infos DNS à configurer

Dans ton registrar (là où tu gères misrah-group.com) :
```
Type  : CNAME
Nom   : print
Valeur: [ton-site].netlify.app
```

---

## 📂 Structure complète du projet

```
misrah-print/
├── public/
│   └── images/
│       ├── logo.png              ← À remplacer
│       └── portfolio/            ← Tes photos ici
│
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro      ← Nav + Footer (commun à toutes les pages)
│   │
│   ├── components/
│   │   ├── Hero.astro            ← Section hero accueil
│   │   ├── Marquee.astro         ← Bande rouge défilante
│   │   ├── Services.astro        ← Grille des 6 services
│   │   └── ContactForm.astro     ← Formulaire devis
│   │
│   ├── pages/
│   │   ├── index.astro           ← Page d'accueil
│   │   └── portfolio.astro       ← Page galerie complète
│   │
│   ├── content/
│   │   ├── site.json             ← ✏️ Infos entreprise
│   │   ├── services.json         ← ✏️ Liste des services
│   │   └── portfolio.json        ← ✏️ Réalisations
│   │
│   └── styles/
│       └── global.css            ← Variables CSS + base
│
├── astro.config.mjs
├── tailwind.config.mjs
├── netlify.toml
└── package.json
```

---

## 🎨 Charte graphique

| Élément | Valeur |
|---------|--------|
| Rouge principal | `#e8171a` |
| Rouge foncé | `#b81215` |
| Fond principal | `#1e222e` |
| Fond secondaire | `#252a38` |
| Fond tertiaire | `#2e3445` |
| Police titres | Barlow Condensed (Black 900) |
| Police corps | Barlow (Light 300 / Regular 400) |

---

## 📞 Support
En cas de question technique, reviens vers Claude avec le message d'erreur exact.
