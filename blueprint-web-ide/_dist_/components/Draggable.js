import './Draggable.css.proxy.js';
/* src/components/Draggable.svelte generated by Svelte v3.29.0 */
import {
	SvelteComponent,
	append,
	attr,
	binding_callbacks,
	destroy_each,
	detach,
	element,
	empty,
	init,
	insert,
	listen,
	noop,
	run_all,
	safe_not_equal,
	set_data,
	set_style,
	space,
	subscribe,
	text,
	toggle_class
} from "../../../web_modules/svelte/internal.js";

import { PIN_INPUT, PIN_OUTPUT } from "../models/Pin.js";
import { drawnConnection, connections } from "../store.js";
import { GenerateGUID } from "../utils/random.js";
import { onMount } from "../../../web_modules/svelte.js";
import { derived, get } from "../../../web_modules/svelte/store.js";

function get_each_context(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[24] = list[i][0];
	child_ctx[25] = list[i][1];
	child_ctx[26] = list;
	child_ctx[27] = i;
	return child_ctx;
}

function get_each_context_1(ctx, list, i) {
	const child_ctx = ctx.slice();
	child_ctx[24] = list[i][0];
	child_ctx[25] = list[i][1];
	child_ctx[28] = list;
	child_ctx[27] = i;
	return child_ctx;
}

// (217:8) {#if pin.position === PIN_INPUT}
function create_if_block_1(ctx) {
	let div1;
	let div0;
	let pin = /*pin*/ ctx[25];
	let t0;
	let span;
	let t1_value = /*pin*/ ctx[25].name + "";
	let t1;
	let t2;
	let mounted;
	let dispose;
	const assign_div0 = () => /*div0_binding*/ ctx[13](div0, pin);
	const unassign_div0 = () => /*div0_binding*/ ctx[13](null, pin);

	function mousedown_handler(...args) {
		return /*mousedown_handler*/ ctx[14](/*pin*/ ctx[25], ...args);
	}

	function mouseup_handler_1(...args) {
		return /*mouseup_handler_1*/ ctx[15](/*pin*/ ctx[25], ...args);
	}

	return {
		c() {
			div1 = element("div");
			div0 = element("div");
			t0 = space();
			span = element("span");
			t1 = text(t1_value);
			t2 = space();
			attr(div0, "class", "Point svelte-r16gt");
			attr(div1, "class", "Pin svelte-r16gt");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, div0);
			assign_div0();
			append(div1, t0);
			append(div1, span);
			append(span, t1);
			append(div1, t2);

			if (!mounted) {
				dispose = [
					listen(div1, "mousedown", mousedown_handler),
					listen(div1, "mouseup", mouseup_handler_1)
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;

			if (pin !== /*pin*/ ctx[25]) {
				unassign_div0();
				pin = /*pin*/ ctx[25];
				assign_div0();
			}

			if (dirty & /*$tile*/ 16 && t1_value !== (t1_value = /*pin*/ ctx[25].name + "")) set_data(t1, t1_value);
		},
		d(detaching) {
			if (detaching) detach(div1);
			unassign_div0();
			mounted = false;
			run_all(dispose);
		}
	};
}

// (216:6) {#each Object.entries($tile.definition.pins) as [name, pin], i}
function create_each_block_1(ctx) {
	let if_block_anchor;
	let if_block = /*pin*/ ctx[25].position === PIN_INPUT && create_if_block_1(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*pin*/ ctx[25].position === PIN_INPUT) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block_1(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

// (230:8) {#if pin.position === PIN_OUTPUT}
function create_if_block(ctx) {
	let div1;
	let span;
	let t0_value = /*pin*/ ctx[25].name + "";
	let t0;
	let t1;
	let div0;
	let pin = /*pin*/ ctx[25];
	let t2;
	let mounted;
	let dispose;
	const assign_div0 = () => /*div0_binding_1*/ ctx[16](div0, pin);
	const unassign_div0 = () => /*div0_binding_1*/ ctx[16](null, pin);

	function mousedown_handler_1(...args) {
		return /*mousedown_handler_1*/ ctx[17](/*pin*/ ctx[25], ...args);
	}

	function mouseup_handler_2(...args) {
		return /*mouseup_handler_2*/ ctx[18](/*pin*/ ctx[25], ...args);
	}

	return {
		c() {
			div1 = element("div");
			span = element("span");
			t0 = text(t0_value);
			t1 = space();
			div0 = element("div");
			t2 = space();
			attr(div0, "class", "Point svelte-r16gt");
			attr(div1, "class", "Pin svelte-r16gt");
		},
		m(target, anchor) {
			insert(target, div1, anchor);
			append(div1, span);
			append(span, t0);
			append(div1, t1);
			append(div1, div0);
			assign_div0();
			append(div1, t2);

			if (!mounted) {
				dispose = [
					listen(div1, "mousedown", mousedown_handler_1),
					listen(div1, "mouseup", mouseup_handler_2)
				];

				mounted = true;
			}
		},
		p(new_ctx, dirty) {
			ctx = new_ctx;
			if (dirty & /*$tile*/ 16 && t0_value !== (t0_value = /*pin*/ ctx[25].name + "")) set_data(t0, t0_value);

			if (pin !== /*pin*/ ctx[25]) {
				unassign_div0();
				pin = /*pin*/ ctx[25];
				assign_div0();
			}
		},
		d(detaching) {
			if (detaching) detach(div1);
			unassign_div0();
			mounted = false;
			run_all(dispose);
		}
	};
}

// (229:6) {#each Object.entries($tile.definition.pins) as [name, pin], i}
function create_each_block(ctx) {
	let if_block_anchor;
	let if_block = /*pin*/ ctx[25].position === PIN_OUTPUT && create_if_block(ctx);

	return {
		c() {
			if (if_block) if_block.c();
			if_block_anchor = empty();
		},
		m(target, anchor) {
			if (if_block) if_block.m(target, anchor);
			insert(target, if_block_anchor, anchor);
		},
		p(ctx, dirty) {
			if (/*pin*/ ctx[25].position === PIN_OUTPUT) {
				if (if_block) {
					if_block.p(ctx, dirty);
				} else {
					if_block = create_if_block(ctx);
					if_block.c();
					if_block.m(if_block_anchor.parentNode, if_block_anchor);
				}
			} else if (if_block) {
				if_block.d(1);
				if_block = null;
			}
		},
		d(detaching) {
			if (if_block) if_block.d(detaching);
			if (detaching) detach(if_block_anchor);
		}
	};
}

function create_fragment(ctx) {
	let div5;
	let div0;
	let span0;
	let t0_value = /*$tile*/ ctx[4].definition.name + "";
	let t0;
	let t1;
	let div3;
	let div1;
	let t2;
	let div2;
	let t3;
	let div4;
	let span1;
	let t4;
	let t5_value = /*$tile*/ ctx[4].metadata.id + "";
	let t5;
	let br;
	let t6;
	let span2;
	let t7;
	let t8_value = /*$tile*/ ctx[4].metadata.position.x + "";
	let t8;
	let t9;
	let t10_value = /*$tile*/ ctx[4].metadata.position.y + "";
	let t10;
	let mounted;
	let dispose;
	let each_value_1 = Object.entries(/*$tile*/ ctx[4].definition.pins);
	let each_blocks_1 = [];

	for (let i = 0; i < each_value_1.length; i += 1) {
		each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
	}

	let each_value = Object.entries(/*$tile*/ ctx[4].definition.pins);
	let each_blocks = [];

	for (let i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c() {
			div5 = element("div");
			div0 = element("div");
			span0 = element("span");
			t0 = text(t0_value);
			t1 = space();
			div3 = element("div");
			div1 = element("div");

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].c();
			}

			t2 = space();
			div2 = element("div");

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t3 = space();
			div4 = element("div");
			span1 = element("span");
			t4 = text("ID: ");
			t5 = text(t5_value);
			br = element("br");
			t6 = space();
			span2 = element("span");
			t7 = text("Position: X: ");
			t8 = text(t8_value);
			t9 = text(", Y: ");
			t10 = text(t10_value);
			attr(div0, "class", "Header svelte-r16gt");
			attr(div1, "class", "Inputs svelte-r16gt");
			attr(div2, "class", "Outputs svelte-r16gt");
			attr(div3, "class", "Body svelte-r16gt");
			attr(div4, "class", "Metadata svelte-r16gt");
			attr(div5, "class", "Draggable panzoom-exclude svelte-r16gt");
			set_style(div5, "top", /*$tile*/ ctx[4].metadata.position.y + "px");
			set_style(div5, "left", /*$tile*/ ctx[4].metadata.position.x + "px");
			toggle_class(div5, "Dragging", /*dragging*/ ctx[2] === true);
		},
		m(target, anchor) {
			insert(target, div5, anchor);
			append(div5, div0);
			append(div0, span0);
			append(span0, t0);
			append(div5, t1);
			append(div5, div3);
			append(div3, div1);

			for (let i = 0; i < each_blocks_1.length; i += 1) {
				each_blocks_1[i].m(div1, null);
			}

			append(div3, t2);
			append(div3, div2);

			for (let i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div2, null);
			}

			append(div5, t3);
			append(div5, div4);
			append(div4, span1);
			append(span1, t4);
			append(span1, t5);
			append(div4, br);
			append(div4, t6);
			append(div4, span2);
			append(span2, t7);
			append(span2, t8);
			append(span2, t9);
			append(span2, t10);
			/*div5_binding*/ ctx[19](div5);

			if (!mounted) {
				dispose = [
					listen(window, "mousemove", /*handleMouseMove*/ ctx[6]),
					listen(window, "mouseup", /*mouseup_handler*/ ctx[12]),
					listen(div0, "mousedown", /*handleDragStart*/ ctx[5])
				];

				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*$tile*/ 16 && t0_value !== (t0_value = /*$tile*/ ctx[4].definition.name + "")) set_data(t0, t0_value);

			if (dirty & /*drawConnection, Object, $tile, releaseMouse, pinBindings, PIN_INPUT*/ 408) {
				each_value_1 = Object.entries(/*$tile*/ ctx[4].definition.pins);
				let i;

				for (i = 0; i < each_value_1.length; i += 1) {
					const child_ctx = get_each_context_1(ctx, each_value_1, i);

					if (each_blocks_1[i]) {
						each_blocks_1[i].p(child_ctx, dirty);
					} else {
						each_blocks_1[i] = create_each_block_1(child_ctx);
						each_blocks_1[i].c();
						each_blocks_1[i].m(div1, null);
					}
				}

				for (; i < each_blocks_1.length; i += 1) {
					each_blocks_1[i].d(1);
				}

				each_blocks_1.length = each_value_1.length;
			}

			if (dirty & /*drawConnection, Object, $tile, releaseMouse, pinBindings, PIN_OUTPUT*/ 408) {
				each_value = Object.entries(/*$tile*/ ctx[4].definition.pins);
				let i;

				for (i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(child_ctx, dirty);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(div2, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}

				each_blocks.length = each_value.length;
			}

			if (dirty & /*$tile*/ 16 && t5_value !== (t5_value = /*$tile*/ ctx[4].metadata.id + "")) set_data(t5, t5_value);
			if (dirty & /*$tile*/ 16 && t8_value !== (t8_value = /*$tile*/ ctx[4].metadata.position.x + "")) set_data(t8, t8_value);
			if (dirty & /*$tile*/ 16 && t10_value !== (t10_value = /*$tile*/ ctx[4].metadata.position.y + "")) set_data(t10, t10_value);

			if (dirty & /*$tile*/ 16) {
				set_style(div5, "top", /*$tile*/ ctx[4].metadata.position.y + "px");
			}

			if (dirty & /*$tile*/ 16) {
				set_style(div5, "left", /*$tile*/ ctx[4].metadata.position.x + "px");
			}

			if (dirty & /*dragging*/ 4) {
				toggle_class(div5, "Dragging", /*dragging*/ ctx[2] === true);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div5);
			destroy_each(each_blocks_1, detaching);
			destroy_each(each_blocks, detaching);
			/*div5_binding*/ ctx[19](null);
			mounted = false;
			run_all(dispose);
		}
	};
}

const snapping = 1;

function instance($$self, $$props, $$invalidate) {
	let $tile,
		$$unsubscribe_tile = noop,
		$$subscribe_tile = () => ($$unsubscribe_tile(), $$unsubscribe_tile = subscribe(tile, $$value => $$invalidate(4, $tile = $$value)), tile);

	$$self.$$.on_destroy.push(() => $$unsubscribe_tile());
	
	
	
	
	let { tile } = $$props;
	$$subscribe_tile();
	let { scaling = 1 } = $$props;
	let { offsetX = 0 } = $$props;
	let { offsetY = 0 } = $$props;
	let self;
	let dragging = false;
	let startX = 0;
	let startY = 0;
	let startPageX = 0;
	let startPageY = 0;
	const pinBindings = {};

	onMount(() => {
		// TODO Make not ugly
		$$invalidate(1, self.ide_component = tile, self);

		tile.update(t => {
			return {
				...t,
				metadata: {
					...t.metadata,
					component: self,
					pinComponents: pinBindings
				}
			};
		});
	});

	function handleDragStart(event) {
		$$invalidate(2, dragging = true);
		startX = event.clientX - self.offsetLeft;
		startY = event.clientY - self.offsetTop;
		startPageX = event.pageX;
		startPageY = event.pageY;
	}

	function handleMouseMove(event) {
		if (dragging) {
			const newX = startPageX - startX + (event.pageX - startPageX) / scaling;
			const newY = startPageY - startY + (event.pageY - startPageY) / scaling;

			tile.update(t => {
				return {
					...t,
					metadata: {
						...t.metadata,
						position: {
							x: newX - newX % snapping,
							y: newY - newY % snapping
						}
					}
				};
			});
		}
	}

	function drawConnection(pin) {
		const connection = { metadata: { id: GenerateGUID() } };

		if (pin.position === PIN_OUTPUT) {
			connection.sourceTile = { tile, pin };
		} else {
			connection.targetTile = { tile, pin };
		}

		drawnConnection.set(connection);

		tile.update(t => {
			return {
				...t,
				metadata: {
					...t.metadata,
					pinConnections: {
						...t.metadata.pinConnections,
						[pin.name]: connection
					}
				}
			};
		});
	}

	function releaseMouse(pin) {
		// TODO Remove cast on svelte version >= 3.30
		const connection = get(drawnConnection);

		if (!connection) {
			return;
		}

		if (connection.sourceTile && pin.position === PIN_INPUT) {
			connection.targetTile = { tile, pin };
		} else if (connection.targetTile && pin.position === PIN_OUTPUT) {
			connection.sourceTile = { tile, pin };
		}

		drawnConnection.set(undefined);

		if (connection.sourceTile && connection.targetTile) {
			connections.add(connection);

			tile.update(t => {
				return {
					...t,
					metadata: {
						...t.metadata,
						pinConnections: {
							...t.metadata.pinConnections,
							[pin.name]: connection
						}
					}
				};
			});
		} else {
			const otherTile = connection.sourceTile || connection.targetTile;

			otherTile.tile.update(t => {
				return {
					...t,
					metadata: {
						...t.metadata,
						pinConnections: {
							...t.metadata.pinConnections,
							[otherTile.pin.name]: undefined
						}
					}
				};
			});
		}
	}

	const mouseup_handler = () => $$invalidate(2, dragging = false);

	function div0_binding($$value, pin) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			pinBindings[pin.name] = $$value;
			$$invalidate(3, pinBindings);
		});
	}

	const mousedown_handler = pin => drawConnection(pin);
	const mouseup_handler_1 = pin => releaseMouse(pin);

	function div0_binding_1($$value, pin) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			pinBindings[pin.name] = $$value;
			$$invalidate(3, pinBindings);
		});
	}

	const mousedown_handler_1 = pin => drawConnection(pin);
	const mouseup_handler_2 = pin => releaseMouse(pin);

	function div5_binding($$value) {
		binding_callbacks[$$value ? "unshift" : "push"](() => {
			self = $$value;
			$$invalidate(1, self);
		});
	}

	$$self.$$set = $$props => {
		if ("tile" in $$props) $$subscribe_tile($$invalidate(0, tile = $$props.tile));
		if ("scaling" in $$props) $$invalidate(9, scaling = $$props.scaling);
		if ("offsetX" in $$props) $$invalidate(10, offsetX = $$props.offsetX);
		if ("offsetY" in $$props) $$invalidate(11, offsetY = $$props.offsetY);
	};

	return [
		tile,
		self,
		dragging,
		pinBindings,
		$tile,
		handleDragStart,
		handleMouseMove,
		drawConnection,
		releaseMouse,
		scaling,
		offsetX,
		offsetY,
		mouseup_handler,
		div0_binding,
		mousedown_handler,
		mouseup_handler_1,
		div0_binding_1,
		mousedown_handler_1,
		mouseup_handler_2,
		div5_binding
	];
}

class Draggable extends SvelteComponent {
	constructor(options) {
		super();

		init(this, options, instance, create_fragment, safe_not_equal, {
			tile: 0,
			scaling: 9,
			offsetX: 10,
			offsetY: 11
		});
	}
}

export default Draggable;
//# sourceMappingURL=Draggable.js.map