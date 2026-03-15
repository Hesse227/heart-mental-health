import { useState } from 'react';
import { ClipboardCheck, MessageSquare, AlertTriangle, Library, CheckCircle2 } from 'lucide-react';

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

const services: Service[] = [
  {
    id: 'assessment',
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: '智能测评',
    subtitle: '多维度心理画像',
    description: '通过科学量表和AI分析，生成个性化心理健康报告，帮助你全面了解自己的心理状态。',
    features: [
      '专业心理量表测评',
      'AI智能分析报告',
      '多维度心理画像',
      '个性化改善建议',
    ],
    image: '/service-assessment.jpg',
  },
  {
    id: 'chat',
    icon: <MessageSquare className="w-5 h-5" />,
    title: 'AI疏导',
    subtitle: '对话式交互界面',
    description: '24小时在线，用温暖对话化解心理困扰。AI心灵伙伴随时倾听，提供专业建议。',
    features: [
      '24小时AI陪伴',
      '自然语言对话',
      '情绪识别与回应',
      '隐私安全保护',
    ],
    image: '/service-chat.jpg',
  },
  {
    id: 'alert',
    icon: <AlertTriangle className="w-5 h-5" />,
    title: '危机预警',
    subtitle: '智能监测看板',
    description: '智能识别风险信号，及时预警干预。为心理中心提供全面的学生心理健康监测。',
    features: [
      '实时情绪监测',
      '风险信号识别',
      '多级预警机制',
      '快速响应流程',
    ],
    image: '/service-monitor.jpg',
  },
  {
    id: 'resources',
    icon: <Library className="w-5 h-5" />,
    title: '资源库',
    subtitle: '丰富课程卡片',
    description: '丰富的心理课程、冥想音频、自助工具，帮助你自主管理心理健康。',
    features: [
      '专业心理课程',
      '正念冥想音频',
      '自助工具箱',
      '心理健康知识库',
    ],
    image: '/service-resources.jpg',
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<string>('assessment');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeService = services.find(s => s.id === activeTab) || services[0];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setTimeout(() => setIsTransitioning(false), 50);
    }, 200);
  };

  return (
    <section className="relative w-full py-20 lg:py-32 section-padding bg-gradient-to-b from-transparent via-brand-green-light/20 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            核心服务
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            四大核心功能，全方位守护大学生心理健康
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {services.map((service) => {
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => handleTabChange(service.id)}
                className={`
                  flex items-center gap-2 px-5 py-3 rounded-xl font-medium
                  transition-all duration-300 ease-out
                  ${isActive
                    ? 'bg-brand-green text-white shadow-glow scale-105'
                    : 'bg-white text-gray-600 hover:bg-brand-green-light hover:text-brand-green shadow-soft'
                  }
                `}
              >
                {service.icon}
                <span>{service.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="relative">
          <div className={`
            grid lg:grid-cols-2 gap-8 lg:gap-12 items-center
            transition-all duration-300
            ${isTransitioning ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'}
          `}>
            {/* Left: Text Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-green-light rounded-full text-brand-green text-sm font-medium mb-4">
                  {activeService.icon}
                  <span>{activeService.title}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                  {activeService.subtitle}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {activeService.description}
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-3">
                {activeService.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-xs hover:shadow-soft transition-shadow"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-green flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="btn-primary inline-flex items-center gap-2">
                了解更多
                <span className="text-lg">→</span>
              </button>
            </div>

            {/* Right: Phone Mockup */}
            <div className="relative flex justify-center order-1 lg:order-2">
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-green/20 to-brand-orange/20 rounded-[3rem] blur-2xl" />
                
                {/* Phone */}
                <div className="relative phone-mockup w-[260px] sm:w-[300px] lg:w-[340px] bg-white overflow-hidden">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating stats */}
                <div className="absolute -left-6 top-1/4 glass-card rounded-xl px-4 py-2 animate-float">
                  <div className="text-xs text-gray-500">用户好评</div>
                  <div className="text-lg font-bold text-brand-green">4.9/5</div>
                </div>

                <div className="absolute -right-4 bottom-1/4 glass-card rounded-xl px-4 py-2 animate-float animation-delay-300">
                  <div className="text-xs text-gray-500">活跃用户</div>
                  <div className="text-lg font-bold text-brand-orange">10万+</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => handleTabChange(service.id)}
              className={`
                w-2 h-2 rounded-full transition-all duration-300
                ${activeTab === service.id
                  ? 'w-8 bg-brand-green'
                  : 'bg-gray-300 hover:bg-gray-400'
                }
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
