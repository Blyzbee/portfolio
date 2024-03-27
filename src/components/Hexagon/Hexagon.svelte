<script lang="ts">
	export let Pclass = "";
	export let color = "transparent";
	export let outlined = false;
	export let width = "100%";
	export let image: undefined | string = undefined;
	export let alt: string = "lien";
</script>

<div
	class="hexagon {Pclass}"
	class:outlined
	style="background-color: {color}; width: {width};"
>
	{#if outlined}
		<div class="hexagon_mask" style={image && "background-color: #E0E0E0;"}>
			{#if image}
				<img src={image} {alt} />
			{:else}
				<slot />
			{/if}
		</div>
	{:else}
		<slot />
	{/if}
</div>

<style lang="scss">
	.hexagon {
		position: relative;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
		aspect-ratio: 277/320;
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
	}

	.hexagon_mask {
		width: calc(100% - 7px);
		height: calc(100% - 7px);
		background-color: var(--color-white);
		clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.9rem;
		text-align: center;

		img {
			max-width: 85%;
			max-height: 65%;
			object-fit: cover;
		}
	}
</style>
