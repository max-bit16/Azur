import sharp from 'sharp'
import { mkdirSync } from 'fs'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
    out: 'public/images/hero.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80',
    out: 'public/images/heritage-left.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=600&q=80',
    out: 'public/images/heritage-right.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80',
    out: 'public/images/bento-terrasse.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?w=600&q=80',
    out: 'public/images/bento-cave.webp'
  },
  {
    url: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80',
    out: 'public/images/bento-chef.webp'
  }
]

mkdirSync('public/images', { recursive: true })

for (const img of images) {
  const res = await fetch(img.url)
  const buffer = await res.arrayBuffer()
  await sharp(Buffer.from(buffer))
    .webp({ quality: 82 })
    .toFile(img.out)
  console.log(`✅ ${img.out}`)
}
