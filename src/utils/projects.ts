import majoreDesktop from "../assets/images/projects/majore_desktop.png";
import majorePhone from "../assets/images/projects/majore_phone.png";
import koacherDesktop from "../assets/images/projects/koacher_desktop.png";
import koacherPhone from "../assets/images/projects/koacher_phone.png";
import urbaniakDesktop from "../assets/images/projects/jeanlucurbaniak_desktop.png";
import urbaniakPhone from "../assets/images/projects/jeanlucurbaniak_phone.png";
import dorianDesktop from "../assets/images/projects/dorianurbaniak_desktop.png";
import dorianPhone from "../assets/images/projects/dorianurbaniak_phone.png";

export const projects = [
	{
		title: "Majore",
		description:
			"Majore est un projet que j'ai réalisé dans le cadre de mon alternance chez Strat Inc. Ce site permet à des recruteurs et des demandeurs d'emploi saisonnier de trouver leur offre/candidat idéal. Le site a été réalisé avec React.js, Node.js (express) et Firebase. J'ai codé le front et le back dans leur intégralité, ainsi qu'une partie algorithme pour trouver les correspondances idéales entre les offres et les candidats.",
		desktopImage: majoreDesktop,
		phoneImage: majorePhone,
		link: "https://app.majore.co",
	},
	{
		title: "Koacher",
		description:
			"Koacher est un projet que j'ai réalisé en compagnie de deux autres alternants dans le cadre de mon alternance chez Alter One. Ce site applicatif encore en développement permettera de trouver son coach sportif idéal, et pour les coachs, de gérer leur emploi du temps. Ce projet est réalisé à l'aide de React.js, Node.js (express), Firebase. Je me suis occupé d'une partie du front et du back ainsi que de la supervision globale du projet.",
		desktopImage: koacherDesktop,
		phoneImage: koacherPhone,
		link: "https://koacher.app",
	},
	{
		title: "Jean-Luc URBANIAK",
		description:
			"Le site internet de Jean-Luc URBANIAK est un projet réalisé pour l'activitée professionnelle de psychotérapeute de mon père. Je l'ai entièrement codé à l'aide de React.js et des appels API de Firebase. Il est actuellement mis en ligne via Vercel",
		desktopImage: urbaniakDesktop,
		phoneImage: urbaniakPhone,
		link: "https://jeanlucurbaniak.fr",
	},
	{
		title: "Dorian URBANIAK",
		description:
			"Voici une petite mise en abime pour vous parler de mon site. Mon site à été entièrement designé et codé par mes soin et à l'aide de Svelte. C'est un language que je voulais pratiquer et apprendre depuis longtemps et qui me permet de faire des sites dynamiques tout en étant beaucoup plus léger et rapide que React à mettre en place.",
		desktopImage: dorianDesktop,
		phoneImage: dorianPhone,
	},
];
