'use client'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import Typography from '@/components/ui/typography'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MenuIcon, X } from 'lucide-react'

interface SidebarProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Header({ className }: SidebarProps) {
  const pathname = usePathname()
  const items = [
    {
      href: 'https://google.com',
      title: 'Our work',
      openInNewTab: true
    },
    {
      href: 'https://google.com',
      title: 'Get in touch',
      openInNewTab: true
    }
    // { href: '#pricing', title: 'Features' },
    // {
    //   href: 'mailto:myemail@.com',
    //   title: 'Contact Us'
    // }
  ]

  const getLogo = () => (
    <div className="flex items-center gap-x-4 w-1/2 md:w-1/3">
      <img src="/logo.svg" className="h-10"/>
        <Link
          href="/"
          className="pointer block w-fit"
          target="_blank">
        <Typography>
          East Bay LXD
        </Typography>
      </Link>
    </div>

  )

  const getAuthButtons = () => (
    <div className="flex gap-3 items-center">
      <Link
        href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
        target="_blank"
      >
        <Typography variant="p">Login</Typography>
      </Link>
      <Link
        href="https://map.sistilli.dev/public/coding/SaaS+Boilerplate"
        target="_blank"
      >
        <Button size="tiny" color="ghost">
          <Typography variant="p" className="text-black">
            Sign Up
          </Typography>
        </Button>
      </Link>
    </div>
  )

  const getHeaderItems = () => {
    return (
      <>
        {items.map((item) => {
          const selected =
            pathname === item.href ||
            pathname.includes(item.href)
          return (
            <Link
              href={item.href}
              className="pointer block w-fit"
              target={item.openInNewTab ? '_blank' : ''}
              key={item.title}
            >
              <Typography
                variant="p"
                className={cn(selected && 'text-primary')}
              >
                {item.title}
              </Typography>
            </Link>
          )
        })}
      </>
    )
  }

  return (
    <div
      className={cn(
        `flex md:h-12 h-14 items-center justify-center w-full
          border-b`,
        className
      )}
    >
      <div className="h-10 w-full max-w-[1280px] md:px-8 px-4">
        {/* Desktop */}
        <div className="h-10 flex items-center gap-x-8">
          {getLogo()}
          <div className="hidden md:flex items-center gap-x-8 w-1/3">
            {getHeaderItems()}
          </div>
          <div className="px-3 absolute right-0 hidden md:flex items-center w-fit">
            {getAuthButtons()}
          </div>
            {/* Mobile */}
          <div className="px-3 absolute right-0 md:hidden flex gap-3 items-center w-fit">
            {getAuthButtons()}
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <MenuIcon />
              </DrawerTrigger>
              <DrawerContent className="h-screen top-0 right-0 left-auto mt-0 w-64 rounded-none">
                <div className="mx-auto w-full p-5">
                  <DrawerHeader>
                    <DrawerClose asChild>
                      <div className="w-full flex items-end justify-end">
                        <X />
                      </div>
                    </DrawerClose>
                  </DrawerHeader>
                  <div className="p-4 pb-0 space-y-4">
                    {getHeaderItems()}
                  </div>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  )
}
