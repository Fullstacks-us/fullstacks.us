# FullStacks US - Fractional CTO Services

A modern Next.js website for FullStacks US, offering Fractional CTO services to startups and growing businesses.

## 🚀 Features

- **Modern Design**: Clean, professional design focused on Fractional CTO services
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 15 and optimized for speed
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Contact Forms**: Integrated contact forms with validation
- **Calendly Integration**: Easy consultation booking
- **Analytics**: Vercel Analytics integration for insights

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fullstacks-us
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── Services.tsx        # Services showcase
│   ├── Pricing.tsx         # Pricing plans
│   ├── Testimonials.tsx    # Client testimonials
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer
```

## 🎨 Components

### Header
- Responsive navigation with mobile menu
- Smooth scrolling anchor links
- Call-to-action button

### Hero
- Compelling value proposition
- Key benefits highlighting
- Multiple call-to-action buttons
- Trust indicators

### Services
- Six core Fractional CTO services
- Detailed feature lists
- Why choose Fractional CTO section

### Pricing
- Three pricing tiers (Starter, Growth, Scale)
- Feature comparisons
- Custom solutions section
- FAQ section

### Testimonials
- Client success stories
- Industry-specific testimonials
- Success metrics
- Statistics showcase

### Contact
- Form validation with React Hook Form
- Calendly integration for booking
- Contact information
- Response time expectations

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables if needed
4. Deploy automatically

### Custom Domain Setup

1. Add `fullstacks.us` as a custom domain in Vercel
2. Update DNS records:
   - Remove existing A records pointing to GitHub
   - Add A record pointing to `76.76.21.21` (Vercel's IP)
   - Keep existing CNAME for Stripe payments

## 📝 Environment Variables

Create a `.env.local` file for local development:

```env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=https://fullstacks.us
```

## 🔧 Customization

### Colors
The site uses a blue color scheme. To customize colors, update the Tailwind classes in the components or modify the Tailwind config.

### Content
Update the content in each component file to match your specific services and messaging.

### Calendly Integration
Update the Calendly URL in the Contact component to your actual Calendly link.

## 📊 Analytics

The site includes Vercel Analytics for tracking:
- Page views
- User interactions
- Performance metrics

## 🔒 Security

- Form validation with Zod
- CSRF protection
- Secure headers
- Input sanitization

## 📱 Mobile Optimization

- Responsive design
- Touch-friendly interactions
- Optimized images
- Fast loading times

## 🎯 SEO

- Semantic HTML structure
- Meta tags optimization
- Open Graph tags
- Twitter Card support
- Structured data (when needed)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to FullStacks US.

## 📞 Support

For support or questions, contact:
- Email: info@fullstacks.us
- Phone: (443) 390-7503

---

Built with ❤️ by FullStacks US
