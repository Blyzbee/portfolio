<script lang="ts">
	import { onMount } from "svelte";
	import "../app.scss";
	import HexagonBanner from "../components/Hexagon/HexagonBanner.svelte";

	let isScrollEnabled = true;
	let currentSection = 1;
	let startY = 0;
	let windowHeight = 0;

	onMount(() => {
		windowHeight = window.innerHeight;
	});

	$: {
		if (currentSection < 1) currentSection = 1;
		if (currentSection > 4) currentSection = 4;
	}
	$: scrollPosition = (currentSection - 1) * windowHeight;
	$: dynamicScroll = `translate: 0 -${scrollPosition}px`;

	const handleScroll = (e: WheelEvent) => {
		if (!isScrollEnabled) return;

		if (e.deltaY > 0) {
			currentSection++;
		} else {
			currentSection--;
		}

		setScrollTimer();
	};

	const handleSlide = (e: TouchEvent) => {
		if (!isScrollEnabled) return;

		const currentY = e.touches[0].clientY;
		const deltaY = currentY - startY;

		if (deltaY > 0) {
			currentSection--;
		} else {
			currentSection++;
		}

		setScrollTimer();
	};

	const setScrollTimer = () => {
		isScrollEnabled = false;
		setTimeout(() => {
			isScrollEnabled = true;
		}, 500);
	};
</script>

<div
	class="main_section"
	on:wheel|preventDefault={handleScroll}
	on:touchstart={(e) => (startY = e.touches[0].clientY)}
	on:touchmove={handleSlide}
>
	<div style={dynamicScroll}>
		<header>
			<HexagonBanner>
				<div class="header">
					<h1>Dorian URBANIAK</h1>
					<h2>Développeur Front-End</h2>
				</div>
			</HexagonBanner>
		</header>

		<main>
			<slot />
		</main>
	</div>
</div>

<style lang="scss">
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100dvw;
	}

	.main_section {
		overflow: hidden;
		height: 100dvh;

		> div {
			transition: translate 300ms;
		}
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 25dvh;

		.header {
			background-color: var(--color-black);
			width: 80vw;
			max-width: 600px;
			height: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
		}

		h1,
		h2 {
			text-align: center;
			margin: 0;
		}
	}
</style>
