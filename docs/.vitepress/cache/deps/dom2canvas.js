// node_modules/.pnpm/dom2canvas@1.0.4/node_modules/dom2canvas/dist/index.js
function x(t, l, e) {
  let a, g = `
    <style>
      h1 {
        color: red;
      }
    </style>
  `;
  typeof t == "string" ? a = t : t instanceof HTMLElement ? a = t.outerHTML : a = `
      <h1>Hello World124</h1>
    `, l && (g = l);
  const s = i(a, g, (e == null ? void 0 : e.width) ?? 660);
  let r;
  e != null && e.canvas ? r = e.canvas : r = document == null ? void 0 : document.createElement("canvas");
  const n = r.getContext("2d");
  r.width = (e == null ? void 0 : e.width) ?? 660, r.height = (e == null ? void 0 : e.height) ?? 660;
  const d = new Blob([s], { type: "image/svg+xml;" }), w = new FileReader();
  return new Promise((f) => {
    w.readAsDataURL(d), w.onload = function(v) {
      var h;
      const m = (h = v.target) == null ? void 0 : h.result, c = new Image();
      c.src = m, c.onload = function() {
        new Promise(() => {
          n ? (n.drawImage(c, 0, 0), f(r)) : console.log("canvas error", r);
        }).catch((u) => {
          console.error(u);
        });
      };
    };
  });
}
function i(t, l, e) {
  return `
      <svg xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="${e}" height="100%">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
          >
            ${l}
            ${t}
          </div>
        </foreignObject>
      </svg>
  `;
}
export {
  x as default
};
//# sourceMappingURL=dom2canvas.js.map
