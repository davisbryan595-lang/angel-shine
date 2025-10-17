import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { label: "Exterior Detailing", href: "#services" },
      { label: "Interior Detailing", href: "#services" },
      { label: "Paint Protection", href: "#services" },
      { label: "Express Service", href: "#services" },
    ],
    Company: [
      { label: "About Us", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Testimonials", href: "#" },
      { label: "Blog", href: "#" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  }

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4" aria-label="Angel's Shine Detailing">
              <div className="w-20 h-20 bg-primary rounded-lg overflow-hidden ring-2 ring-[var(--metallic-silver)] ring-offset-2 ring-offset-background logo-metallic-glow">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F5c758e804cba4fa3a488e9088887877b%2F3112de0cfabb4364b4df0113ae51281e?format=webp&width=800"
                alt="Angel's Shine Detailing logo"
                width={80}
                height={80}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            </Link>
            <p className="text-muted-foreground text-sm mb-4">
              Premium auto detailing services in Tucson, AZ. Shine that lasts.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Phone className="w-4 h-4" />
                <a href="tel:+15205550123" className="hover:text-foreground transition-colors">
                  (520) 555-0123
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@angelsshine.com" className="hover:text-foreground transition-colors">
                  info@angelsshine.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4" />
                <span>Tucson, Arizona</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Angel's Shine Detailing. All rights reserved.
          </p>
          <div className="flex gap-4">
            {[
              { label: 'Facebook', href: '#', Icon: Facebook },
              { label: 'Instagram', href: '#', Icon: Instagram },
              { label: 'Twitter', href: '#', Icon: Twitter },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm flex items-center justify-center"
              >
                <social.Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
