<script lang="ts">
	import HexagonBanner from "../components/Hexagon/HexagonBanner.svelte";
	import { onMount } from "svelte";
	import { currentSection } from "../stores/section";

	let isScrollEnabled = true;
	let section = $currentSection;
	let startY = 0;

	$: {
		if (section < 1) section = 1;
		if (section > 4) section = 4;
		currentSection.set(section);
	}
	$: scrollPosition = (section - 1) * 100;
	$: dynamicScroll = `translate: 0 -${scrollPosition}dvh`;

	// keyboard arrows press support
	onMount(() => {
		window.addEventListener("keydown", handleKeydown);
		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	});

	function handleKeydown(event: KeyboardEvent) {
		switch (event.key) {
			case "ArrowUp":
				section--;
				break;
			case "ArrowDown":
				section++;
				break;
			default:
				break;
		}
	}

	// check if the div is scrollable
	const isDivScrollable = (div: HTMLElement) => {
		let stopWhile = false;
		let currentTarget = div;

		while (!stopWhile) {
			if (currentTarget.classList.contains("main_section")) stopWhile = true;
			else if (currentTarget.classList.contains("scrollable")) stopWhile = true;
			else currentTarget = currentTarget.parentElement as HTMLElement;
		}
		if (currentTarget.classList[0] === "scrollable") return currentTarget;
		else return false;
	};

	// handle mouse scroll event
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
			section++;
		}
		if (e.deltaY < 0 && (!scrollableDiv || scrollableDiv.scrollTop === 0)) {
			section--;
		}
	};

	// handle touch slide event
	const handleSlide = async (e: TouchEvent) => {
		if (!isScrollEnabled) return;
		let scrollableDiv = isDivScrollable(e.target as HTMLElement);

		const currentY = e.touches[0].clientY;
		const deltaY = currentY - startY;

		if (deltaY < 100 && deltaY > -100) return;
		if (deltaY > 100 && (!scrollableDiv || scrollableDiv.scrollTop === 0)) {
			section--;
		}
		if (
			deltaY < -100 &&
			(!scrollableDiv || scrollableDiv.clientHeight === scrollableDiv.scrollTop)
		) {
			section++;
		}
		setScrollTimer();
	};

	// set a timer to prevent multiple scroll events
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
					<h2>Développeur Front-End / Full-Stack</h2>
				</div>
			</HexagonBanner>
		</header>

		<main>
			<slot />
		</main>
	</div>
</div>

<style lang="css" scoped>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100dvw;
	}

	.main_section {
		overflow: hidden;
		height: 100dvh;
	}

	.main_section > div {
		transition: translate 300ms;
	}

	header {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 25dvh;
	}
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
</style>
