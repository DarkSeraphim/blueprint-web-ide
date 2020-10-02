import './App.css.proxy.js';
/* src/App.svelte generated by Svelte v3.29.0 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	check_outros,
	component_subscribe,
	create_component,
	destroy_component,
	destroy_each,
	detach,
	element,
	group_outros,
	init,
	insert,
	listen,
	mount_component,
	run_all,
	safe_not_equal,
	set_data,
	set_style,
	space,
	text,
	transition_in,
	transition_out
} from "../web_modules/svelte/internal.js";

import { RegisterLanguageTileDefinition } from "./models/LanguageTileDefinition.js";
import { RegisterTileDefinition } from "./models/TileDefinition.js";
import * as LanguageDefinitions from "./languages/index.js";
import * as BaseDefinitions from "./definitions/index.js";
import Draggable from "./components/Draggable.js";
import DrawingConnection from "./components/DrawingConnection.js";
import Connection from "./components/Connection.js";
import { GenerateGUID } from "./utils/random.js";
import { GetTileDefinition } from "./models/TileDefinition.js";
import { tiles, connections, drawnConnection } from "./store.js";
import { derived, get, writable } from "../web_modules/svelte/store.js";
import { Compile } from "./engine/transpiler.js";
import { onMount } from "../web_modules/svelte.js";
import Panzoom from "../web_modules/@panzoom/panzoom.js";
import ButtonWheel from "./components/ButtonWheel.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[18] = list[i];
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[21] = list[i];
	return child_ctx;
}

// (194:2) {#if contextClick}
function create_if_block_1(ctx) {
	let buttonwheel;
	let current;

	buttonwheel = new ButtonWheel({
			props: { point: /*contextClick*/ ctx[6] }
		});

	return {
		c() {
			create_component(buttonwheel.$$.fragment);
		},
		m(target, anchor) {
			mount_component(buttonwheel, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const buttonwheel_changes = {};
			if (dirty & /*contextClick*/ 64) buttonwheel_changes.point = /*contextClick*/ ctx[6];
			buttonwheel.$set(buttonwheel_changes);
		},
		i(local) {
			if (current) return;
			transition_in(buttonwheel.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(buttonwheel.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(buttonwheel, detaching);
		}
	};
}

// (199:4) {#if $drawnConnection}
function create_if_block(ctx) {
	let drawingconnection;
	let current;

	drawingconnection = new DrawingConnection({
			props: {
				connection: /*validConnecton*/ ctx[11],
				offsetBB: /*self*/ ctx[1].getBoundingClientRect(),
				scaling: /*panScale*/ ctx[3]
			}
		});

	return {
		c() {
			create_component(drawingconnection.$$.fragment);
		},
		m(target, anchor) {
			mount_component(drawingconnection, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const drawingconnection_changes = {};
			if (dirty & /*self*/ 2) drawingconnection_changes.offsetBB = /*self*/ ctx[1].getBoundingClientRect();
			if (dirty & /*panScale*/ 8) drawingconnection_changes.scaling = /*panScale*/ ctx[3];
			drawingconnection.$set(drawingconnection_changes);
		},
		i(local) {
			if (current) return;
			transition_in(drawingconnection.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(drawingconnection.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(drawingconnection, detaching);
		}
	};
}

// (206:4) {#each Object.values($tiles) as tile}
function create_each_block_1(ctx) {
	let draggable;
	let current;

	draggable = new Draggable({
			props: {
				tile: /*tile*/ ctx[21],
				scaling: /*panScale*/ ctx[3],
				offsetX: /*panX*/ ctx[4],
				offsetY: /*panY*/ ctx[5]
			}
		});

	return {
		c() {
			create_component(draggable.$$.fragment);
		},
		m(target, anchor) {
			mount_component(draggable, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const draggable_changes = {};
			if (dirty & /*$tiles*/ 128) draggable_changes.tile = /*tile*/ ctx[21];
			if (dirty & /*panScale*/ 8) draggable_changes.scaling = /*panScale*/ ctx[3];
			if (dirty & /*panX*/ 16) draggable_changes.offsetX = /*panX*/ ctx[4];
			if (dirty & /*panY*/ 32) draggable_changes.offsetY = /*panY*/ ctx[5];
			draggable.$set(draggable_changes);
		},
		i(local) {
			if (current) return;
			transition_in(draggable.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(draggable.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(draggable, detaching);
		}
	};
}

// (210:4) {#each Object.values($connections) as connection}
function create_each_block(ctx) {
	let connection;
	let current;

	connection = new Connection({
			props: {
				bounds: /*calculateBounds*/ ctx[12](/*connection*/ ctx[18])
			}
		});

	return {
		c() {
			create_component(connection.$$.fragment);
		},
		m(target, anchor) {
			mount_component(connection, target, anchor);
			current = true;
		},
		p(ctx, dirty) {
			const connection_changes = {};
			if (dirty & /*$connections*/ 512) connection_changes.bounds = /*calculateBounds*/ ctx[12](/*connection*/ ctx[18]);
			connection.$set(connection_changes);
		},
		i(local) {
			if (current) return;
			transition_in(connection.$$.fragment, local);
			current = true;
		},
		o(local) {
			transition_out(connection.$$.fragment, local);
			current = false;
		},
		d(detaching) {
			destroy_component(connection, detaching);
		}
	};
}

function create_fragment(ctx) {
	let div2;
	let div0;
	let button0;
	let t1;
	let button1;
	let t3;
	let button2;
	let t5;
	let br0;
	let t6;
	let t7_value = Object.values(/*$tiles*/ ctx[7]).length + "";
	let t7;
	let t8;
	let br1;
	let t9;
	let t10;
	let t11;
	let br2;
	let t12;
	let t13;
	let t14;
	let br3;
	let t15;
	let t16;
	let t17;
	let br4;
	let t18;
	let textarea;
	let t19;
	let t20;
	let div1;
	let t21;
	let t22;
	let current;
	let mounted;
	let dispose;
	let if_block0 = /*contextClick*/ ctx[6] && create_if_block_1(ctx);
	let if_block1 = /*$drawnConnection*/ ctx[8] && create_if_block(ctx);
	let each_value_1 = Object.values(/*$tiles*/ ctx[7]);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	const out = i => transition_out(each_blocks_1[i], 1, 1, () => {
		each_blocks_1[i] = null;
	});

	let each_value = Object.values(/*$connections*/ ctx[9]);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	const out_1 = i => transition_out(each_blocks[i], 1, 1, () => {
		each_blocks[i] = null;
	});

	return {
		c() {
			div2 = element("div");
			div0 = element("div");
			button0 = element("button");
			button0.textContent = "Add Draggable";
			t1 = space();
			button1 = element("button");
			button1.textContent = "Compile";
			t3 = space();
			button2 = element("button");
			button2.textContent = "0.90";
			t5 = space();
			br0 = element("br");
			t6 = text(" Total Draggables: ");
			t7 = text(t7_value);
			t8 = space();
			br1 = element("br");
			t9 = text(" Scale: ");
			t10 = text(/*panScale*/ ctx[3]);
			t11 = space();
			br2 = element("br");
			t12 = text(" X: ");
			t13 = text(/*panX*/ ctx[4]);
			t14 = space();
			br3 = element("br");
			t15 = text(" Y: ");
			t16 = text(/*panY*/ ctx[5]);
			t17 = space();
			br4 = element("br");
			t18 = space();
			textarea = element("textarea");
			t19 = space();
			if (if_block0) if_block0.c();
			t20 = space();
			div1 = element("div");
			if (if_block1) if_block1.c();
			t21 = space();

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t22 = space();

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			attr(textarea, "cols", "100");
			attr(textarea, "rows", "10");
			textarea.value = /*compiled*/ ctx[0];
			attr(div0, "class", "HUD svelte-13ojy8i");
			attr(div1, "class", "Container svelte-13ojy8i");
			attr(div2, "class", "App svelte-13ojy8i");
			set_style(div2, "background-position", /*panX*/ ctx[4] + "px " + /*panY*/ ctx[5] + "px");
		},
		m(target, anchor) {
			insert(target, div2, anchor);
			append(div2, div0);
			append(div0, button0);
			append(div0, t1);
			append(div0, button1);
			append(div0, t3);
			append(div0, button2);
			append(div0, t5);
			append(div0, br0);
			append(div0, t6);
			append(div0, t7);
			append(div0, t8);
			append(div0, br1);
			append(div0, t9);
			append(div0, t10);
			append(div0, t11);
			append(div0, br2);
			append(div0, t12);
			append(div0, t13);
			append(div0, t14);
			append(div0, br3);
			append(div0, t15);
			append(div0, t16);
			append(div0, t17);
			append(div0, br4);
			append(div0, t18);
			append(div0, textarea);
			append(div2, t19);
			if (if_block0) if_block0.m(div2, null);
			append(div2, t20);
			append(div2, div1);
			if (if_block1) if_block1.m(div1, null);
			append(div1, t21);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div1, null);
			}

			append(div1, t22);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div1, null);
			}

			/*div1_binding*/ ctx[17](div1);
			current = true;

			if (!mounted) {
				dispose = [
					listen(button0, "click", /*click_handler*/ ctx[14]),
					listen(button1, "click", /*click_handler_1*/ ctx[15]),
					listen(button2, "click", /*click_handler_2*/ ctx[16]),
					listen(div1, "contextmenu", /*onRightClick*/ ctx[13])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if ((!current || dirty & /*$tiles*/ 128) && t7_value !== (t7_value = Object.values(/*$tiles*/ ctx[7]).length + "")) set_data(t7, t7_value);
			if (!current || dirty & /*panScale*/ 8) set_data(t10, /*panScale*/ ctx[3]);
			if (!current || dirty & /*panX*/ 16) set_data(t13, /*panX*/ ctx[4]);
			if (!current || dirty & /*panY*/ 32) set_data(t16, /*panY*/ ctx[5]);

			if (!current || dirty & /*compiled*/ 1) {
				textarea.value = /*compiled*/ ctx[0];
			}

			if (/*contextClick*/ ctx[6]) {
				if (if_block0) {
					if_block0.p(ctx, dirty);

					if (dirty & /*contextClick*/ 64) {
						transition_in(if_block0, 1);
					}
				} else {
					if_block0 = create_if_block_1(ctx);
					if_block0.c();
					transition_in(if_block0, 1);
					if_block0.m(div2, t20);
				}
			} else if (if_block0) {
				group_outros();

				transition_out(if_block0, 1, 1, () => {
					if_block0 = null;
				});

				check_outros();
			}

			if (/*$drawnConnection*/ ctx[8]) {
				if (if_block1) {
					if_block1.p(ctx, dirty);

					if (dirty & /*$drawnConnection*/ 256) {
						transition_in(if_block1, 1);
					}
				} else {
					if_block1 = create_if_block(ctx);
					if_block1.c();
					transition_in(if_block1, 1);
					if_block1.m(div1, t21);
				}
			} else if (if_block1) {
				group_outros();

				transition_out(if_block1, 1, 1, () => {
					if_block1 = null;
				});

				check_outros();
			}

			if (dirty & /*Object, $tiles, panScale, panX, panY*/ 184) {
				each_value_1 = Object.values(/*$tiles*/ ctx[7]);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
						transition_in(each_blocks_1[i], 1);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						transition_in(each_blocks_1[i], 1);
						each_blocks_1[i].m(div1, t22);
					}
				}

				group_outros();

				for (i = each_value_1.length; i < each_blocks_1.length; i += 1) {
					out(i);
				}

				check_outros();
			}

			if (dirty & /*calculateBounds, Object, $connections*/ 4608) {
				each_value = Object.values(/*$connections*/ ctx[9]);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
						transition_in(each_blocks[i], 1);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						transition_in(each_blocks[i], 1);
						each_blocks[i].m(div1, null);
					}
				}

				group_outros();

				for (i = each_value.length; i < each_blocks.length; i += 1) {
					out_1(i);
				}

				check_outros();
			}

			if (!current || dirty & /*panX, panY*/ 48) {
				set_style(div2, "background-position", /*panX*/ ctx[4] + "px " + /*panY*/ ctx[5] + "px");
			}
		},
		i(local) {
			if (current) return;
			transition_in(if_block0);
			transition_in(if_block1);

			for (let i = 0; i < each_value_1.length; i += 1) {
				transition_in(each_blocks_1[i]);
			}

			for (let i = 0; i < each_value.length; i += 1) {
				transition_in(each_blocks[i]);
			}

			current = true;
		},
		o(local) {
			transition_out(if_block0);
			transition_out(if_block1);
			each_blocks_1 = each_blocks_1.filter(Boolean);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				transition_out(each_blocks_1[i]);
			}

			each_blocks = each_blocks.filter(Boolean);

			for (let i = 0; i < each_blocks.length; i += 1) {
				transition_out(each_blocks[i]);
			}

			current = false;
		},
		d(detaching) {
			if (detaching) detach(div2);
			if (if_block0) if_block0.d();
			if (if_block1) if_block1.d();
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			/*div1_binding*/ ctx[17](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

Object.values(BaseDefinitions).forEach(definition => {
	RegisterTileDefinition(definition);
});

Object.entries(LanguageDefinitions).forEach(([language, definitions]) => {
	Object.values(definitions).forEach(definition => {
		RegisterLanguageTileDefinition(language, definition);
	});
});

const pointOffsetX = 8;
const pointOffsetY = 10;

function instance($$self, $$props, $$invalidate) {
	let $tiles;
	let $drawnConnection;
	let $connections;
	component_subscribe($$self, tiles, $$value => $$invalidate(7, $tiles = $$value));
	component_subscribe($$self, drawnConnection, $$value => $$invalidate(8, $drawnConnection = $$value));
	component_subscribe($$self, connections, $$value => $$invalidate(9, $connections = $$value));
	
	
	
	
	
	let compiled = "";
	let self;
	let panzoom;
	let panScale = 0;
	let panX = 0;
	let panY = 0;
	let contextClick;

	onMount(() => {
		$$invalidate(2, panzoom = Panzoom(self, {
			maxScale: 2,
			contain: "outside",
			setTransform: (elem, { scale, x, y }) => {
				$$invalidate(3, panScale = scale);
				$$invalidate(4, panX = x);
				$$invalidate(5, panY = y);
				panzoom.setStyle("transform", `scale(${scale}) translate(${x}px, ${y}px)`);
			}
		}));

		parent.addEventListener("wheel", panzoom.zoomWithWheel);
	});

	const generateTile = () => {
		return {
			definition: GetTileDefinition("Sum"),
			metadata: {
				id: GenerateGUID(),
				position: {
					x: document.documentElement.clientWidth / 2,
					y: document.documentElement.clientHeight / 2
				}
			}
		};
	};

	const validConnecton = derived(drawnConnection, $drawnConnection => {
		return $drawnConnection;
	});

	const calculateBounds = connection => {
		const conn = get(connection);

		if (!conn || !conn.sourceTile || !conn.targetTile) {
			return writable({
				x: 0,
				y: 0,
				width: 0,
				height: 0,
				swap: false
			});
		}

		return derived([conn.sourceTile.tile, conn.targetTile.tile], ([sourceTile, targetTile]) => {
			let left = Number.MAX_SAFE_INTEGER;
			let right = 0;
			let top = Number.MAX_SAFE_INTEGER;
			let bottom = 0;
			const sourceBounds = sourceTile.metadata.pinComponents[conn.sourceTile.pin.name].getBoundingClientRect();
			const targetBounds = targetTile.metadata.pinComponents[conn.targetTile.pin.name].getBoundingClientRect();
			left = Math.min(left, sourceBounds.x);
			right = Math.max(right, sourceBounds.x);
			top = Math.min(top, sourceBounds.y);
			bottom = Math.max(bottom, sourceBounds.y);
			left = Math.min(left, targetBounds.x);
			right = Math.max(right, targetBounds.x);
			top = Math.min(top, targetBounds.y);
			bottom = Math.max(bottom, targetBounds.y);
			const swap = !(left !== targetBounds.x && top !== targetBounds.y || right !== targetBounds.x && bottom !== targetBounds.y);
			top -= pointOffsetY - 4;
			const containerBB = self.getBoundingClientRect();
			left -= containerBB.x;
			right -= containerBB.x;
			top -= containerBB.y;
			bottom -= containerBB.y;
			left /= panScale;
			right /= panScale;
			top /= panScale;
			bottom /= panScale;

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
	};

	const onRightClick = event => {
		event.preventDefault();
		let current = event.target;

		while (current && !("ide_component" in current)) {
			current = current.parentElement;
		}

		if (!current) {
			$$invalidate(6, contextClick = undefined);
		} else {
			$$invalidate(6, contextClick = {
				pageX: event.pageX,
				pageY: event.pageY,
				offsetX: event.offsetX,
				offsetY: event.offsetY,
				context: current.ide_component
			});
		}
	};

	const click_handler = () => tiles.add(generateTile());
	const click_handler_1 = () => $$invalidate(0, compiled = Compile());
	const click_handler_2 = () => panzoom.zoom(0.9);

	function div1_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			self = $$value;
			$$invalidate(1, self);
		});
	}

	return [
		compiled,
		self,
		panzoom,
		panScale,
		panX,
		panY,
		contextClick,
		$tiles,
		$drawnConnection,
		$connections,
		generateTile,
		validConnecton,
		calculateBounds,
		onRightClick,
		click_handler,
		click_handler_1,
		click_handler_2,
		div1_binding
	];
}

class App extends SvelteComponent {
	constructor(options) {
		super();
		init(this, options, instance, create_fragment, safe_not_equal, {});
	}
}

export default App;