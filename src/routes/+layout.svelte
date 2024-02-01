<script lang="ts">
	import "../app.scss";
	import Hexagon from "../components/Hexagon/Hexagon.svelte";
</script>

<div class="main_section">
	<header>
		<Hexagon notHeader={false}>
			<div class="header">
				<h1>Dorian URBANIAK</h1>
				<h2>Développeur Front-End</h2>
			</div>
		</Hexagon>
	</header>

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.main_section {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100dvw;
		height: 100dvh;
	}

	header {
		display: flex;
		justify-content: center;
		width: 100%;

		.header {
			background-color: var(--color-black);
			padding: 1rem;
			width: 80vw;
			max-width: 500px;
		}

		h1,
		h2 {
			text-align: center;
			margin: 0;
		}
	}
</style>
