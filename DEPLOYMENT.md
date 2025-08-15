# Deployment Guide

This guide covers different deployment options for the Matka Frontend application.

## Prerequisites

- Node.js (version 18 or higher)
- npm or yarn
- Git

## Build the Application

Before deploying, build the production version:

```bash
npm run build
```

This will create a `dist/` folder with optimized production files.

## Deployment Options

### 1. GitHub Pages

#### Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" section
4. Select "GitHub Actions" as source
5. The GitHub Actions workflow will automatically build and deploy

#### Manual Deployment

1. Build the application: `npm run build`
2. Push the `dist/` folder to the `gh-pages` branch
3. Enable GitHub Pages in repository settings

### 2. Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to your project directory
3. Run: `vercel`
4. Follow the prompts to deploy

### 3. Netlify

1. Build the application: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

### 4. Firebase Hosting

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

### 5. AWS S3 + CloudFront

1. Build the application: `npm run build`
2. Upload `dist/` contents to S3 bucket
3. Configure CloudFront distribution
4. Set up custom domain (optional)

## Environment Variables

Create a `.env.production` file for production environment:

```env
VITE_API_URL=https://your-api-domain.com
VITE_APP_NAME=Matka Frontend
VITE_APP_VERSION=1.0.0
```

## Build Configuration

The build process is configured in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false, // Disable sourcemaps in production
    minify: "terser",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
        },
      },
    },
  },
});
```

## Performance Optimization

### Code Splitting

- Routes are automatically code-split
- Large components can be lazy-loaded

### Bundle Analysis

Install and run bundle analyzer:

```bash
npm install --save-dev rollup-plugin-visualizer
npm run build:analyze
```

### Image Optimization

- Use WebP format when possible
- Implement lazy loading for images
- Optimize SVG files

## Monitoring and Analytics

### Error Tracking

Consider integrating error tracking services:

- Sentry
- LogRocket
- Bugsnag

### Performance Monitoring

- Web Vitals
- Lighthouse CI
- Core Web Vitals

## Security Considerations

### Content Security Policy

Add CSP headers in your hosting configuration:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';
```

### HTTPS

- Always use HTTPS in production
- Redirect HTTP to HTTPS
- Use HSTS headers

### Environment Variables

- Never commit sensitive data
- Use environment variables for configuration
- Validate environment variables at build time

## Troubleshooting

### Build Issues

- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Verify all dependencies are installed

### Deployment Issues

- Check build output for errors
- Verify hosting platform configuration
- Check environment variables
- Review deployment logs

### Performance Issues

- Analyze bundle size
- Check for large dependencies
- Optimize images and assets
- Implement lazy loading

## Support

For deployment issues:

1. Check the hosting platform documentation
2. Review build logs
3. Check environment configuration
4. Contact the development team

## Resources

- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment](https://create-react-app.dev/docs/deployment/)
- [GitHub Pages](https://pages.github.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com/)



