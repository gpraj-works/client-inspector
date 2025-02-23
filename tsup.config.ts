import { defineConfig } from 'tsup'

const isProduction = process.env.NODE_ENV === 'production'

export default defineConfig(({ watch = false }) => ({
    clean: true,  // Remove old builds
    dts: true,    // Generate TypeScript declaration files
    entry: {
        index: 'src/index.ts',
    },
    external: [],  // Add dependencies here if you want them to be externalized
    format: ['cjs', 'esm'],  // CommonJS and ES Modules
    minify: isProduction,  // Minify for production builds
    sourcemap: false,  // Disable source maps for a smaller package
    treeshake: true,  // Remove unused code
    splitting: true,  // Enable code splitting
    watch,
}))
