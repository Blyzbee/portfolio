<script lang="ts">
	import "../app.scss";
	import HexagonBanner from "../components/Hexagon/HexagonBanner.svelte";

	let isScrollEnabled = true;
	let scrollPosition = 0;
	let startY = 0;

	$: dynamicScroll = `translate: 0 -${scrollPosition}px`;

	const handleScroll = (e) => {
		if (!isScrollEnabled) return;

		if (e.deltaY > 0) {
			scrollPosition = scrollPosition + e.view.innerHeight;
		} else {
			scrollPosition = scrollPosition - e.view.innerHeight;
		}
		if (scrollPosition < 0) scrollPosition = 0;

		setScrollTimer();
	};

	const handleSlide = (e) => {
		if (!isScrollEnabled) return;

		const currentY = e.touches[0].clientY;
		const deltaY = currentY - startY;

		if (deltaY > 0) {
			scrollPosition = scrollPosition - e.view.innerHeight;
		} else {
			scrollPosition = scrollPosition + e.view.innerHeight;
		}
		if (scrollPosition < 0) scrollPosition = 0;

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
