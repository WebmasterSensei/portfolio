"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reviews = [
  {
    name: "PHP",
    username: "@php",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://www.php.net/images/logos/new-php-logo.svg",
  },
  {
    name: "JavaScript",
    username: "@javascript", 
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    name: "Docker",
    username: "@docker",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png",
  },
  {
    name: "Ant Design",
    username: "@antdesign",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
  },
  {
    name: "Laravel",
    username: "@laravel",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://laravel.com/img/logomark.min.svg",
  },
  {
    name: "Vue 3",
    username: "@vue3",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://vuejs.org/images/logo.png",
  },
  {
    name: "React",
    username: "@reactjs",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Next.js",
    username: "@nextjs",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://assets.vercel.com/image/upload/v1607554385/repositories/next-js/next-logo.png",
  },
  {
    name: "Nginx",
    username: "@nginx",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://icon.icepanel.io/Technology/svg/NGINX.svg",
  },
  {
    name: "Apache",
    username: "@apache",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://icon.icepanel.io/Technology/svg/Apache.svg",
  },
  {
    name: "Flutter",
    username: "@flutter",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://storage.googleapis.com/cms-storage-bucket/4fd0db61df0567c0f352.png",
  },
  {
    name: "Dart",
    username: "@dart",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://dart.dev/assets/shared/dart/icon/64.png",
  },
  {
    name: "Tailwind CSS",
    username: "@tailwind",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
  {
    name: "Bootstrap",
    username: "@bootstrap",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
  },
  {
    name: "HTML5",
    username: "@html5",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
  {
    name: "CSS3",
    username: "@css3",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    name: "Node.js",
    username: "@nodejs",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://nodejs.org/static/images/logo.svg",
  },
  {
    name: "NestJS",
    username: "@nestjs",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://nestjs.com/img/logo-small.svg",
  },
  {
    name: "npm",
    username: "@npm",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://icon.icepanel.io/Technology/svg/NPM.svg",
  },
 
  {
    name: "Bun",
    username: "@bun",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://bun.sh/logo.svg",
  },
  {
    name: "Mysql",
    username: "@mysql",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://icon.icepanel.io/Technology/svg/MySQL.svg",
  },

];

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-36 border-none cursor-pointer overflow-hidden rounded-xl border p-4 transition-colors duration-300",
        // Light mode
        // "border-gray-950/[.1] bg-gray-950/[.02] hover:bg-gray-950/[.05]",
        // Dark mode
        
      )}
    >
      <div className="flex flex-row items-center gap-1 mb-2">
        <img
          src={img}
          alt={name}
          className="rounded w-[70px] h-[50px] object-contain filter hover:grayscale-0 hover:scale-150
           transition-transform duration-300"
        />
      </div>


    </figure>
  )
}

export function MarqueeComponent() {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden py-3">
      {/* Single marquee row */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>


    </div>
  )
}
