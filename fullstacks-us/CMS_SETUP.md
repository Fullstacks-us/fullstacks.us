# Fullstacks.us Supabase CMS Setup

This guide will help you set up and use the Supabase CMS for your fullstacks.us website.

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env.local` file in the `fullstacks-us` directory with your Supabase credentials:

```env

```

### 2. Database Setup

The database schema is already defined in `supabase/migrations/20250101000000_create_cms_tables.sql`. To apply it:

1. Go to your Supabase dashboard
2. Navigate to the SQL Editor
3. Copy and paste the contents of the migration file
4. Run the SQL commands

### 3. Install Dependencies

```bash
cd fullstacks-us
npm install
```

### 4. Run the Development Server

```bash
npm run dev
```

## 📁 File Structure

```
fullstacks-us/
├── src/
│   ├── app/
│   │   ├── admin/page.tsx          # Admin panel page
│   │   ├── blog/page.tsx           # Blog listing page
│   │   └── blog/[slug]/page.tsx    # Individual blog post page
│   ├── components/
│   │   └── AdminPanel.tsx          # CMS admin interface
│   └── lib/
│       └── supabase.ts             # Supabase client configuration
├── supabase/
│   ├── config.toml                 # Supabase configuration
│   └── migrations/
│       └── 20250101000000_create_cms_tables.sql
└── .env.local                      # Environment variables (create this)
```

## 🎯 Available Pages

- **Admin Panel**: `/admin` - Manage posts, authors, categories, and tags
- **Blog**: `/blog` - View all published blog posts
- **Individual Post**: `/blog/[slug]` - View a specific blog post

## 🗄️ Database Schema

### Tables

1. **authors** - Blog post authors
   - id, name, bio, avatar_url, email, created_at, updated_at

2. **posts** - Blog posts
   - id, title, slug, content, excerpt, featured_image, author_id, status, published_at, created_at, updated_at

3. **categories** - Post categories
   - id, name, slug, description, created_at

4. **tags** - Post tags
   - id, name, slug, created_at

5. **post_categories** - Many-to-many relationship between posts and categories

6. **post_tags** - Many-to-many relationship between posts and tags

### Row Level Security (RLS)

- Public read access for published posts
- Public read access for authors, categories, and tags
- Admin operations require service role key

## 🛠️ Features

### Admin Panel
- Dashboard with statistics
- Post management (view, edit, delete)
- Author management
- Category and tag overview
- Responsive design

### Blog
- Display published posts
- Author information
- Featured images
- Excerpts and full content
- SEO-friendly URLs

## 🔧 Customization

### Adding New Fields

1. Update the database schema in the migration file
2. Update TypeScript interfaces in `src/lib/supabase.ts`
3. Update components to display new fields

### Styling

The CMS uses Tailwind CSS. You can customize the styling by modifying the classes in the components.

### Authentication

Currently, the admin panel is publicly accessible. To add authentication:

1. Set up Supabase Auth
2. Create protected routes
3. Add login/logout functionality

## 🚀 Deployment

### Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production

Make sure to add the same environment variables in your production environment:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`

## 📝 Usage

### Creating a Blog Post

1. Go to `/admin`
2. Click "New Post"
3. Fill in the post details
4. Set status to "published"
5. Save

### Managing Content

- Use the admin panel to manage all content
- Posts can be draft, published, or archived
- Authors can be assigned to posts
- Categories and tags help organize content

## 🔍 Troubleshooting

### Common Issues

1. **Environment variables not working**
   - Make sure `.env.local` is in the correct location
   - Restart the development server

2. **Database connection errors**
   - Verify your Supabase credentials
   - Check if the database schema is applied

3. **Build errors**
   - Ensure all dependencies are installed
   - Check TypeScript types

### Getting Help

- Check the Supabase documentation
- Review the Next.js documentation
- Check the browser console for errors

## 🎉 Next Steps

1. Add authentication to the admin panel
2. Implement rich text editing
3. Add image upload functionality
4. Create more admin features (user management, analytics)
5. Add search functionality
6. Implement pagination for large content lists 