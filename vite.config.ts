import path from 'path';
import { defineConfig, loadEnv } from 'vite';


export default defineConfig(({ mode, command }) => {
    const env = loadEnv(mode, '.', '');
    // Check if we are building for GitHub Pages (you can set this env var in GitHub Actions)
    // Or simply use '/' for Vercel as Vercel deploys to root domain
    const isGitHubPages = mode === 'production' && process.env.GITHUB_PAGES === 'true';
    
    return {
      base: isGitHubPages ? '/yongjin_profile2/' : '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
