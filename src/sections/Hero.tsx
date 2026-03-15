import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  const phoneRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!phoneRef.current) return;
      const rect = phoneRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const x = (e.clientX - centerX) / 50;
      const y = (e.clientY - centerY) / 50;
      setMousePos({ x: Math.max(-5, Math.min(5, x)), y: Math.max(-5, Math.min(5, y)) });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden breathing-gradient noise-overlay">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-green/10 rounded-full blur-3xl animate-breathe" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl animate-breathe animation-delay-500" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-brand-green-light/30 rounded-full blur-3xl animate-breathe animation-delay-1000" />
      </div>

      <div className="relative z-10 w-full min-h-screen flex items-center section-padding">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green-light/50 rounded-full text-brand-green text-sm font-medium animate-fade-in">
                  <span className="w-2 h-2 bg-brand-green rounded-full animate-pulse" />
                  AI驱动的心理健康服务
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  你的
                  <span className="text-gradient"> 24小时 </span>
                  <br />
                  心灵伙伴
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  心约智理，用AI技术守护心理健康，为每一位学生提供
                  <span className="text-brand-green font-medium">温暖</span>、
                  <span className="text-brand-green font-medium">私密</span>、
                  <span className="text-brand-green font-medium">专业</span>
                  的心灵支持。
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="btn-primary text-base h-12 px-8 group">
                  立即体验
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button className="btn-secondary text-base h-12 px-8 group">
                  <Play className="mr-2 w-4 h-4" />
                  了解更多
                </Button>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap gap-8 justify-center lg:justify-start pt-4">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-green">50万+</div>
                  <div className="text-sm text-gray-500">服务学生</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-green">200+</div>
                  <div className="text-sm text-gray-500">合作高校</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-brand-green">98%</div>
                  <div className="text-sm text-gray-500">满意度</div>
                </div>
              </div>
            </div>

            {/* Right: Phone Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div
                ref={phoneRef}
                className="relative animate-float"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {/* Phone frame */}
                <div className="phone-mockup w-[280px] sm:w-[320px] lg:w-[360px] bg-white">
                  <img
                    src="/hero-phone.jpg"
                    alt="心约智理APP界面"
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -left-8 top-1/4 glass-card rounded-xl px-4 py-3 animate-float animation-delay-200">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-green-light rounded-full flex items-center justify-center">
                      <span className="text-brand-green text-lg">💚</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">情绪识别</div>
                      <div className="text-xs text-gray-500">AI实时分析</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/3 glass-card rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-brand-orange/20 rounded-full flex items-center justify-center">
                      <span className="text-brand-orange text-lg">🔒</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">隐私保护</div>
                      <div className="text-xs text-gray-500">端到端加密</div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/4 -bottom-4 glass-card rounded-xl px-4 py-3 animate-float animation-delay-700">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-500 text-lg">⚡</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">即时响应</div>
                      <div className="text-xs text-gray-500">24小时在线</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="#fefdf9"
          />
        </svg>
      </div>
    </section>
  );
}
