'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Book,
  FileText,
  Gavel,
  Home,
  Info,
  Megaphone,
  Sparkles,
  Eye,
  Angry,
  Landmark,
  Leaf,
  Mail,
} from 'lucide-react';

import { cn } from '@/lib/utils';
import { Logo } from '@/components/icons';
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const links = [
  { href: '/dashboard', label: 'Dashboard', icon: Home },
  { href: '/spotlight', label: 'In the Spotlight', icon: Eye },
  { href: '/did-what', label: 'They Did What!?!', icon: Angry },
  { href: '/prioritize', label: 'AI Prioritizer', icon: Sparkles },
  { href: '/blog', label: 'Community Blog', icon: Book },
  { href: '/documents', label: 'Document Archive', icon: FileText },
  { href: '/legal', label: 'Legal Actions', icon: Gavel },
  { href: '/alerts', label: 'Action Alerts', icon: Megaphone },
  { href: '/land-use', label: 'Land Use', icon: Landmark },
  { href: '/natural-resources', label: 'Natural Resources', icon: Leaf },
  { href: '/signup', label: 'Sign Up', icon: Mail },
  { href: '/about', label: 'About', icon: Info },
];

export function SidebarNav() {
  const pathname = usePathname();
  const { isMobile } = useSidebar();

  return (
    <Sidebar
      className="border-r bg-card"
      collapsible="icon"
      variant={isMobile ? 'floating' : 'sidebar'}
    >
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 data-[collapsible=icon]:hidden"
            asChild
          >
            <Link href="/dashboard">
              <Logo className="size-6 text-primary" />
              <span className="sr-only">Fitchburg Civic Integrity</span>
            </Link>
          </Button>
          <div className="flex-1 overflow-hidden">
            <h2 className="truncate text-lg font-semibold tracking-tight font-headline">
              Fitchburg Civic Integrity
            </h2>
          </div>
          <SidebarTrigger className="data-[collapsible=icon]:hidden" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {links.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith(link.href)}
                tooltip={{ children: link.label }}
              >
                <Link href={link.href}>
                  <link.icon />
                  <span>{link.label}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
