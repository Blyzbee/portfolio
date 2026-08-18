<script lang="ts">
	import HexagonBanner from "../Hexagon/HexagonBanner.svelte";
	import arrow from "../../assets/icons/arrow.svg";
	import openNew from "../../assets/icons/open_in_new.svg";
	import Hexagon from "../Hexagon/Hexagon.svelte";
	import { slide } from "svelte/transition";
	import { projects } from "../../utils/projects";
	import { backIn } from "svelte/easing";

	let currentStep = 0;
	let autoSlide = true;
	let intervalId: number;

	$: {
		if (currentStep < 0) currentStep = projects.length - 1;
		if (currentStep > projects.length - 1) currentStep = 0;
		if (!autoSlide) clearInterval(intervalId);
	}
	$: currentProject = projects[currentStep];

	if (autoSlide) {
		intervalId = setInterval(() => {
			currentStep++;
		}, 3000);
	}
</script>

<div class="section_2">
	<div class="section_header">
		<HexagonBanner banner>
			<h2>Mes Réalisations</h2>
		</HexagonBanner>
	</div>

	<div class="section_body">
		<div
			class="controller"
			style="grid-template-columns: repeat({projects.length + 2}, 1fr);"
		>
			<button
				aria-label="carousel précédent"
				on:click={() => {
					currentStep--;
					autoSlide = false;
				}}
			>
				<img src={arrow} alt="fleche vers le haut" />
			</button>
			{#each projects as step, index}
				<button
					aria-label={`carousel bouton ${index}`}
					on:click={() => {
						currentStep = index;
						autoSlide = false;
					}}
				>
					<Hexagon outlined color="black">
						{#if index === currentStep}
							<Hexagon color="black" width="80%" />
						{/if}
					</Hexagon>
				</button>
			{/each}
			<button
				aria-label="carousel suivant"
				on:click={() => {
					currentStep++;
					autoSlide = false;
				}}
			>
				<img src={arrow} alt="fleche vers le bas" />
			</button>
		</div>

		<div>
			<div class="carousel_container carousel_container_desktop">
				{#key currentStep}
					<img
						src={currentProject.desktopImage}
						alt="{currentProject.title} au format ordinateur"
						class="img_cover"
						transition:slide={{ easing: backIn, duration: 500 }}
					/>
					<div class="project_description_desktop">
						<p>
							{currentProject.description}
						</p>
					</div>
				{/key}
			</div>
			{#if currentProject?.link}
				<a href={currentProject.link} target="_blank">
					<h3>
						{currentProject.title}
						<img src={openNew} alt="Ouvrir dans un nouvel onglet" width="25" />
					</h3>
				</a>
			{:else}
				<h3>{currentProject.title}</h3>
			{/if}
			<p class="project_description_mobile">{currentProject.description}</p>
		</div>

		<div class="carousel_container carousel_container_phone">
			{#key currentStep}
				<img
					src={currentProject.phoneImage}
					alt="{currentProject.title} au format téléphone"
					class="img_cover"
					transition:slide={{ easing: backIn, duration: 600 }}
				/>
			{/key}
		</div>
	</div>
</div>

<style lang="css" scoped>
	.section_2 {
		width: 100%;
		height: 100dvh;
	}

	.controller {
		align-self: center;
		margin-top: 2rem;
		width: 17rem;
		display: grid;
		gap: 0.5rem;
	}

	.controller button:last-of-type {
		rotate: 180deg;
	}

	.controller img {
		width: 100%;
		display: block;
	}

	.section_body {
		padding: 0 2rem;
		gap: 0 3rem;
		display: flex;
		flex-direction: column;
	}

	.section_body .project_description_mobile {
		overflow-y: scroll;
		max-height: 200px;
	}

	.section_body .project_description_desktop {
		display: none;
	}

	.section_body .project_description_desktop p {
		max-height: 300px;
	}

	.section_body .carousel_container {
		overflow-y: hidden;
		border-radius: 10px;
		box-shadow: 3px 3px 10px;
	}

	.section_body .carousel_container img {
		object-position: top;
	}

	.section_body .carousel_container_desktop {
		aspect-ratio: 16/9;
		margin: 2rem 0 1rem 0;
	}

	.section_body .carousel_container_phone {
		display: none;
	}

	@media screen and (min-width: 660px) {
		.section_body {
			display: grid;
			grid-template-columns: auto 5fr 2fr;
		}

		.section_body .project_description_mobile {
			display: none;
		}

		.section_body .project_description_desktop {
			background: linear-gradient(
				0deg,
				rgba(0, 0, 0, 1) 0%,
				rgba(0, 0, 0, 1) 25%,
				rgba(0, 0, 0, 0) 100%
			);
			opacity: 0;
			display: flex;
			align-items: end;
			position: absolute;
			top: 0;
			bottom: 0;
			right: 0;
			left: 0;
			transition: all 300ms;
		}

		.section_body .project_description_desktop p {
			margin: 1rem;
			color: var(--color-white);
		}

		.section_body .project_description_desktop:hover {
			opacity: 1;
		}

		.section_body .controller {
			width: 1.5rem;
			grid-template-rows: repeat(5, 1fr);
			grid-template-columns: 1fr !important;
		}

		.section_body .controller button:first-of-type {
			rotate: 90deg;
		}

		.section_body .controller button:last-of-type {
			rotate: -90deg;
		}

		.section_body .carousel_container_desktop {
			aspect-ratio: unset;
			position: relative;
			height: 65dvh;
		}

		.section_body .carousel_container_phone {
			display: block;
			margin-top: -3rem;
			margin-bottom: 1rem;
		}
	}
</style>
