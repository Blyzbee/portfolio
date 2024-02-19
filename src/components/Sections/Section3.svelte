<script lang="ts">
	import Hexagon from "../Hexagon/Hexagon.svelte";
	import HexagonBanner from "../Hexagon/HexagonBanner.svelte";
	import { mediaSkills, otherSkills } from "../../utils/skills";
	import { devSkills } from "../../utils/skills";
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
					<div>
						<Hexagon
							color="#FED872"
							outlined
							image={skill.path}
							alt={skill.alt}
						/>
					</div>
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
					<div>
						<Hexagon
							color="#FED872"
							outlined
							image={skill.path}
							alt={skill.alt}
						/>
					</div>
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
					<div>
						<Hexagon
							color="#FED872"
							outlined
							image={skill.path}
							alt={skill.alt}
						/>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	.section_3 {
		width: 100%;
		height: 100dvh;

		.section_body {
			> div {
				margin: 1rem;
			}
			.skills {
				display: grid;
				gap: 1rem;
				padding: 1rem;
				overflow-x: scroll;
				scrollbar-width: thin;

				&::-webkit-scrollbar {
					height: 5px;
				}
				&::-webkit-scrollbar-thumb {
					background-color: var(--color-interaction);
					border-radius: 10px;
				}
			}
		}
	}
</style>
