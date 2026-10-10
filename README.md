# 👑 DCUI-Generator-Tutorial-

The tutorial book / manual site for **[DYNACROWN VISUAL SCRIPT UI EDITOR](https://dynacrown09-ai.github.io/DCUI-Generator-/)** — the blueprint-style visual node studio for Minecraft Bedrock addon **Script UI** (`@minecraft/server-ui`).

Static site. No build step, no dependencies, no tracking.

## Contents

| File | Purpose |
|---|---|
| `index.html` | The whole tutorial — 12 chapters, all content inline |
| `styles.css` | Blueprint dark theme (CSS custom properties, responsive, print styles) |
| `app.js` | Scroll-spy, mobile drawer, node filter/search, zone inspector, copy buttons, live form simulator |
| `favicon.svg` | Pixel crown + `</>` mark |
| `site.webmanifest` | PWA metadata / share cards |

## Run locally

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

Or just open `index.html` in a browser.

## What's interactive

- **Zone inspector** (§2) — hover or tap any of the 5 workspace zones for a description.
- **Node reference** (§5) — filter by Flow / Controls / Actions, or search all 30 node types live.
- **Form simulator** (§3, step 5) — a working replica of the in-app Live Preview: toggle the switch, move the slider, press **Execute Action**, and the Game Output console logs the trigger, the `formValues`, the interpolated `tp @s ~ ${targetY} ~` command and which condition branch ran. Cancel and clear work too.
- **Copy buttons** — on every code block, with an `execCommand` fallback for older browsers.

## API accuracy

The code snippets target the **stable `@minecraft/server-ui` 1.x** API (positional arguments only), verified against `@minecraft/server-ui@1.3.0` `index.d.ts`.

`ModalFormData` in 1.x exposes only `dropdown`, `show`, `slider`, `submitButton`, `textField`, `title` and `toggle` — there is **no `.label()`**. The Label, Header and Divider nodes are therefore documented as body-text lines and marked with a `†` footnote. `MessageFormData` has only `body`, `show` and `title` (no `.button()`), so its button captions are not renamable from stable-API code. A newer **2.x** stable line exists on npm; pin `"version": "1.x"` in your pack manifest to match the generated code.

## Deploying

Push to the branch configured under **Settings → Pages → Deploy from a branch → / (root)**. GitHub Pages cannot serve a *private* repository on the free plan.

## Support

[selar.com/showlove/dynacrown](https://selar.com/showlove/dynacrown) — keeps the editor free and ad-free. No user data is collected or sold.

---

Minecraft is a trademark of Mojang Studios / Microsoft. This project is not affiliated with or endorsed by them.
