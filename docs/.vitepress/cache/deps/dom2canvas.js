// node_modules/.pnpm/dom2canvas@1.0.3/node_modules/dom2canvas/dist/index.js
function s(a, e) {
  let d = `
    <style>
      h1 {
        color: red;
      }
    </style>
    <h1>Hello World!</h1>
  `;
  typeof a == "string" ? d = a : a != null && a.innerHTML && (d = a.innerHTML);
  const h = f(d, e == null ? void 0 : e.domWidth);
  let r;
  e != null && e.canvas ? r = e.canvas : r = document == null ? void 0 : document.createElement("canvas");
  const l = r.getContext("2d");
  r.width = (e == null ? void 0 : e.canvasWidth) ?? 600, r.height = (e == null ? void 0 : e.canvasHeight) ?? 600;
  const u = new Blob([h], { type: "image/svg+xml;" }), n = new FileReader();
  return n.readAsDataURL(u), n.onload = function(v) {
    var g;
    const w = (g = v.target) == null ? void 0 : g.result, c = new Image();
    c.src = w, c.onload = function() {
      new Promise((t) => {
        l ? (l.drawImage(c, 0, 0), t(c)) : console.log("canvas error", r);
      }).then(() => {
        if (e != null && e.downloadImage) {
          m(r);
          return;
        }
        e != null && e.canvas || document.body.appendChild(r);
      }).catch((t) => {
        console.error(t);
      });
    };
  }, r;
}
function f(a, e = "600px") {
  return `
    <svg xmlns="http://www.w3.org/2000/svg">
        <foreignObject width="${e}" height="100%">
          <div
            xmlns="http://www.w3.org/1999/xhtml"
          >
            ${a}
          </div>
        </foreignObject>
      </svg>
  `;
}
function m(a) {
  const e = document.createElement("a");
  e.setAttribute("href", a.toDataURL("image/png")), e.setAttribute("download", "index.png"), document.body.appendChild(e), e.click(), document.body.removeChild(e);
}
export {
  s as default
};
//# sourceMappingURL=dom2canvas.js.map
