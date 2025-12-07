import { cn } from "@/lib/utils"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { GlowingCard } from "@/components/ui/glowing-card"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  className?: string
}

export function TestimonialCard({ 
  author,
  text,
  href,
  className
}: TestimonialCardProps) {
  const Wrapper = href ? 'a' : 'div'
  
  return (
    <Wrapper
      {...(href ? { href } : {})}
      className={cn("block max-w-[320px] sm:max-w-[320px]", className)}
    >
      <GlowingCard className="h-full p-4 sm:p-6 bg-gradient-to-b from-muted/50 to-muted/10 hover:from-muted/60 hover:to-muted/20 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12">
            <AvatarImage src={author.avatar} alt={author.name} />
          </Avatar>
          <div className="flex flex-col items-start">
            <h3 className="text-md font-semibold leading-none text-secondary">
              {author.name}
            </h3>
            <p className="text-sm text-secondary/80">
              {author.handle}
            </p>
          </div>
        </div>
        <p className="sm:text-md mt-4 text-sm text-muted-foreground">
          {text}
        </p>
      </GlowingCard>
    </Wrapper>
  )
}
