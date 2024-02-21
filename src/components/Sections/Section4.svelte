<script lang="ts">
	import Hexagon from "../Hexagon/Hexagon.svelte";
	import HexagonBanner from "../Hexagon/HexagonBanner.svelte";
	import { allSkills } from "../../utils/skills";

	const alteroneSkills = [
		"React.js",
		"Vue.js",
		"Node.js",
		"Typescript",
		"Firebase",
		"Git",
		"Gitlab",
	];
	const stratincSkills = [
		"React.js",
		"Node.js",
		"Firebase",
		"Figma",
		"Git",
		"Gitlab",
	];
	const biosensSkills = [
		"Premiere Pro",
		"Illustrator",
		"Photoshop",
		"After Effect",
	];
	const servierSkills = ["Premiere Pro", "Illustrator", "Photoshop"];
</script>

<div class="section_4">
	<div class="section_header">
		<HexagonBanner banner>
			<h2>Mon parcours</h2>
		</HexagonBanner>
	</div>
	<div class="scrollable section_body">
		<div>
			<h3>Expériences professionnelles</h3>
			<div class="experience">
				<div>2023</div>
				<div>
					<strong>Développeur web Front-End :</strong> Alter One - 100% télé-travail
					- 1 an
				</div>
				<div class="skills">
					<b>Hard skills :</b>
					{#each alteroneSkills as skill}
						<div class="skill">
							<Hexagon
								color="#FED872"
								outlined
								image={allSkills.find((s) => s.alt === skill)?.path}
								alt={allSkills.find((s) => s.alt === skill)?.alt}
							/>
						</div>
					{/each}
				</div>
			</div>
			<div class="experience">
				<div>2022</div>
				<div>
					<strong>Développeur web Front-End :</strong> Strat Inc - 100% télé-travail
					- 10 mois
				</div>
				<div class="skills">
					<b>Hard skills :</b>
					{#each stratincSkills as skill}
						<div class="skill">
							<Hexagon
								color="#FED872"
								outlined
								image={allSkills.find((s) => s.alt === skill)?.path}
								alt={allSkills.find((s) => s.alt === skill)?.alt}
							/>
						</div>
					{/each}
				</div>
			</div>
			<div class="experience">
				<div>2019</div>
				<div>
					<strong>Monteur audiovisuel :</strong> Biosens Numérique - Paris - 4 mois
				</div>
				<div class="skills">
					<b>Hard skills :</b>
					{#each biosensSkills as skill}
						<div class="skill">
							<Hexagon
								color="#FED872"
								outlined
								image={allSkills.find((s) => s.alt === skill)?.path}
								alt={allSkills.find((s) => s.alt === skill)?.alt}
							/>
						</div>
					{/each}
				</div>
			</div>
			<div class="experience">
				<div>2018</div>
				<div>
					<strong>Chargé de communication :</strong> Laboratoires Servier Industrie
					- Gidy - 3 mois
				</div>
				<div class="skills">
					<b>Hard skills :</b>
					{#each servierSkills as skill}
						<div class="skill">
							<Hexagon
								color="#FED872"
								outlined
								image={allSkills.find((s) => s.alt === skill)?.path}
								alt={allSkills.find((s) => s.alt === skill)?.alt}
							/>
						</div>
					{/each}
				</div>
			</div>
			<div class="experience">
				<div>2017 - 2021</div>
				<div>
					<strong>Animateur :</strong> Centre de loisirs - la Ferté St Aubin - 4
					mois
				</div>
			</div>
		</div>
		<div>
			<h3>Scolarité / Formations</h3>
			<div class="experience">
				<div>2022 - 2023</div>
				<div>
					<strong>Développement Web Front-End :</strong> Ecole Multimédia - Paris
					-
				</div>
			</div>
			<div class="experience">
				<div>2019 - 2021</div>
				<div>
					<strong>Formation Théâtrale :</strong> Ecole Auvray Nauroy - Paris
				</div>
			</div>
			<div class="experience">
				<div>2018 - 2019</div>
				<div>
					<strong>Multimédia :</strong> Licence TAIS - Châlon-Sur-Saone
				</div>
			</div>
			<div class="experience">
				<div>2016 - 2018</div>
				<div>
					<strong>Développement Web :</strong> DUT MMI - Blois
				</div>
			</div>
			<div class="experience">
				<div>2016</div>
				<div>
					<strong>Baccalauréat Scientifique :</strong> Lycée Voltaire - Orléans
				</div>
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.section_4 {
		align-self: baseline;
		width: 100%;

		.section_body {
			padding: 1rem;
			display: flex;
			flex-wrap: wrap;
			gap: 3rem;

			h3 {
				margin-bottom: 1rem;
			}

			.experience {
				display: grid;
				grid-template-columns: 2.5rem auto;
				margin-bottom: 2rem;
				gap: 0 1rem;
				align-items: center;

				> div:first-of-type {
					text-align: center;
					line-height: 0.8rem;
				}
			}

			.skills {
				grid-column: 2 / span 1;
				display: flex;
				flex-wrap: wrap;
				gap: 0.5rem;
				align-items: center;

				.skill {
					width: 40px;
				}
			}
		}
	}
</style>
