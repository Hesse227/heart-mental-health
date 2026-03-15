import { useState } from 'react';
import { BookOpen, Users, Heart, ChevronRight, Lightbulb, MessageCircle, Shield } from 'lucide-react';

interface PainPoint {
  id: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  solutions: string[];
  color: string;
  bgColor: string;
}

const painPoints: PainPoint[] = [
  {
    id: 'academic',
    icon: <BookOpen className="w-8 h-8" />,
    title: '学业压力',
    subtitle: '考试焦虑、学习动力不足',
    description: '面对繁重的课业负担和激烈的竞争环境，许多学生感到压力山大、焦虑不安。',
    solutions: [
      'AI智能制定个性化学习计划',
      '考试焦虑专项疏导课程',
      '学习动力激励机制',
      '时间管理技巧训练',
    ],
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'social',
    icon: <Users className="w-8 h-8" />,
    title: '人际关系',
    subtitle: '社交恐惧、室友矛盾',
    description: '从宿舍关系到社交圈子，人际交往中的困惑和冲突让许多人感到孤独无助。',
    solutions: [
      '社交技能互动训练',
      '冲突调解沟通指南',
      '同理心培养课程',
      '社群互助支持小组',
    ],
    color: 'text-brand-green',
    bgColor: 'bg-brand-green-light',
  },
  {
    id: 'emotion',
    icon: <Heart className="w-8 h-8" />,
    title: '情绪困扰',
    subtitle: '焦虑抑郁、情绪波动',
    description: '情绪起伏不定、焦虑抑郁困扰，需要专业的心理支持和及时的干预帮助。',
    solutions: [
      '24小时AI情绪陪伴',
      '认知行为疗法工具',
      '正念冥想音频库',
      '危机预警快速响应',
    ],
    color: 'text-brand-orange',
    bgColor: 'bg-orange-50',
  },
];

export default function PainPoints() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const currentId = hoveredId || activeId;

  return (
    <section className="relative w-full py-20 lg:py-32 section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            大学生常见心理困扰
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            我们理解你的挑战，心约智理为你提供全方位支持
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {painPoints.map((point, index) => {
            const isActive = currentId === point.id;
            const isOtherActive = currentId && currentId !== point.id;

            return (
              <div
                key={point.id}
                className={`
                  relative rounded-3xl overflow-hidden cursor-pointer
                  transition-all duration-500 ease-out
                  ${isActive ? 'md:col-span-2 lg:col-span-1 md:scale-105' : ''}
                  ${isOtherActive ? 'md:scale-95 md:opacity-70' : ''}
                `}
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
                onMouseEnter={() => setHoveredId(point.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setActiveId(activeId === point.id ? null : point.id)}
              >
                <div className={`
                  h-full p-8 ${point.bgColor}
                  border-2 ${isActive ? 'border-brand-green' : 'border-transparent'}
                  rounded-3xl transition-all duration-300
                `}>
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-2xl bg-white shadow-soft
                    flex items-center justify-center mb-6
                    ${point.color}
                    transition-transform duration-300
                    ${isActive ? 'scale-110' : ''}
                  `}>
                    {point.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {point.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {point.subtitle}
                  </p>

                  {/* Description - always visible */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {point.description}
                  </p>

                  {/* Solutions - expand on active */}
                  <div className={`
                    overflow-hidden transition-all duration-500
                    ${isActive ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
                  `}>
                    <div className="pt-4 border-t border-gray-200/50">
                      <div className="flex items-center gap-2 mb-4">
                        <Lightbulb className="w-5 h-5 text-brand-orange" />
                        <span className="font-medium text-gray-900">解决方案</span>
                      </div>
                      <ul className="space-y-3">
                        {point.solutions.map((solution, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-600"
                            style={{
                              animationDelay: `${idx * 100}ms`,
                            }}
                          >
                            <ChevronRight className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA hint */}
                  <div className={`
                    mt-6 flex items-center gap-2 text-sm font-medium
                    ${point.color}
                    transition-all duration-300
                    ${isActive ? 'opacity-0' : 'opacity-100'}
                  `}>
                    <MessageCircle className="w-4 h-4" />
                    <span>点击查看解决方案</span>
                  </div>
                </div>

                {/* Active indicator */}
                {isActive && (
                  <div className="absolute top-4 right-4">
                    <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 mb-4">
            无论遇到什么困扰，心约智理都在这里陪伴你
          </p>
          <div className="inline-flex items-center gap-2 text-brand-green font-medium">
            <span>开启你的心灵之旅</span>
            <ChevronRight className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
