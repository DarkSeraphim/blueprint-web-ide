
const code = ".Draggable.svelte-r16gt.svelte-r16gt{width:400px;position:absolute;user-select:none;cursor:auto}.Draggable.Dragging.svelte-r16gt.svelte-r16gt{z-index:1}.Draggable.Dragging.svelte-r16gt .Header.svelte-r16gt{cursor:grabbing}.Draggable.svelte-r16gt .Header.svelte-r16gt{background:#ab400d;cursor:grab;padding:10px}.Draggable.svelte-r16gt .Body.svelte-r16gt{background:#171717;display:flex;flex:1;flex-direction:row;padding:10px}.Draggable.svelte-r16gt .Body .Inputs.svelte-r16gt,.Draggable.svelte-r16gt .Body .Outputs.svelte-r16gt{display:flex;flex:1;flex-direction:column;gap:10px;align-items:flex-start}.Draggable.svelte-r16gt .Body .Outputs.svelte-r16gt{align-items:flex-end}.Draggable.svelte-r16gt .Body .Outputs .Point.svelte-r16gt{margin-right:0;margin-left:5px}.Draggable.svelte-r16gt .Body .Pin.svelte-r16gt{display:flex;flex:1;flex-direction:row;line-height:15px;cursor:pointer}.Draggable.svelte-r16gt .Body .Pin .Point.svelte-r16gt{width:12px;height:12px;border-radius:12px;border:2px solid white;margin-right:5px}.Draggable.svelte-r16gt .Metadata.svelte-r16gt{background:#2e1111;padding:10px}";

const styleEl = document.createElement("style");
const codeEl = document.createTextNode(code);
styleEl.type = 'text/css';

styleEl.appendChild(codeEl);
document.head.appendChild(styleEl);