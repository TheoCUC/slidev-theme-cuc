import { resolve } from "path";
import { mergeWindicssConfig, defineConfig } from "vite-plugin-windicss";
import BaseConfig from "@slidev/client/windi.config";

// extend the base config
export default mergeWindicssConfig(
	BaseConfig,
	defineConfig({
		extract: {
			include: [resolve(__dirname, "**/*.{vue,ts}")],
		},
		shortcuts: {
			// custom the default background
			"border-image":
				"border border-[#121212] border-opacity-10 shadow-md shadow-[#121212] dark:(border-purple-100 border-opacity-10 shadow-purple-100)",
			cucr: "bg-[#cb3431]",
			cucg: "bg-[#26923e]",
			cucb: "bg-[#043d82]",
		},
		theme: {
			extend: {
				// fonts can be replaced here, remember to update the web font links in `index.html`
				fontFamily: {
					sans: '"Rubik", ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
					mono: '"Fira Code", monospace',
				},
			},
			boxShadow: {
				sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
				DEFAULT: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)", // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
				md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
				lg: "0 8px 8px -5px rgba(0, 0, 0, 0.3), 10px 10px 10px -5px rgba(0, 0, 0, 0.04)",
				xl: "10px 10px 15px -5px rgba(0, 0, 0, 0.9), 10px 10px 10px -5px rgba(0, 0, 0, 0.04)",
				inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
				none: "none",
			},
		},
	}),
);
