<script lang="ts">
	import Hexagon from "../Hexagon/Hexagon.svelte";
	import HexagonBanner from "../Hexagon/HexagonBanner.svelte";
	import { mediaSkills, otherSkills } from "../../utils/skills";
	import { devSkills } from "../../utils/skills";
	import { currentSection } from "../../stores/section";

	let flipped: string[] = [];

	$: {
		if ($currentSection === 3) playAnimation();
	}

	const playAnimation = () => {
		flipped = [...devSkills, ...mediaSkills, ...otherSkills].map(
			(skill) => skill.alt,
		);
		flipped.forEach((skill) => {
			setTimeout(
				() => {
					flipped = flipped.filter((flippedSkill) => flippedSkill !== skill);
				},
				40 * flipped.indexOf(skill),
			);
		});
	};
</script>

<div class="section_3">
	<div class="section_header">
		<HexagonBanner banner>
			<h2>Mes Compétences</h2>
		</HexagonBanner>
	</div>
	<div class="section_body">
		<div>
			<h3>Développement web</h3>
			<div
				class="skills"
				style="grid-template-columns: repeat({devSkills.length}, 10dvh);"
			>
				{#each devSkills as skill}
					<button
						class="card {flipped.includes(skill.alt) ? 'flipped' : ''}"
						on:click={() => {
							if (flipped.includes(skill.alt)) flipped = [];
							else flipped = [skill.alt];
						}}
					>
						<div class="front">
							<Hexagon
								color="#FED872"
								outlined
								image={skill.path}
								alt={skill.alt}
							/>
						</div>
						<div class="back">
							<Hexagon color="#FED872" outlined>{skill.alt}</Hexagon>
						</div>
					</button>
				{/each}
			</div>
		</div>
		<div>
			<h3>Multimédia</h3>
			<div
				class="skills"
				style="grid-template-columns: repeat({mediaSkills.length}, 10dvh);"
			>
				{#each mediaSkills as skill}
					<button
						class="card {flipped.includes(skill.alt) ? 'flipped' : ''}"
						on:click={() => {
							if (flipped.includes(skill.alt)) flipped = [];
							else flipped = [skill.alt];
						}}
					>
						<div class="front">
							<Hexagon
								color="#FED872"
								outlined
								image={skill.path}
								alt={skill.alt}
							/>
						</div>
						<div class="back">
							<Hexagon color="#FED872" outlined>{skill.alt}</Hexagon>
						</div>
					</button>
				{/each}
			</div>
		</div>
		<div>
			<h3>Autre</h3>
			<div
				class="skills"
				style="grid-template-columns: repeat({otherSkills.length}, 10dvh);"
			>
				{#each otherSkills as skill}
					<button
						class="card {flipped.includes(skill.alt) ? 'flipped' : ''}"
						on:click={() => {
							if (flipped.includes(skill.alt)) flipped = [];
							else flipped = [skill.alt];
						}}
					>
						<div class="front">
							<Hexagon
								color="#FED872"
								outlined
								image={skill.path}
								alt={skill.alt}
							/>
						</div>
						<div class="back">
							<Hexagon color="#FED872" outlined>{skill.alt}</Hexagon>
						</div>
					</button>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="css" scoped>
	.section_3 {
		width: 100%;
		height: 100dvh;
	}

	.section_3 > div:last-child {
		margin: 1rem 0 0 1rem;
	}

	.skills {
		display: grid;
		gap: 1rem;
		padding: 1rem;
		overflow-x: scroll;
		scrollbar-width: thin;
	}

	.skills::-webkit-scrollbar {
		height: 5px;
	}

	.skills::-webkit-scrollbar-thumb {
		background-color: var(--color-interaction);
		border-radius: 10px;
	}

	.skills button {
		position: relative;
		transform: rotateY(0);
		transition: transform 0.4s;
		transform-style: preserve-3d;
		perspective: 100vh;
		height: 10dvh;
	}

	.skills button .front,
	.skills button .back {
		display: flex;
		align-items: center;
		justify-content: center;
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		backface-visibility: hidden;
	}

	.skills button .back {
		transform: rotateY(180deg);
	}

	.skills .flipped {
		transform: rotateY(180deg);
	}
</style>
