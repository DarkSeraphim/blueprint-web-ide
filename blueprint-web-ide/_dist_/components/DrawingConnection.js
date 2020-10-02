/* src/components/DrawingConnection.svelte generated by Svelte v3.29.0 */
import {
	SvelteComponent,
	create_component,
	destroy_component,
	init,
	listen,
	mount_component,
	noop,
	safe_not_equal,
	transition_in,
	transition_out
} from "../../../web_modules/svelte/internal.js";

import { derived, get, readable, writable } from "../../../web_modules/svelte/store.js";
import Connection from "./Connection.js";

function create_fragment(ctx) {
	let connection_1;
	let current;
	let mounted;
	let dispose;
	connection_1 = new Connection({ props: { bounds: /*bounds*/ ctx[1] } });

	return {
		c() {
			create_component(connection_1.$$.fragment);
		},
		m(target, anchor) {
			mount_component(connection_1, target, anchor);
			current = true;

			if (!mounted) {
				dispose = listen(window, "mousemove", /*handleMouseMove*/ ctx[0]);
				mounted = true;
			}
		},
		p: noop,
		i(local) {
			if (current) return;
			transition_in(connection_1.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(connection_1.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(connection_1, detaching);
			mounted = false;
			dispose();
		}
	};
}

const pointOffsetX = 8;
const pointOffsetY = 10;

function instance($$self, $$props, $$invalidate) {
	
	
	
	let { connection } = $$props;
	let { scaling = 1 } = $$props;
	let { offsetBB } = $$props;
	const mousePos = writable({ x: 0, y: 0 });

	function handleMouseMove(event) {
		mousePos.set({ x: event.pageX, y: event.pageY });
	}

	const bounds = derived([connection, mousePos], ([$connection, $mousePos]) => {
		if (!$connection || !$mousePos) {
			return {
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				swap: false
			};
		}

		let left = $mousePos.x || Number.MAX_SAFE_INTEGER;
		let right = $mousePos.x;
		let top = $mousePos.y || Number.MAX_SAFE_INTEGER;
		let bottom = $mousePos.y;
		let swap = false;

		if ($connection.sourceTile) {
			// TODO Remove cast on svelte version >= 3.30
			const sourceTile = get($connection.sourceTile.tile);

			const sourceBounds = sourceTile.metadata.pinComponents[$connection.sourceTile.pin.name].getBoundingClientRect();
			const x = sourceBounds.x;
			const y = sourceBounds.y;
			left = Math.min(left, x);
			right = Math.max(right, x);
			top = Math.min(top, y);
			bottom = Math.max(bottom, y);
			swap = !(left !== x && top !== y || right !== x && bottom !== y);
		}

		if ($connection.targetTile) {
			// TODO Remove cast on svelte version >= 3.30
			const targetTile = get($connection.targetTile.tile);

			const targetBounds = targetTile.metadata.pinComponents[$connection.targetTile.pin.name].getBoundingClientRect();
			const x = targetBounds.x;
			const y = targetBounds.y;
			left = Math.min(left, x);
			right = Math.max(right, x);
			top = Math.min(top, y);
			bottom = Math.max(bottom, y);
			swap = !(left !== x && top !== y || right !== x && bottom !== y);
		}

		left -= offsetBB.x;
		right -= offsetBB.x;
		top -= offsetBB.y;
		bottom -= offsetBB.y;
		left /= scaling;
		right /= scaling;
		top /= scaling;
		bottom /= scaling;

		// TODO Fix zoom scaling for point offsets
		left += pointOffsetX;

		right += pointOffsetX;
		top += pointOffsetY;
		bottom += pointOffsetY;

		return {
			x: left,
			y: top,
			width: right - left,
			height: bottom - top,
			swap
		};
	});

	$$self.$$set = $$props => {
		if ("connection" in $$props) $$invalidate(2, connection = $$props.connection);
		if ("scaling" in $$props) $$invalidate(3, scaling = $$props.scaling);
		if ("offsetBB" in $$props) $$invalidate(4, offsetBB = $$props.offsetBB);
	};

	return [handleMouseMove, bounds, connection, scaling, offsetBB];
}

class DrawingConnection extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, { connection: 2, scaling: 3, offsetBB: 4 });
	}
}

export default DrawingConnection;
//# sourceMappingURL=DrawingConnection.js.map
