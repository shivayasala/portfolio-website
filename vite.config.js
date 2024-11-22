import { defineConfig } from 'vite';

export default defineConfig({
    server: {
        port: 5173, // Default port
        open: true, // Automatically open the browser
        mimeTypes: {
            'text/jsx': 'text/javascript',
        },
        configureServer: (server) => {
            server.middlewares.use((req, res, next) => {
                if (req.url.endsWith('.tsx')) {
                    res.setHeader('Content-Type', 'text/javascript');
                }
                next();
            });
        }
    },
    build: {
        outDir: 'dist', // Output directory for the build
    },
    resolve: {
        alias: {
            '@': '/src', // Example alias
        },
    },
});
