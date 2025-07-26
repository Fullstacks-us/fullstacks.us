# Deployment Guide - FullStacks US

## 🚀 Pre-Deployment Checklist

### 1. Code Review
- [ ] All ESLint errors resolved
- [ ] TypeScript compilation successful
- [ ] Build completes without errors
- [ ] All components render correctly
- [ ] Responsive design tested on mobile/tablet/desktop

### 2. Content Review
- [ ] All text content is accurate and professional
- [ ] Contact information is correct
- [ ] Pricing information is current
- [ ] Calendly link is working
- [ ] Social media links are correct

### 3. SEO & Meta Tags
- [ ] Page title is optimized
- [ ] Meta description is compelling
- [ ] Open Graph tags are set
- [ ] Twitter Card tags are configured
- [ ] Favicon is in place

## 🌐 Vercel Deployment Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Initial FullStacks US Fractional CTO website"
git push origin main
```

### 2. Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import the `fullstacks-us` repository
5. Configure project settings:
   - Framework Preset: Next.js
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 3. Environment Variables
Add these environment variables in Vercel dashboard:
```
NEXT_PUBLIC_SITE_URL=https://fullstacks.us
```

### 4. Deploy
- Click "Deploy"
- Wait for build to complete
- Test the deployed site

## 🔗 Custom Domain Setup

### 1. Add Custom Domain in Vercel
1. Go to Project Settings → Domains
2. Add `fullstacks.us`
3. Follow Vercel's DNS configuration instructions

### 2. Update DNS Records
In your domain registrar (Namecheap), update DNS records:

**Remove existing records:**
- Any A records pointing to GitHub Pages

**Add new records:**
```
Type: A
Name: @
Value: 76.76.21.21
TTL: 600
```

**Keep existing records:**
- CNAME for `pay` pointing to `hosted-checkout.stripecdn.com` (for Stripe)

### 3. Verify Domain
- Wait for DNS propagation (up to 48 hours)
- Verify domain is working in Vercel dashboard
- Test HTTPS redirects

## 📊 Post-Deployment Tasks

### 1. Analytics Setup
- [ ] Vercel Analytics is automatically enabled
- [ ] Test analytics tracking
- [ ] Set up Google Analytics (if needed)

### 2. Performance Testing
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Test loading speed
- [ ] Verify mobile performance

### 3. Functionality Testing
- [ ] Contact form submission
- [ ] Calendly booking integration
- [ ] Navigation links
- [ ] Responsive design
- [ ] Cross-browser compatibility

### 4. SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Analytics tracking
- [ ] Check meta tags with browser dev tools
- [ ] Test social media sharing

## 🔧 Maintenance

### Regular Tasks
- [ ] Monitor Vercel Analytics
- [ ] Check for security updates
- [ ] Review and update content
- [ ] Test contact form functionality
- [ ] Verify Calendly integration

### Performance Monitoring
- [ ] Monitor Core Web Vitals
- [ ] Check for broken links
- [ ] Review page load times
- [ ] Monitor error rates

## 🆘 Troubleshooting

### Common Issues

**Build Failures:**
- Check for TypeScript errors
- Verify all dependencies are installed
- Review ESLint configuration

**Domain Issues:**
- Verify DNS records are correct
- Check domain propagation status
- Ensure SSL certificate is active

**Performance Issues:**
- Optimize images
- Review bundle size
- Check for unnecessary dependencies

## 📞 Support

For deployment issues:
- Vercel Documentation: https://vercel.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Contact: info@fullstacks.us

---

**Deployment Date:** [Date]
**Deployed By:** [Name]
**Version:** 1.0.0 