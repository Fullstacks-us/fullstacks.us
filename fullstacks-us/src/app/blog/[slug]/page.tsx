import { supabase } from '../../../lib/supabase'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const { data: post } = await supabase
    .from('posts')
    .select('*, author:authors(*)')
    .eq('slug', slug)
    .eq('status', 'published')
    .single()

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link href="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </nav>

        {/* Article Header */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          {post.featured_image && (
            <div className="w-full h-64 md:h-96">
              <Image
                src={post.featured_image}
                alt={post.title}
                width={800}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            {/* Meta Information */}
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>{post.author?.name || 'Unknown Author'}</span>
              <span className="mx-2">•</span>
              <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
              {post.author?.bio && (
                <>
                  <span className="mx-2">•</span>
                  <span>{post.author.bio}</span>
                </>
              )}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            {post.excerpt && (
              <div className="text-xl text-gray-600 mb-8 leading-relaxed">
                {post.excerpt}
              </div>
            )}

            {/* Content */}
            {post.content && (
              <div className="prose prose-lg max-w-none">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                  {post.content}
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Author Bio */}
        {post.author && (
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center">
              {post.author.avatar_url && (
                <Image
                  src={post.author.avatar_url}
                  alt={post.author.name}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-full mr-4"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{post.author.name}</h3>
                {post.author.bio && (
                  <p className="text-gray-600 mt-1">{post.author.bio}</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 