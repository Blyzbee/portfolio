<script lang="ts">
	import "../app.scss";
	import HexagonBanner from "../components/Hexagon/HexagonBanner.svelte";

	let isScrollEnabled = true;
	let currentSection = 1;
	let startY = 0;

	$: {
		if (currentSection < 1) currentSection = 1;
		if (currentSection > 4) currentSection = 4;
	}
	$: scrollPosition = (currentSection - 1) * 100;
	$: dynamicScroll = `translate: 0 -${scrollPosition}dvh`;

	const isDivScrollable = (div) => {
		let stopWhile = false;
		let currentTarget = div;

		while (!stopWhile) {
			if (currentTarget.classList.contains("main_section")) stopWhile = true;
			else if (currentTarget.classList.contains("scrollable")) stopWhile = true;
			else currentTarget = currentTarget.parentElement;
		}
		if (currentTarget.classList[0] === "scrollable") return currentTarget;
		else return false;
	};

	const handleScroll = async (e: WheelEvent) => {
		let scrollableDiv = await isDivScrollable(e.target as HTMLElement);
		if (!isScrollEnabled) {
			return;
		}
		setScrollTimer();

		if (
			e.deltaY > 0 &&
			(!scrollableDiv || scrollableDiv.clientHeight === scrollableDiv.scrollTop)
		) {
			currentSection++;
		}
		if (e.deltaY < 0 && (!scrollableDiv || scrollableDiv.scrollTop === 0)) {
			currentSection--;
		}
	};

	const handleSlide = async (e: TouchEvent) => {
		if (!isScrollEnabled) return;
		let scrollableDiv = isDivScrollable(e.target as HTMLElement);

		const currentY = e.touches[0].clientY;
		const deltaY = currentY - startY;

		if (deltaY < 100 && deltaY > -100) return;
		if (deltaY > 100 && (!scrollableDiv || scrollableDiv.scrollTop === 0)) {
			currentSection--;
		}
		if (
			deltaY < -100 &&
			(!scrollableDiv || scrollableDiv.clientHeight === scrollableDiv.scrollTop)
		) {
			currentSection++;
		}
		setScrollTimer();
	};

	const setScrollTimer = () => {
		isScrollEnabled = false;
		setTimeout(() => {
			isScrollEnabled = true;
		}, 300);
	};
</script>

<div
	class="main_section"
	on:wheel={handleScroll}
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
