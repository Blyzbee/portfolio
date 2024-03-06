<script lang="ts">
	import Hexagon from "../Hexagon/Hexagon.svelte";
	import Moi from "../../assets/images/moi.jpg";
	import LinkedinLogo from "../../assets/icons/linkedin.svg";
	import GithubLogo from "../../assets/icons/github.svg";
	import DownloadLogo from "../../assets/icons/download.svg";
	import CV from "../../assets/images/CV Dorian URBANIAK.pdf";

	let rayon = 10;

	$: float = `translate: ${rayon * Math.random()}dvw ${rayon * Math.random()}dvh`;
	$: float2 = `translate: ${rayon * Math.random()}dvw ${rayon * Math.random()}dvh`;
	$: float3 = `translate: ${rayon * Math.random()}dvw ${rayon * Math.random()}dvh`;

	setInterval(() => {
		if (rayon >= 10) rayon--;
		else rayon++;
	}, 2000);
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
		style={"bottom: 15%; right: 15%;" + float}
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
		style={"top: 15%; left: 15%;" + float2}
	>
		<Hexagon
			outlined
			color="#000000"
			image={GithubLogo}
			width="100px"
			alt="Github de Dorian URBANIAK"
		/>
	</a>
	<a
		class="floating"
		href={CV}
		download="CV Dorian URBANIAK"
		style={"bottom: 15%; left: 15%;" + float3}
	>
		<Hexagon
			outlined
			color="#000000"
			image={DownloadLogo}
			width="100px"
			alt="Télécharger mon CV au format PDF"
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
