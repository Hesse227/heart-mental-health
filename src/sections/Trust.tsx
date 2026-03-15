import { useRef, useEffect, useState } from 'react';
import { Shield, Lock, FileCheck, Award, CheckCircle } from 'lucide-react';

interface TrustItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  details: string[];
}

const trustItems: TrustItem[] = [
  {
    icon: <Shield className="w-8 h-8" />,
    title: '数据安全合规',
    description: '严格遵循国家数据安全法规，保障用户数据安全',
    details: [
      '等保三级认证',
      '数据加密存储',
      '访问权限控制',
      '定期安全审计',
    ],
  },
  {
    icon: <Lock className="w-8 h-8" />,
    title: '隐私保护认证',
    description: '端到端加密，确保咨询内容仅用户可见',
    details: [
      '端到端加密传输',
      '匿名咨询模式',
      '数据最小化原则',
      '用户授权机制',
    ],
  },
  {
    icon: <FileCheck className="w-8 h-8" />,
    title: '国家心理健康政策响应',
    description: '积极响应国家心理健康服务体系建设要求',
    details: [
      '符合教育部指导标准',
      '高校心理服务规范',
      '危机干预流程标准',
      '专业伦理准则',
    ],
  },
  {
    icon: <Award className="w-8 h-8" />,
    title: '高校合作认证',
    description: '与全国200+高校建立官方合作关系',
    details: [
      '官方合作授权',
      '校企联合研发',
      '专家顾问团队',
      '持续服务支持',
    ],
  },
];

export default function Trust() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section className="relative w-full py-20 lg:py-32 section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-green/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green-light/50 rounded-full text-brand-green text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4" />
            值得信赖
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            值得信赖的心理健康服务
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            数据安全合规，政策响应积极，我们用专业守护你的信任
          </p>
        </div>

        {/* Trust Cards Grid */}
        <div
          ref={containerRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative"
              style={{
                '--mouse-x': `${mousePos.x}px`,
                '--mouse-y': `${mousePos.y}px`,
              } as React.CSSProperties}
            >
              <div className="relative h-full glass-card rounded-2xl p-6 hover-lift overflow-hidden">
                {/* Spotlight effect */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(5, 150, 105, 0.1), transparent 50%)`,
                  }}
                />

                {/* Icon */}
                <div className="relative w-14 h-14 bg-brand-green-light rounded-xl flex items-center justify-center text-brand-green mb-5 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="relative text-gray-600 text-sm mb-4">
                  {item.description}
                </p>

                {/* Details list */}
                <ul className="relative space-y-2">
                  {item.details.map((detail, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-green rounded-full" />
                      {detail}
                    </li>
                  ))}
                </ul>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-brand-green/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-soft">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">ISO 27001认证</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-soft">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">等保三级</span>
          </div>
          <div className="flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-soft">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <Award className="w-5 h-5 text-purple-600" />
            </div>
            <span className="text-sm font-medium text-gray-700">教育部推荐</span>
          </div>
        </div>
      </div>
    </section>
  );
}
