<script lang="ts">
	export let Pclass = "";
	export let banner = false;
</script>

<div
	class="hexagon"
	style="margin-top: {banner ? '2rem' : '0'}; {banner &&
		'margin-left: 0; margin-right: auto'}"
>
	{#if !banner}
		<div class="hexagon_part hexagon_part_1"></div>
	{/if}

	<div class="child {Pclass}" class:banner>
		<slot />
	</div>

	<div class="hexagon_part hexagon_part_2"></div>
</div>

<style lang="scss">
	.hexagon {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 75%;
		max-height: 150px;

		.child {
			height: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: var(--color-black);
		}

		.hexagon_part {
			height: 100%;
			background-color: var(--color-black);
			aspect-ratio: 80/277;

			&_1 {
				clip-path: polygon(100% 0, 0 50%, 100% 100%);
				border-right: 1px var(--color-black) solid;
			}
			&_2 {
				clip-path: polygon(0 0, 100% 50%, 0 100%);
				border-left: 1px var(--color-black) solid;
			}
		}

		.banner {
			padding-left: 4rem;
			padding-right: 2rem;
			text-wrap: nowrap;
		}
	}
</style>
