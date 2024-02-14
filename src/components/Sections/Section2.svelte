<script lang="ts">
	import HexagonBanner from "../Hexagon/HexagonBanner.svelte";
	import arrow from "../../assets/icons/arrow.svg";
	import Hexagon from "../Hexagon/Hexagon.svelte";
	import majoreDesktopImage from "../../assets/images/majore_desktop.png";
	import majorePhoneImage from "../../assets/images/majore_phone.png";
	import { slide } from "svelte/transition";
	import Icon from "../Icon.svelte";

	let currentStep = 1;
	$: {
		if (currentStep < 1) currentStep = 3;
		if (currentStep > 3) currentStep = 1;
	}
	$: currentProject = projects[currentStep - 1];

	const projects = [
		{
			title: "Majore",
			description: "blablabla",
			desktopImage: majoreDesktopImage,
			phoneImage: majorePhoneImage,
			link: "https://app.majore.co",
		},
		{
			title: "Koacher",
			description: "blablabla",
			desktopImage: majoreDesktopImage,
			phoneImage: majorePhoneImage,
			link: "https://koacher.app",
		},
		{
			title: "Matchug",
			description: "blablabla",
			desktopImage: majoreDesktopImage,
			phoneImage: majorePhoneImage,
		},
	];
</script>

<div class="section_2">
	<div class="section_header">
		<HexagonBanner banner>
			<h2>Mes Réalisations</h2>
		</HexagonBanner>
	</div>

	<div class="section_body">
		<div class="controller">
			<button on:click={() => currentStep--}>
				<img src={arrow} alt="fleche vers le haut" />
			</button>
			{#each [1, 2, 3] as step}
				<button on:click={() => (currentStep = step)}>
					<Hexagon outlined color="black">
						{#if step === currentStep}
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
				<img
					src={currentProject.desktopImage}
					alt="{currentProject.title} au format ordinateur"
					transition:slide
				/>
			</div>
			<h3>
				{currentProject.title}
				{#if currentProject?.link}
					<a href={currentProject.link} target="_blank"
						><Icon name="open_in_new" /></a
					>
				{/if}
			</h3>
		</div>

		<div class="carousel_container carousel_container_phone">
			<img
				src={currentProject.phoneImage}
				alt="{currentProject.title} au format téléphone"
			/>
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
			grid-template-columns: repeat(5, 1fr);
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

			.carousel_container {
				overflow-y: hidden;
				border-radius: 10px;
				box-shadow: 3px 3px 10px;
				img {
					width: 100%;
				}

				&_desktop {
					aspect-ratio: 16/9;
					margin: 2rem 0 1.5rem 0;
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

				.controller {
					width: 2rem;
					grid-template-rows: repeat(5, 1fr);
					grid-template-columns: 1fr;
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
