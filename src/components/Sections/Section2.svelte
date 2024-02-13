<script lang="ts">
	import HexagonBanner from "../Hexagon/HexagonBanner.svelte";
	import arrow from "../../assets/icons/arrow.svg";
	import Hexagon from "../Hexagon/Hexagon.svelte";

	let currentStep = 1;
</script>

<div class="section_2">
	<HexagonBanner banner>
		<h2>Mes Réalisations</h2>
	</HexagonBanner>

	<div>
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
	</div>
</div>

<style lang="scss">
	.section_2 {
		width: 100%;
		height: 100dvh;
		display: flex;
		flex-direction: column;

		.controller {
			width: 2rem;
			display: flex;
			flex-direction: column;
			justify-content: center;
			gap: 0.5rem;

			button {
				&:first-of-type {
					rotate: 90deg;
				}
				&:last-of-type {
					rotate: -90deg;
				}
			}

			img {
				width: 100%;
			}
		}

		> div {
			padding: 1rem;
			display: flex;
			align-items: center;
		}

		@media screen and (min-width: var(--breakpoint--desktop)) {
		}
	}
</style>
