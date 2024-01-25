# @hitachivantara/uikit-uno-preset

UI Kit UnoCSS preset.

## Installation

```sh
npm install -D unocss @hitachivantara/uikit-uno-preset
```

Add the `presetHv` to the array of presets in your `vite.config.ts` or `uno.config.ts` files:

```ts
// vite.config.ts
import { defineConfig } from "vite";
import unoCSS from "unocss/vite";
import { presetHv } from "@hitachivantara/uikit-uno-preset";

export default defineConfig({
  plugins: [
    unoCSS({
      presets: [presetHv()],
    }),
  ],
});
```

```ts
// uno.config.ts
import { defineConfig } from "unocss";
import { presetHv } from "@hitachivantara/uikit-uno-preset";

export default defineConfig({
  presets: [presetHv()],
});
```

## Usage

Use any of [Tailwind-like default utility](https://tailwindcomponents.com/cheatsheet/) classes along with the UI Kit theme utilities:

## License

Apache-2.0
```