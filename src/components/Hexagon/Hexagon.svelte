<script lang="ts">
	export const hexagonWidth: number = 0;
	export let outlined = false;
	export let header = false;

	console.log(outlined);
</script>

<div class="hexagon" class:outlined class:header style="">
	<slot />
</div>

<style lang="scss">
	.hexagon {
		position: relative;

		&::before,
		&::after {
			content: "";
			position: absolute;
			width: 0;
			border-left: 50px solid transparent;
			border-right: 50px solid transparent;
		}

		&::before {
			top: -29px;
			border-bottom: 29px solid #3498db;
		}

		&::after {
			bottom: -29px;
			border-top: 29px solid #3498db;
		}
	}

	.header {
		&::before,
		&::after {
			border-top: 50px solid transparent;
			border-bottom: 50px solid transparent;
		}

		&::before {
			left: -58px;
			border-right: 29px solid #3498db;
		}

		&::after {
			right: -29px;
			border-left: 29px solid #3498db;
		}
	}
</style>
