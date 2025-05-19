
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, MessageCircle, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface BlogPostProps {
  title: string;
  content: React.ReactNode;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  content,
  date,
  author,
  readTime,
  tags,
  image,
  slug
}) => {
  return (
    <article className="max-w-4xl mx-auto" itemScope itemType="https://schema.org/BlogPosting">
      {/* Back to Blog Link */}
      <div className="mb-8">
        <Link to="/blog" className="text-neon-blue hover:text-neon-purple transition-colors duration-300 inline-flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span>Back to all articles</span>
        </Link>
      </div>
      
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient mb-6" itemProp="headline">
          {title}
        </h1>
        
        <div className="flex flex-wrap gap-4 items-center text-white/60 text-sm mb-6">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <time dateTime={date} itemProp="datePublished">{date}</time>
          </div>
          
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
          
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span itemProp="author" itemScope itemType="https://schema.org/Person">
              <span itemProp="name">{author}</span>
            </span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <Link 
              key={index}
              to={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full flex items-center hover:bg-neon-blue/30 transition-colors duration-300"
            >
              <Tag className="h-3 w-3 mr-1" />
              {tag}
            </Link>
          ))}
        </div>
      </header>
      
      {/* Featured Image */}
      <div className="mb-10 rounded-xl overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-cover"
          itemProp="image"
          loading="eager"
          width="1200"
          height="630"
        />
      </div>
      
      {/* Article Content */}
      <div className="prose prose-invert prose-lg max-w-none mb-10" itemProp="articleBody">
        {content}
      </div>
      
      {/* Share Links */}
      <div className="border-t border-white/10 pt-6 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-white font-medium flex items-center">
            <Share2 className="h-4 w-4 mr-2" />
            Share this article
          </span>
          
          <div className="flex gap-3">
            <Button
              size="sm"
              variant="outline"
              className="bg-white/5 border-white/20 hover:bg-white/10"
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=https://botvibex.site/blog/${slug}`, '_blank')}
            >
              <Facebook className="h-4 w-4 mr-1" />
              <span>Facebook</span>
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="bg-white/5 border-white/20 hover:bg-white/10"
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=https://botvibex.site/blog/${slug}&text=${encodeURIComponent(title)}`, '_blank')}
            >
              <Twitter className="h-4 w-4 mr-1" />
              <span>Twitter</span>
            </Button>
            
            <Button
              size="sm"
              variant="outline"
              className="bg-white/5 border-white/20 hover:bg-white/10"
              onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=https://botvibex.site/blog/${slug}`, '_blank')}
            >
              <Linkedin className="h-4 w-4 mr-1" />
              <span>LinkedIn</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Comments Section */}
      <div className="glass-card p-6 rounded-xl mb-10">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center">
          <MessageCircle className="h-5 w-5 mr-2 text-neon-blue" />
          <span>Comments</span>
        </h3>
        
        <div className="mb-6">
          <textarea 
            placeholder="Share your thoughts on this article..."
            className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 focus:border-neon-blue/70 text-white outline-none resize-none min-h-[100px]"
          ></textarea>
          
          <div className="flex justify-end mt-3">
            <Button className="bg-neon-blue text-white hover:bg-neon-blue/90">
              Post Comment
            </Button>
          </div>
        </div>
        
        <div className="space-y-6">
          <p className="text-white/60 text-center">Be the first to comment on this article!</p>
        </div>
      </div>
      
      {/* Schema.org metadata */}
      <meta itemProp="dateModified" content={date} />
      <meta itemProp="publisher" content="BotVibex" />
      <div itemProp="publisher" itemType="https://schema.org/Organization" itemScope>
        <meta itemProp="name" content="BotVibex" />
        <meta itemProp="url" content="https://botvibex.site" />
        <div itemProp="logo" itemType="https://schema.org/ImageObject" itemScope>
          <meta itemProp="url" content="https://botvibex.site/lovable-uploads/6ba6d661-5373-409c-9438-5b040793448e.png" />
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
