// ============================================================
//  CONTENU DE LA PRÉSENTATION — c'est le seul fichier à remplir.
//  Tout champ laissé vide ("") s'affiche en gris comme repère.
//  Ajoutez / supprimez des éléments dans les listes librement.
// ============================================================

// ---------- Diapo 1 : couverture ----------
export const profil = {
  prenom: "",
  nom: "",
  titre: "", // ex : « Développeur Full-Stack en alternance »
  // Déposez vos 5 photos dans /public/photos/ avec ces noms
  photos: [
    "/photos/photo1.jpg",
    "/photos/photo2.jpg",
    "/photos/photo3.jpg",
    "/photos/photo4.jpg",
    "/photos/photo5.jpg",
  ],
};

// ---------- Diapo 2 : parcours (style CV) ----------
export const parcours = {
  formations: [
    { periode: "", diplome: "", etablissement: "" },
    { periode: "", diplome: "", etablissement: "" },
    { periode: "", diplome: "", etablissement: "" },
  ],
  experiences: [
    { periode: "", poste: "", entreprise: "" },
    { periode: "", poste: "", entreprise: "" },
    { periode: "", poste: "", entreprise: "" },
    { periode: "", poste: "", entreprise: "" },
    { periode: "", poste: "", entreprise: "" },
    { periode: "", poste: "", entreprise: "" },
    { periode: "", poste: "", entreprise: "" },
    { periode: "", poste: "", entreprise: "" },
  ],
  competences: ["", "", "", "", ""],
  langues: ["", "", ""],
};

// ---------- Diapo 3 : aujourd'hui (étudiant, double diplôme) ----------
export const statut = {
  accroche: "", // ex : « Étudiant admis en double diplôme »
  description: "",
  diplome1: {
    intitule: "",
    ecole: "",
    periode: "",
  },
  // Deuxième diplôme, en alternance
  diplome2: {
    intitule: "",
    ecole: "",
    periode: "",
    rythme: "", // ex : « 3 semaines entreprise / 1 semaine école »
  },
};

// ---------- Diapos d'expériences (une diapo par élément) ----------
export const experiences = [
  {
    titre: "",
    entreprise: "",
    periode: "",
    contexte: "",
    taches: ["", "", "", ""],
    techs: [
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
    ],
  },
  {
    titre: "",
    entreprise: "",
    periode: "",
    contexte: "",
    taches: ["", "", "", ""],
    techs: [
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
    ],
  },
  {
    titre: "",
    entreprise: "",
    periode: "",
    contexte: "",
    taches: ["", "", "", ""],
    techs: [
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
    ],
  },
  {
    titre: "",
    entreprise: "",
    periode: "",
    contexte: "",
    taches: ["", "", "", ""],
    techs: [
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
    ],
  },
  {
    titre: "",
    entreprise: "",
    periode: "",
    contexte: "",
    taches: ["", "", "", ""],
    techs: [
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
    ],
  },
  {
    titre: "",
    entreprise: "",
    periode: "",
    contexte: "",
    taches: ["", "", "", ""],
    techs: [
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
      { nom: "", detail: "" },
    ],
  },
];

// ---------- Dernière diapo : compatibilité avec l'entreprise ----------
export const compatibilite = {
  entreprise: "",
  intro: "",
  points: [
    { titre: "", texte: "" },
    { titre: "", texte: "" },
    { titre: "", texte: "" },
  ],
  conclusion: "",
};
