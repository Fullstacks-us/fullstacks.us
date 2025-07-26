-- Create authors table
create table authors (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  bio text,
  avatar_url text,
  email text unique,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Create posts table
create table posts (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  slug text unique not null,
  content text,
  excerpt text,
  featured_image text,
  author_id uuid references authors(id) on delete set null,
  status text default 'draft' check (status in ('draft', 'published', 'archived')),
  published_at timestamptz,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Create categories table
create table categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  description text,
  created_at timestamptz default now()
);

-- Create post_categories junction table
create table post_categories (
  post_id uuid references posts(id) on delete cascade,
  category_id uuid references categories(id) on delete cascade,
  primary key (post_id, category_id)
);

-- Create tags table
create table tags (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  created_at timestamptz default now()
);

-- Create post_tags junction table
create table post_tags (
  post_id uuid references posts(id) on delete cascade,
  tag_id uuid references tags(id) on delete cascade,
  primary key (post_id, tag_id)
);

-- Enable Row Level Security
alter table authors enable row level security;
alter table posts enable row level security;
alter table categories enable row level security;
alter table tags enable row level security;

-- Create RLS policies for public read access
create policy "Enable read access for all users on authors"
on authors for select
using (true);

create policy "Enable read access for all users on posts"
on posts for select
using (status = 'published');

create policy "Enable read access for all users on categories"
on categories for select
using (true);

create policy "Enable read access for all users on tags"
on tags for select
using (true);

-- Create indexes for better performance
create index idx_posts_status on posts(status);
create index idx_posts_published_at on posts(published_at);
create index idx_posts_author_id on posts(author_id);
create index idx_posts_slug on posts(slug);

-- Create function to update updated_at timestamp
create or replace function update_updated_at_column()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

-- Create triggers to automatically update updated_at
create trigger update_authors_updated_at
  before update on authors
  for each row
  execute function update_updated_at_column();

create trigger update_posts_updated_at
  before update on posts
  for each row
  execute function update_updated_at_column();

-- Insert some sample data
insert into authors (name, bio, email) values
  ('Admin User', 'Site administrator and content creator', 'admin@fullstacks.us'),
  ('Guest Author', 'Contributing writer', 'guest@fullstacks.us');

insert into categories (name, slug, description) values
  ('Technology', 'technology', 'Technology-related articles'),
  ('Business', 'business', 'Business insights and strategies'),
  ('Development', 'development', 'Software development topics');

insert into tags (name, slug) values
  ('JavaScript', 'javascript'),
  ('React', 'react'),
  ('Next.js', 'nextjs'),
  ('Supabase', 'supabase'),
  ('Web Development', 'web-development'); 