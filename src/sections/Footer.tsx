import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = {
  product: {
    title: '产品',
    links: [
      { label: '智能测评', href: '#' },
      { label: 'AI疏导', href: '#' },
      { label: '危机预警', href: '#' },
      { label: '资源库', href: '#' },
    ],
  },
  company: {
    title: '公司',
    links: [
      { label: '关于我们', href: '#' },
      { label: '新闻动态', href: '#' },
      { label: '加入我们', href: '#' },
      { label: '合作伙伴', href: '#' },
    ],
  },
  support: {
    title: '支持',
    links: [
      { label: '帮助中心', href: '#' },
      { label: '隐私政策', href: '#' },
      { label: '服务条款', href: '#' },
      { label: '联系我们', href: '#' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="relative w-full bg-gray-900 text-white">
      {/* Top wave */}
      <div className="absolute -top-px left-0 right-0 rotate-180">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z"
            fill="#fefdf9"
          />
        </svg>
      </div>

      <div className="section-padding pt-20 pb-8">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content */}
          <div className="grid lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">心约智理</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
                用AI技术守护大学生心理健康，为每一位学生提供温暖、私密、专业的心灵支持。
              </p>
              
              {/* Contact info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@xinyuezhili.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">400-888-8888</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">北京市海淀区中关村</span>
                </div>
              </div>
            </div>

            {/* Links */}
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold text-white mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-brand-green transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-800 mb-8" />

          {/* Bottom */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © 2025 心约智理. 保留所有权利.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Made with love */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for mental health
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
