# 👑 DYNACROWN VISUAL SCRIPT UI EDITOR — Visual Script UI Studio for Minecraft
# 👑 DYNACROWN VISUAL SCRIPT UI EDITOR — Full Tutorial & Manual

Design **Minecraft Bedrock addon Script UI** visually on a blueprint canvas, then copy the
finished code as **TypeScript** or **JavaScript** with one click.
Welcome to the comprehensive user guide and developer manual for **DYNACROWN VISUAL SCRIPT UI EDITOR** (`DCUI-Generator-`).

> Blueprint-style workspace — white grid lines on a blue background — where you wire together
> Triggers, Forms, Controls and Actions, preview the form live, and export a ready-to-run
> behavior-pack script using `@minecraft/server-ui`.
DCUI Editor is a browser-based, visual node blueprint studio designed specifically for **Minecraft Bedrock Edition Addon Script UI** (`@minecraft/server-ui`). It enables you to design forms, buttons, controls, triggers, conditional logic, and in-game commands visually on an interactive canvas, preview them in real time with an authentic Minecraft UI simulator, and export production-ready TypeScript, JavaScript, or one-click `.mcaddon` packages.

## 🌐 LIVE APP ✅
https://dcui.pages.dev
---

## 📑 Table of Contents

1. [Quick Overview & Live Access](#1-quick-overview--live-access)
2. [Interface Layout: The 5 Core Zones](#2-interface-layout-the-5-core-zones)
3. [Step-by-Step Tutorial: Building Your First UI Flow](#3-step-by-step-tutorial-building-your-first-ui-flow)
4. [Wiring Engine & Port Rules](#4-wiring-engine--port-rules)
5. [Complete Node Reference](#5-complete-node-reference)
   - [Flow Nodes (Triggers & Forms)](#flow-nodes)
   - [Control Nodes (Inputs & Elements)](#control-nodes)
   - [Action Nodes (Commands & Execution)](#action-nodes)
6. [Interactive Live Preview & Game Output](#6-interactive-live-preview--game-output)
7. [Multi-Page Navigation (Open Form Node)](#7-multi-page-navigation-open-form-node)
8. [Advanced Mode (Code Editor & Live AST Parsing)](#8-advanced-mode-code-editor--live-ast-parsing)
9. [Images, Textures & One-Click `.mcaddon` Export](#9-images-textures--one-click-mcaddon-export)
10. [Installing and Running in Minecraft Bedrock](#10-installing-and-running-in-minecraft-bedrock)
11. [Settings, Customization & Keyboard Shortcuts](#11-settings-customization--keyboard-shortcuts)
12. [Troubleshooting & Best Practices](#12-troubleshooting--best-practices)

---


## 1. Quick Overview & Live Access

- **URL:** `https://dcui.pages.dev` .
### Live Web Application
- **Official App URL:** `https://dcui.pages.dev`
- **Tutorial Book Link:** `https://dcui_t.pages.dev/`
- **Local Development:** Run `python3 -m http.server 8080` from the root directory and open `http://localhost:8080`.
- **Zero Telemetry & 100% Client-Side:** Everything runs inside your browser. No project data, tokens, or scripts are sent to any remote server. Autosave is maintained locally via `localStorage` or File System Access / OPFS.

---

## ✨ Features

- **🏠 Home screen** — land on a dark-blue launcher with the pixel-art **DYNACROWN VISUAL SCRIPT UI EDITOR** title banner, a grid of
  **My Projects** (autosaved in the browser) and a big **+ New Project** button that drops you
  into a fresh workspace. Create, open, rename or delete projects from the tiles.
- **🎨 Dark node-editor workspace** — near-black canvas with a subtle grid, dark node cards
  with neon category headers and glow ports (Pathmind-style), wires with labels.
- **⬭ Super-easy connections** — drag from an output port ⭘ to an input port **or** simply
  *tap* a port then tap the target port: compatible ports light up, a hint guides you, and a
  haptic tick confirms the wire.
- **🖼️ Branding** — a golden pixel-crown + glowing code `</>` favicon (crisp PNGs, `favicon.ico`,
  `favicon.svg` plus PWA & maskable assets) and a Minecraft-style pixel title banner on the home screen.
- **📖 Tutorial Page** — the home-screen **Tutorial Page** link (and the one in the Workspace
  Guide) opens `https://dcui_t.pages.dev/`, the tutorial book for Script UI.
- **💬 Tooltips everywhere** — hover any button on laptop (or press-and-hold on phone) and a
  small card explains what it does. Palette items, ports, node actions and modals included.
- **🖱️ Robust drag-to-canvas** — laptop: HTML5 drag & drop with `text/plain` fallback (works
  even where custom MIME types fail) plus a "drop here" highlight; phone: touch **ghost-drag**
  that follows your finger, because mobile Safari/Chrome don't fire HTML5 drag events.
- **⚙️ Settings panel** (home) — Font (Default / MINECRAFT / Italics / BOLD), Theme (Default /
  Matrix / Minecraft), a Saturation slider, Experience Mode (Tree ↔ Advanced) and a Preview
  Board background (Overworld / Nether / End / Server). Minecraft theme also turns on a
  synthesized click SFX.
- **🧑💻 Advanced experience mode** — hides the visual editor and leaves exactly three panels:
  **Code Editor**, **Preview Board** and **Game Output**. Import/Export/Generate/Tutorial and
  *Convert to Tree Mode* stay active, and the Preview Board live-parses `ModalFormData` /
  `ActionFormData` / `MessageFormData` code (TS annotations & imports tolerated).
- **🖼️ Images → Resource Pack** — upload `.png` files (picker or drag & drop anywhere), a
  collapsible tray shows thumbnails; when images exist, Generate offers a **.mcaddon** that
  bundles the Behavior Pack (`manifest.json` + `scripts/main.js` + `pack_icon.png`) *and* a
  Resource Pack (`RP/manifest.json` + `RP/textures/*.png`) with a BP→RP dependency, plus a
  reminder to enable **Beta APIs** in Minecraft.
- **⬇️ Flexible download** — the Generate window's Download offers `.dcui` (project), `main.js`,
  `main.ts` or `.mcaddon`; the two **Copy TypeScript / Copy JavaScript** buttons remain the
  final step. The **+ New Project** button asks whether to store in **Browser storage**
  (default) or a **Device / internal folder** (File System Access / OPFS).

- **🔌 Multi-connect ports** — every port accepts **many wires**: fan a Trigger out to several
  forms, or fan one Action into several branches (they run in order). Tap-connect stays armed
  so you can add 2, 3, 4 wires in one session; ports show numbered badges. On phones, double-tap
  a wire to delete it. Identical duplicate wires are politely refused.
- **📂 Open Form pages** — the new *Open Form* action node makes buttons **redirect** to another
  form (like menu pages). In the Live Preview, pressing the button switches to that page, and a
  page-picker appears when you have multiple forms. The exported script calls the target form
  function directly.
- **📝 Node notes** — attach **as many sticky notes as you like** to any node (Properties →
  Notes). Notes are saved with the project and previewed on the node with a 📝 badge.
- **📖 Workspace Guide** — a separate, step-by-step manual (Guide button in the toolbar and on
  the home screen) covering the 5 zones, how to connect, the multi-wire rules, pages, preview
  & export. A discreet one-time hint mentions it; the guided tour was extended too.
- **🖥️ Split preview** — Live Preview and Game output sit **side by side** (preview left,
  output right), not stacked.
- **🔤 Real Minecraft font** — the in-game font is *Mojangles* (Mojang proprietary, not
  redistributable), so Settings → Font → **MINECRAFT** uses **"Minecraft" by Craftron Gaming** —
  the authentic fan-made 16px bitmap recreation (110 glyphs, CC BY 4.0, free for commercial
  use; attribution in `fonts/ATTRIBUTION-Minecraft-Craftron.txt`). **Monocraft** (SIL OFL-1.1)
  is bundled as the Unicode fallback for glyphs the pixel font lacks. Switch fonts anytime in
  Settings — pixel-rendered, no anti-aliasing.
- **🎵 Homepage music** — a synthesized chiptune loop plays on the home screen by default.
  With **Theme = Minecraft**, the homepage instead loops your own theme song
  (`audio/minecraft-theme.mp3`, .txt-renamed uploads welcome) with chiptune fallback, plus
  click SFX. Sound toggles on/off and stops when you enter a project; all button emojis are
  solid white monochrome SVG icons (Export = Import flipped 180°).
- **📱 Fully responsive** — a canvas-first mobile experience: Elements / Preview / Tutorial /
  Generate quick bar, slide-up bottom drawers, **drag to pan + pinch to zoom** on the canvas
  (touch-optimized ports that are easy to hit), haptic feedback, and safe-area support. On
  laptop: collapsible side panels, smoother animations, and a proper installable app (PWA
  manifest + icons) with rich share cards when searched.
- **🧭 Guided tutorial for beginners** — animated arrows that dynamically point at each key
  button/panel (they follow the target as you pan, zoom, scroll or move the window), with a
  spotlight that highlights the live element. Auto-starts on your first visit; replay anytime
  with the **🧭 Tutorial** button.
- **Blueprint canvas** — blue background with white grid lines, pan / zoom / snap /
  box-select, wires that visually connect your Script UI flow.
- **Element Library** — drag or click to add:
  - ⚡ **Flow** — Trigger (item use, **crouch + item use**, block interaction, mob/entity interaction,
    **crouch + mob interaction**, chat command, player join, interval), Form (modal / action / message)
  - 🔘 **Controls** — Button, Toggle, Slider, Dropdown, **Search** input, Text Input, Label, Header, Divider
  - ⚙️ **Actions** — Send Message, Run Command, Give Item, Add Effect, Play Sound, Set Title/Actionbar,
    Teleport, Condition (if/else), Delay
- **Visual wiring** — drag from an output port ⭘ to an input port; control chains become form order;
  a form's *submit* port becomes the code that runs after the player submits.
- **Live Minecraft-style preview** — an interactive form simulator that shows exactly what your
  UI will look like and logs what each action would do (including `${result}` interpolation and
  if/else branches).
- **Properties panel** — edit every label, default value, option and result variable.
- **Global search** — find nodes anywhere on the canvas.
- **Undo / redo, duplicate, delete**, project **import/export** (JSON), autosave to the browser.
- **Export with two big buttons** — **📋 Copy TypeScript** or **📋 Copy JavaScript**, plus a
  **⬇ Download file** button (`main.ts` / `main.js`).
  - Generated code always uses the **stable `@minecraft/server-ui` 1.x** API — positional-argument
    signatures only (no beta/experimental options-objects).
- **❤️ Support the project** — a **Support** button (toolbar, home screen and Settings) links to a
  Selar "Show Love" tip (`https://selar.com/showlove/dynacrown`). Help keep the editor free and
  ad-free; **no user data is collected or sold** — everything stays in the visitor's browser.
## 2. Interface Layout: The 5 Core Zones

The editor workspace is organized into five specialized areas designed for seamless flow-diagram authoring:

```
+------------------------------------------------------------------------------------+
| 1. Top Toolbar (Projects, Undo/Redo, Search, Settings, Preview, Guide, Generate)    |
+-------------------+--------------------------------------------+-------------------+
|                   |                                            |                   |
| 2. Element        | 3. Blueprint Canvas                        | 4. Properties     |
|    Library        |    - Blue grid with interactive nodes      |    Panel          |
|    (Flow,         |    - Wires connecting ports                |    - Dynamic node |
|    Controls,      |    - Drag, zoom, multi-select, snap        |      fields        |
|    Actions)       |                                            |    - Sticky notes |
|                   |                                            |                   |
+-------------------+--------------------------------------------+-------------------+
| 5. Split Bottom Bar: [ Live Minecraft Preview ]  |  [ Game Output Event Trace ]   |
+--------------------------------------------------+---------------------------------+
```

1. **Top Toolbar:**
   - **🏠 Projects / Home:** Return to the project launcher grid.
   - **➕ New / 📂 Import / 💾 Export:** Save or load `.dcui` JSON projects.
   - **↺ Undo / ↻ Redo:** Full history tracking across all node changes and wire connections.
   - **🔍 Global Search:** Instantly locate any node on the canvas by name or type, or spawn new nodes directly.
   - **🧲 Grid & Snap:** Toggle canvas background grid and auto-align snapping.
   - **🖼️ Preview Toggle:** Show/hide the bottom simulator bar.
   - **🧭 Guided Tutorial:** Launch dynamic on-screen tracking arrows highlighting key buttons.
   - **📖 Workspace Guide:** Open the quick in-app cheat sheet.
   - **⚙️ Settings:** Modify themes, Minecraft typography, audio, and experience modes.
   - **⚡ Generate Script:** Open the generator modal to copy TypeScript/JavaScript or download `.mcaddon`.

2. **Left Element Library (Palette):**
   - Categorized repository of building blocks: **Flow** (Triggers, Forms), **Controls** (Buttons, Toggles, Sliders, Dropdowns, Inputs), and **Actions** (Commands, Effects, Teleports, Delays, Page Navigation).
   - Click to add to the canvas center, or drag-and-drop directly onto target coordinates (with mobile touch ghosting support).

3. **Center Blueprint Canvas:**
   - Dark blue blueprint canvas with pan, zoom (mouse wheel / pinch gesture), box-selection, and connection bezier curves.
   - Supports keyboard shortcuts (`Del`, `Ctrl+Z`, `Ctrl+Y`, `Ctrl+C`, `Ctrl+V`, `Space` pan).

4. **Right Properties Panel:**
   - Select any node to configure its parameters in real time (titles, item IDs, min/max values, crouch flags, and dynamic result variable names).
   - Add persistent **Sticky Notes** (📝) to document your logic directly on each node.

5. **Bottom Split Preview & Game Output:**
   - **Left:** Pixel-accurate Minecraft Bedrock form simulator displaying your form title, body, buttons, toggles, sliders, and inputs.
   - **Right:** Live interactive console logging simulated player actions, command invocations, variable substitutions (`${var}`), and condition branches.

---

## 🚀 Quick start
## 3. Step-by-Step Tutorial: Building Your First UI Flow

Let's walk through building a complete, real-world Minecraft Bedrock script UI: **A Staff Admin Menu** opened by right-clicking a compass while crouching.

### Step 1: Add and Configure a Trigger
1. In the **Element Library** (left), click or drag a **Trigger** node onto the canvas.
2. Click the Trigger node to open the **Properties Panel** (right).
3. Set **Event** to `Crouch + interact with this item` (or choose `Item used (right-click)` and set **Crouch rule** to `Only while crouching (sneaking)`).
4. In **Item (item used)**, enter `minecraft:compass`.

### Step 2: Add and Connect a Form
1. From the library, add a **Form** node.
2. In the Properties panel:
   - **Form type:** Select `Modal form (inputs)`.
   - **Title:** `§l§6Staff Utility Menu`.
   - **Submit button:** `Execute Action`.
3. Wire the Trigger to the Form:
   - Click or drag from the Trigger's **open** (`out`) port to the Form's **trigger** (`in`) port.

### Step 3: Add Control Inputs
1. Add a **Toggle** node:
   - **Label:** `Enable Night Vision`.
   - **Default value:** `true`.
   - **Result name:** `giveVision`.
2. Add a **Slider** node:
   - **Label:** `Teleport Height (Y)`.
   - **Minimum:** `64`, **Maximum:** `320`, **Step:** `10`, **Default:** `100`.
   - **Result name:** `targetY`.
3. Chain the controls from the Form:
   - Wire the Form's **controls** (`next`) port to the Toggle's **in** port.
   - Wire the Toggle's **next** port to the Slider's **in** port.
   *(The chain sequence determines the visual ordering inside the Minecraft form).*

### Step 4: Add Conditional Actions & Commands
1. Add a **Condition** node:
   - Left value: `${giveVision}`.
   - Compare: `==`.
   - Right value: `true`.
2. Add an **Add Effect** node:
   - Effect: `night_vision`.
   - Duration: `300` seconds.
   - Amplifier: `1`.
3. Add a **Run Command** node:
   - Command: `tp @s ~ ${targetY} ~`.
4. Connect the action flow:
   - Wire the Form's **submit** port to the Condition's **in** port.
   - Wire the Condition's **yes ✓** port to the Add Effect node's **in** port.
   - Wire the Add Effect node's **next** port to the Run Command's **in** port.

### Step 5: Test in the Live Preview
1. Open the bottom **Live Preview** bar (or press `P`).
2. Interact with the rendered form: flip the toggle, adjust the height slider, and press **Execute Action**.
3. Observe the **Game Output** console on the right: verify that the `${giveVision}` condition evaluated to `true`, the night vision effect was granted, and the teleport command was constructed with the exact `${targetY}` slider value!

### Step 6: Generate & Export
1. Click **⚡ Generate Script** in the top toolbar.
2. Review the generated script and warning validator.
3. Click **📋 Copy JavaScript** (or **📋 Copy TypeScript**), or choose **⬇ Download .mcaddon**.

### Run locally
---

Open `index.html` directly, or serve the folder:
## 4. Wiring Engine & Port Rules

```bash
python3 -m http.server 8080
# → http://localhost:8080
```
The visual editor uses a directional port architecture:

### Build your UI in 3 steps
| Port Style / Label | Color / Appearance | Function & Allowed Connections |
|---|---|---|
| **Flow Output** (`open`, `controls`, `next`) | Purple / Cyan | Sequences triggers into forms, or chains UI controls together. |
| **Action Output** (`submit`, `on click`, `then`) | Emerald Green | Executes logic when a form is submitted or a button is pressed. |
| **Condition Outputs** (`yes ✓`, `no ✗`) | Amber / Gold | Branches execution based on boolean or comparison expressions. |

1. **Add a Trigger** (e.g. *Item used* → `minecraft:stick`, or *Crouch + interact with this mob* →
   `minecraft:villager`) and connect it to a **Form**.
2. Chain **Controls** from the form's `controls` port — order in the form = order of the chain.
3. Connect **Actions** to the form's `submit` port — they run after the player submits.
   (Buttons: connect actions to the button's `on click` port instead.)
### Multi-Wire Rules
- **One-to-Many Fan-Out:** Every output port supports multiple simultaneous connections. For example:
  - A single **Trigger** can trigger multiple forms or log events.
  - A single **Action** or **Submit** port can fan out to execute multiple independent action branches in parallel sequence.
- **Badge Indicators:** Ports with 2 or more active connections display a numerical badge (e.g. `[2]`, `[3]`).
- **Tap-Connect Mode (Mobile & Trackpad Friendly):** Tap any output port to enter connection mode (compatible target ports glow). Tap target input ports to connect. You can tap multiple targets continuously without re-selecting the source. Tap empty canvas space to exit.
- **Deleting Wires:** On desktop, click a wire to select it and press <kbd>Delete</kbd> or <kbd>Backspace</kbd>. On mobile, simply **double-tap** any wire.

Press **⚡ Generate Script** and pick **Copy TypeScript** or **Copy JavaScript**.
---

#
