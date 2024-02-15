<script lang="ts">
	import Hexagon from "../Hexagon/Hexagon.svelte";
	import Moi from "../../assets/images/moi.jpg";
	import LinkedinLogo from "../../assets/icons/linkedin.svg";
	import GithubLogo from "../../assets/icons/github.svg";

	let offsetX = 0;
	let offsetY = 0;
	let offsetX2 = 0;
	let offsetY2 = 0;
	let rayon = 100;

	$: float = `translate: ${offsetX}px ${offsetY}px`;
	$: float2 = `translate: ${offsetX2}px ${offsetY2}px`;

	function randomInRange(min: number, max: number) {
		return Math.random() * (max - min) + min;
	}

	function randomFloat() {
		offsetX = randomInRange(-rayon, rayon);
		offsetY = randomInRange(-rayon, rayon);
		offsetX2 = randomInRange(-rayon, rayon);
		offsetY2 = randomInRange(-rayon, rayon);
	}

	setInterval(randomFloat, 2000);
</script>

<div class="section_1">
	<div class="moi">
		<Hexagon>
			<img src={Moi} alt="Dorian URBANIAK" class="img_cover" />
		</Hexagon>
	</div>

	<a
		class="floating"
		href="https://www.linkedin.com/in/dorian-urbaniak-17b008135/"
		target="_blank"
		style={"bottom: 20%; right: 20%;" + float}
	>
		<Hexagon
			outlined
			color="#000000"
			image={LinkedinLogo}
			width="100px"
			alt="Linkedin de Dorian URBANIAK"
		/>
	</a>
	<a
		class="floating"
		href="https://github.com/Blyzbee"
		target="_blank"
		style={"top: 20%; left: 20%;" + float2}
	>
		<Hexagon
			outlined
			color="#000000"
			image={GithubLogo}
			width="100px"
			alt="Github de Dorian URBANIAK"
		/>
	</a>
	<!-- <Hexagon outlined color="#E0E0E0" /> -->
</div>

<style lang="scss">
	.section_1 {
		position: relative;
		width: 100%;
		height: 75dvh;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.moi {
		max-width: 350px;
		width: 70dvw;
	}

	.floating {
		position: absolute;
		transition: translate 10s ease-in-out;
	}
</style>
