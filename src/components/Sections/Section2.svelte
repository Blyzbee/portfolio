<script lang="ts">
	import HexagonBanner from "../Hexagon/HexagonBanner.svelte";
	import arrow from "../../assets/icons/arrow.svg";
	import Hexagon from "../Hexagon/Hexagon.svelte";
	import { slide } from "svelte/transition";
	import Icon from "../Icon.svelte";
	import { projects } from "../../utils/projects";
	import { backIn } from "svelte/easing";

	let currentStep = 0;
	$: {
		if (currentStep < 0) currentStep = projects.length - 1;
		if (currentStep > projects.length - 1) currentStep = 0;
	}
	$: currentProject = projects[currentStep];
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
			<button on:click={() => currentStep--}>
				<img src={arrow} alt="fleche vers le haut" />
			</button>
			{#each projects as step, index}
				<button on:click={() => (currentStep = index)}>
					<Hexagon outlined color="black">
						{#if index === currentStep}
							<Hexagon color="black" width="80%" />
						{/if}
					</Hexagon>
				</button>
			{/each}
			<button on:click={() => currentStep++}>
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
						<Icon name="open_in_new" />
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

<style lang="scss">
	.section_2 {
		width: 100%;
		height: 100dvh;

		.controller {
			align-self: center;
			margin-top: 2rem;
			width: 17rem;
			display: grid;
			gap: 0.5rem;

			button {
				&:last-of-type {
					rotate: 180deg;
				}
			}

			img {
				width: 100%;
				display: block;
			}
		}

		.section_body {
			padding: 0 2rem;
			gap: 0 3rem;
			display: flex;
			flex-direction: column;

			.project_description_mobile {
				overflow-y: scroll;
				max-height: 200px;
			}

			.project_description_desktop {
				display: none;

				p {
					// overflow-y: scroll;
					max-height: 300px;
				}
			}

			.carousel_container {
				overflow-y: hidden;
				border-radius: 10px;
				box-shadow: 3px 3px 10px;

				img {
					object-position: top;
				}

				&_desktop {
					aspect-ratio: 16/9;
					margin: 2rem 0 1rem 0;
				}
				&_phone {
					display: none;
				}
			}
		}

		@media screen and (min-width: 660px) {
			.section_body {
				display: grid;
				grid-template-columns: auto 5fr 2fr;

				.project_description_mobile {
					display: none;
				}

				.project_description_desktop {
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

					p {
						margin: 1rem;
						color: var(--color-white);
					}

					&:hover {
						opacity: 1;
					}
				}

				.controller {
					width: 1.5rem;
					grid-template-rows: repeat(5, 1fr);
					grid-template-columns: 1fr !important;
					button {
						&:first-of-type {
							rotate: 90deg;
						}
						&:last-of-type {
							rotate: -90deg;
						}
					}
				}

				.carousel_container {
					&_desktop {
						aspect-ratio: unset;
						position: relative;
						height: 65dvh;
					}
					&_phone {
						display: block;
						margin-top: -3rem;
						margin-bottom: 1rem;
					}
				}
			}
		}
	}
</style>
