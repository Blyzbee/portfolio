<script lang="ts">
	export let Pclass = "";
	export let notHeader = true;
	export let banner = false;
</script>

<div class="hexagon" class:notHeader>
	{#if !banner}
		<div class="hexagon_part hexagon_part_1"></div>
	{/if}

	<div class={"child " + Pclass}>
		<slot />
	</div>

	<div class="hexagon_part hexagon_part_2"></div>
</div>

<style lang="scss">
	.hexagon {
		display: flex;
		align-items: center;
		justify-content: center;

		.child {
			display: flex;
			align-items: center;
			justify-content: center;
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
	}

	.notHeader {
		.child {
			aspect-ratio: 1/1;
		}
	}
</style>
