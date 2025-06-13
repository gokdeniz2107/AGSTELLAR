import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="relative h-40 w-[40rem] -ml-4">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xLMhpF0IPmmm95Ro5rkE0BEIaX8i5H.png"
          alt="SEGU Teknoloji Logo"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  )
}
