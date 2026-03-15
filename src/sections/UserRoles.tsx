import { useState } from 'react';
import { GraduationCap, UserCog, Building2, ArrowRight, Sparkles, BarChart3, HeartHandshake } from 'lucide-react';

interface UserRole {
  id: string;
  icon: React.ReactNode;
  activeIcon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  color: string;
  bgColor: string;
  gradient: string;
}

const userRoles: UserRole[] = [
  {
    id: 'student',
    icon: <GraduationCap className="w-8 h-8" />,
    activeIcon: <Sparkles className="w-8 h-8" />,
    title: '我是学生',
    subtitle: '获得私密、及时的心理支持',
    description: '随时随地与AI心灵伙伴对话，获取专业的心理健康评估和个性化建议。你的隐私，我们全力守护。',
    features: [
      '24小时AI心理咨询',
      '个性化心理测评',
      '情绪日记记录',
      '冥想放松音频',
    ],
    cta: '立即体验',
    color: 'text-brand-green',
    bgColor: 'bg-brand-green-light',
    gradient: 'from-brand-green/20 to-brand-green-light',
  },
  {
    id: 'counselor',
    icon: <UserCog className="w-8 h-8" />,
    activeIcon: <BarChart3 className="w-8 h-8" />,
    title: '我是辅导员',
    subtitle: '实时掌握学生心理状态',
    description: '通过智能数据看板，及时了解所带学生的心理健康状况，获得风险预警和干预建议。',
    features: [
      '班级心理状况概览',
      '重点关注学生提醒',
      '一键预警通知',
      '干预建议生成',
    ],
    cta: '申请试用',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    gradient: 'from-blue-500/20 to-blue-50',
  },
  {
    id: 'center',
    icon: <Building2 className="w-8 h-8" />,
    activeIcon: <HeartHandshake className="w-8 h-8" />,
    title: '我是心理中心',
    subtitle: '提升心理健康服务效率',
    description: '数字化心理健康管理平台，实现全校学生心理状况监测、危机预警和资源调配。',
    features: [
      '全校心理数据看板',
      '智能危机预警系统',
      '咨询预约管理',
      '服务效果评估',
    ],
    cta: '联系我们',
    color: 'text-brand-orange',
    bgColor: 'bg-orange-50',
    gradient: 'from-brand-orange/20 to-orange-50',
  },
];

export default function UserRoles() {
  const [activeRole, setActiveRole] = useState<string>('student');

  const currentRole = userRoles.find(r => r.id === activeRole) || userRoles[0];

  return (
    <section className="relative w-full py-20 lg:py-32 section-padding bg-gradient-to-b from-transparent via-brand-green-light/10 to-transparent">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            为不同角色量身定制
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            无论你是学生、辅导员还是心理中心，心约智理都能满足你的需求
          </p>
        </div>

        {/* Role Selection */}
        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {userRoles.map((role) => {
            const isActive = activeRole === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveRole(role.id)}
                className={`
                  relative group p-6 rounded-2xl text-left transition-all duration-500
                  ${isActive
                    ? `${role.bgColor} ring-2 ring-offset-2 ring-offset-brand-cream ${role.color.replace('text-', 'ring-')}`
                    : 'bg-white hover:bg-gray-50'
                  }
                `}
              >
                {/* Background gradient on active */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} rounded-2xl opacity-50`} />
                )}

                <div className="relative">
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-xl flex items-center justify-center mb-4
                    transition-all duration-300
                    ${isActive ? role.bgColor + ' ' + role.color + ' scale-110' : 'bg-gray-100 text-gray-500'}
                  `}>
                    {isActive ? role.activeIcon : role.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`
                    text-xl font-bold mb-1 transition-colors
                    ${isActive ? 'text-gray-900' : 'text-gray-700'}
                  `}>
                    {role.title}
                  </h3>
                  <p className={`
                    text-sm transition-colors
                    ${isActive ? role.color : 'text-gray-500'}
                  `}>
                    {role.subtitle}
                  </p>

                  {/* Active indicator */}
                  <div className={`
                    absolute top-0 right-0 w-6 h-6 rounded-full flex items-center justify-center
                    transition-all duration-300
                    ${isActive ? 'bg-brand-green scale-100' : 'bg-gray-200 scale-0'}
                  `}>
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Role Detail */}
        <div className="relative">
          <div className={`
            glass-card rounded-3xl p-8 lg:p-12
            transition-all duration-500
          `}>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Content */}
              <div className="space-y-6">
                <div>
                  <div className={`
                    inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-4
                    ${currentRole.bgColor} ${currentRole.color}
                  `}>
                    {currentRole.activeIcon}
                    <span>{currentRole.title}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                    {currentRole.subtitle}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {currentRole.description}
                  </p>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {currentRole.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-xs"
                    >
                      <div className={`
                        w-8 h-8 rounded-lg flex items-center justify-center
                        ${currentRole.bgColor} ${currentRole.color}
                      `}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className={`
                  inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium text-white
                  transition-all duration-300 hover:scale-105 hover:shadow-lg
                  ${currentRole.id === 'student' ? 'bg-brand-green hover:bg-brand-green-dark' : ''}
                  ${currentRole.id === 'counselor' ? 'bg-blue-600 hover:bg-blue-700' : ''}
                  ${currentRole.id === 'center' ? 'bg-brand-orange hover:bg-orange-600' : ''}
                `}>
                  {currentRole.cta}
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Right: Visual */}
              <div className="relative flex justify-center">
                <div className={`
                  relative w-full max-w-md aspect-square rounded-3xl overflow-hidden
                  bg-gradient-to-br ${currentRole.gradient}
                `}>
                  {/* Decorative circles */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`
                      w-48 h-48 rounded-full opacity-30
                      ${currentRole.bgColor}
                    `} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`
                      w-32 h-32 rounded-full opacity-50
                      ${currentRole.bgColor}
                    `} />
                  </div>

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`
                      w-24 h-24 rounded-2xl bg-white shadow-soft
                      flex items-center justify-center
                      ${currentRole.color}
                    `}>
                      {currentRole.activeIcon}
                    </div>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute top-8 left-8 glass-card rounded-xl px-4 py-2 animate-float">
                    <span className="text-sm font-medium text-gray-700">✨ 智能AI</span>
                  </div>
                  <div className="absolute top-12 right-8 glass-card rounded-xl px-4 py-2 animate-float animation-delay-200">
                    <span className="text-sm font-medium text-gray-700">🔒 隐私保护</span>
                  </div>
                  <div className="absolute bottom-16 left-12 glass-card rounded-xl px-4 py-2 animate-float animation-delay-500">
                    <span className="text-sm font-medium text-gray-700">📊 数据分析</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
