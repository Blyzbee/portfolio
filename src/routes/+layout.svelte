<script lang="ts">
	import "../app.scss";
	import Hexagon from "../components/Hexagon/Hexagon.svelte";
</script>

<div class="main_section">
	<Hexagon header class="header">
		<header>
			<h1>Dorian URBANIAK</h1>
			<h2>Développeur Front-End</h2>
		</header>
	</Hexagon>

	<main>
		<slot />
	</main>
</div>

<style lang="scss">
	.main_section {
		background-color: var(--color-white);
		width: 100dvw;
		height: 100dvh;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	header {
		background-color: var(--color-black);
		width: 50%;
		padding: 1rem;
	}
</style>
