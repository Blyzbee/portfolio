import majoreDesktop from "../assets/images/projects/majore_desktop.jpg";
import majorePhone from "../assets/images/projects/majore_phone.jpg";
import koacherDesktop from "../assets/images/projects/koacher_desktop.jpg";
import koacherPhone from "../assets/images/projects/koacher_phone.jpg";
import urbaniakDesktop from "../assets/images/projects/jeanlucurbaniak_desktop.jpg";
import urbaniakPhone from "../assets/images/projects/jeanlucurbaniak_phone.jpg";
import dorianDesktop from "../assets/images/projects/dorianurbaniak_desktop.jpg";
import dorianPhone from "../assets/images/projects/dorianurbaniak_phone.jpg";

export const projects = [
	{
		title: "Majore",
		description:
			"Majore est un projet que j'ai réalisé dans le cadre de mon activité chez Strat Inc. Ce site permet à des recruteurs et des demandeurs d'emploi saisonnier de trouver leur offre/candidat idéal. Le site a été réalisé avec React.js, Node.js (express) et Firebase. J'ai codé le front et le back dans leur intégralité, ainsi qu'une partie algorithme pour trouver les correspondances idéales entre les candidats et les offres.",
		desktopImage: majoreDesktop,
		phoneImage: majorePhone,
		link: "https://app.majore.co",
	},
	{
		title: "Koacher",
		description:
			"Koacher est un projet que j'ai réalisé dans le cadre de mon activité chez Alter One. Ce site applicatif encore en développement permettra de trouver son coach sportif idéal, et pour les coachs, de gérer leur emploi du temps. Ce projet est réalisé à l'aide de React.js, Node.js (express), Firebase. Je me suis occupé d'une partie du front et du back ainsi que de la supervision globale du projet.",
		desktopImage: koacherDesktop,
		phoneImage: koacherPhone,
		link: "https://koacher.app",
	},
	{
		title: "Jean-Luc URBANIAK",
		description:
			"Le site internet de Jean-Luc URBANIAK est un projet réalisé pour l'activité professionnelle de psychothérapeute de mon père. Je l'ai entièrement codé à l'aide de React.js et des appels API de Firebase. Il est actuellement mis en ligne via Vercel",
		desktopImage: urbaniakDesktop,
		phoneImage: urbaniakPhone,
		link: "https://jeanlucurbaniak.fr",
	},
	{
		title: "Dorian URBANIAK",
		description:
			"Voici une petite mise en abime pour vous parler de mon site. Le design et le code de mon site ont été entièrement réalisés par mes soins et à l'aide de Svelte. C'est un langage que je voulais pratiquer et apprendre. Il permet de faire des sites dynamiques comme React tout en étant beaucoup plus léger et rapide à mettre en place.",
		desktopImage: dorianDesktop,
		phoneImage: dorianPhone,
	},
];
