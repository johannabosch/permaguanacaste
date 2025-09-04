# Permaguanacaste Website Deployment Guide

## 🚀 Deploying to Vercel with Multiple Domains

### Prerequisites
1. **GitHub Account** - Your code needs to be in a GitHub repository

2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Domain Control** - Access to DNS settings for both domains:
   - `permaguanacaste.com`
   - `piscinasnaturales.com`

### Step 1: Prepare Your Repository

1. **Initialize Git Repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Permaguanacaste website with Spanish/English support"
   ```

2. **Create GitHub Repository**:
   - Go to [github.com](https://github.com)
   - Create a new repository named `permaguanacaste-website`
   - Push your code:
   ```bash
   git remote add origin https://github.com/yourusername/permaguanacaste-website.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Connect to Vercel**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your GitHub repository
   - Select "Framework Preset: Next.js"

2. **Configure Build Settings**:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Development Command: `npm run dev`

3. **Deploy**:
   - Click "Deploy"
   - Wait for deployment to complete
   - You'll get a URL like `permaguanacaste-website.vercel.app`

### Step 3: Configure Custom Domains

#### For permaguanacaste.com (Primary Domain)

1. **Add Domain in Vercel**:
   - Go to your project dashboard
   - Click "Domains" tab
   - Add `permaguanacaste.com`
   - Add `www.permaguanacaste.com`

2. **Configure DNS Records**:
   In your domain registrar's DNS settings, add:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   TTL: 3600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

#### For piscinasnaturales.com (Secondary Domain)

1. **Add Domain in Vercel**:
   - In the same project, add `piscinasnaturales.com`
   - Add `www.piscinasnaturales.com`

2. **Configure DNS Records**:
   In piscinasnaturales.com's DNS settings, add:
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   TTL: 3600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

3. **Set Domain Redirect** (Optional):
   - If you want piscinasnaturales.com to redirect to permaguanacaste.com
   - Or keep both domains showing the same content

### Step 4: Environment Variables (if needed)

If you have any API keys or environment variables:
1. Go to your Vercel project settings
2. Click "Environment Variables"
3. Add any required variables

### Step 5: Configure Custom Domain Routing (Advanced)

If you want different behavior for each domain, create:

```javascript
// next.config.ts
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // Check if coming from piscinasnaturales.com
        {
          source: '/:path*',
          has: [
            {
              type: 'host',
              value: 'piscinasnaturales.com',
            },
          ],
          destination: '/:path*',
        },
      ],
    }
  },
}

export default nextConfig;
```

### Step 6: SSL Certificates

Vercel automatically provides SSL certificates for all domains. They'll be ready within a few minutes of adding the domains.

### Step 7: Test Deployment

1. **Check both domains**:
   - Visit `https://permaguanacaste.com`
   - Visit `https://piscinasnaturales.com`

2. **Test functionality**:
   - Language selection works
   - All pages load correctly
   - Contact form submits properly
   - Mobile responsive design works

### Step 8: Set Up Monitoring

1. **Vercel Analytics** (Free):
   - Enable in Vercel dashboard
   - Tracks page views and performance

2. **Google Analytics** (Optional):
   - Add tracking code to your website
   - Monitor user behavior and conversions

## 🔧 Troubleshooting

### Common Issues:

1. **Domain not propagating**:
   - DNS changes can take 24-48 hours
   - Use [whatsmydns.net](https://whatsmydns.net) to check propagation

2. **Build failures**:
   - Check build logs in Vercel dashboard
   - Ensure all dependencies are in package.json

3. **Contact form not working**:
   - Verify Formspree endpoint is correct
   - Check for any CORS issues

### Support Resources:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

## 🌟 Post-Deployment Checklist

- [ ] Both domains resolve correctly
- [ ] SSL certificates are active
- [ ] Language selection works
- [ ] Contact form submits successfully
- [ ] All images load properly
- [ ] Mobile design is responsive
- [ ] Site speed is optimal
- [ ] SEO meta tags are correct

Your website will be live at both domains once DNS propagates!
