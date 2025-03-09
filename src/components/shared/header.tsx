import Link from 'next/link'
import { Logo } from './logo'
import { Button } from '../ui/button'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { Media } from '@/payload-types'

const Header = async () => {
  const payload = await getPayload({ config: configPromise })
  //prettier-ignore
  const { docs: [header]} = await payload.find({ collection: 'header' })

  return (
    <header className="relative z-40 w-full py-5">
      <div className="flex items-center justify-between w-10/12 mx-auto">
        <Logo logo={(header.logo as Media) || undefined} loading="eager" priority="high" />
        <div className="flex items-center gap-5">
          <div className="flex gap-4">
            {header.links && header.links.map((i, k) => <MenuItem key={`menu-item-${k}`} {...i} />)}
          </div>
          <Button className="rounded-none rounded-tl-2xl rounded-br-2xl">
            {header['header-cta'] || 'Contact Us'}
          </Button>
        </div>
      </div>
    </header>
  )
}

function MenuItem(props: { menu: string; href: string }) {
  const { href, menu } = props
  return (
    <Link href={href}>
      <span className="text-sm font-normal">{menu}</span>
    </Link>
  )
}

export default Header
