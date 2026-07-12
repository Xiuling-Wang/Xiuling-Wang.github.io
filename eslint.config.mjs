import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "dist/**",
    "docs/**",
    ".wrangler/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      // The production site is a static export and deliberately serves local
      // public assets without a runtime image optimiser.
      "@next/next/no-img-element": "off",
      // Full-page language switches remain ordinary links in the framework-free
      // static export so no client-side router is required.
      "@next/next/no-html-link-for-pages": "off",
    },
  },
]);

export default eslintConfig;
