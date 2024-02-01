<script lang="ts">
	import Hexagon from "../components/Hexagon/Hexagon.svelte";
	import Moi from "../assets/images/moi.jpg";
</script>

<div class="moi">
	<Hexagon>
		<Hexagon />
		<img src={Moi} alt="Dorian URBANIAK" />
	</Hexagon>
</div>

<style lang="scss">
	.moi {
		width: 80%;
		max-width: 500px;
	}
</style>
