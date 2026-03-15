import { useEffect, useRef, useState } from 'react';
import { TrendingUp, Users, DollarSign, Target } from 'lucide-react';

interface DataPoint {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  prefix: string;
  label: string;
  description: string;
  color: string;
  bgColor: string;
}

const dataPoints: DataPoint[] = [
  {
    icon: <DollarSign className="w-6 h-6" />,
    value: 300,
    suffix: '亿',
    prefix: '',
    label: '市场规模',
    description: '2025年心理健康服务市场规模（元）',
    color: 'text-brand-green',
    bgColor: 'bg-brand-green-light',
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    value: 40,
    suffix: '%',
    prefix: '',
    label: '年增长率',
    description: '心理健康市场年复合增长率',
    color: 'text-brand-orange',
    bgColor: 'bg-orange-50',
  },
  {
    icon: <Users className="w-6 h-6" />,
    value: 3000,
    suffix: '万+',
    prefix: '',
    label: '用户群体',
    description: '中国大学生心理健康服务潜在用户',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Target className="w-6 h-6" />,
    value: 85,
    suffix: '%',
    prefix: '',
    label: '服务覆盖率',
    description: '心约智理高校服务覆盖目标',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
];

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 2000;
          const startTime = Date.now();
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeOut = 1 - Math.pow(1 - progress, 3);
            setDisplayValue(Math.floor(value * easeOut));
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function DataInsights() {
  const chartRef = useRef<SVGSVGElement>(null);

  // Generate chart path
  const generateChartPath = () => {
    const points = [
      { x: 0, y: 80 },
      { x: 50, y: 60 },
      { x: 100, y: 70 },
      { x: 150, y: 45 },
      { x: 200, y: 55 },
      { x: 250, y: 30 },
      { x: 300, y: 25 },
      { x: 350, y: 15 },
      { x: 400, y: 10 },
    ];

    return points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
  };

  const generateAreaPath = () => {
    const linePath = generateChartPath();
    return `${linePath} L 400 100 L 0 100 Z`;
  };

  return (
    <section className="relative w-full py-20 lg:py-32 section-padding overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            大学生心理健康市场洞察
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            数据驱动的洞察，让我们更懂大学生心理健康需求
          </p>
        </div>

        {/* Data Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {dataPoints.map((point, index) => (
            <div
              key={index}
              className="group relative glass-card rounded-2xl p-6 hover-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`
                w-12 h-12 rounded-xl flex items-center justify-center mb-4
                ${point.bgColor} ${point.color}
                group-hover:scale-110 transition-transform duration-300
              `}>
                {point.icon}
              </div>

              {/* Value */}
              <div className={`
                text-4xl sm:text-5xl font-bold mb-2
                ${point.color}
              `}>
                <AnimatedNumber
                  value={point.value}
                  prefix={point.prefix}
                  suffix={point.suffix}
                />
              </div>

              {/* Label */}
              <div className="text-lg font-semibold text-gray-900 mb-1">
                {point.label}
              </div>
              <div className="text-sm text-gray-500">
                {point.description}
              </div>

              {/* Decorative line */}
              <div className={`
                absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl
                ${point.bgColor.replace('bg-', 'bg-').replace('50', '500')}
                opacity-0 group-hover:opacity-100 transition-opacity
              `} />
            </div>
          ))}
        </div>

        {/* Growth Chart */}
        <div className="glass-card rounded-3xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Chart */}
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                心理健康服务市场增长趋势
              </h3>
              <div className="relative aspect-[2/1] bg-gradient-to-b from-brand-green-light/30 to-transparent rounded-2xl overflow-hidden">
                <svg
                  ref={chartRef}
                  viewBox="0 0 400 100"
                  className="absolute inset-0 w-full h-full"
                  preserveAspectRatio="none"
                >
                  {/* Grid lines */}
                  {[0, 25, 50, 75, 100].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="400"
                      y2={y}
                      stroke="rgba(5, 150, 105, 0.1)"
                      strokeWidth="0.5"
                      strokeDasharray="4 4"
                    />
                  ))}

                  {/* Area fill */}
                  <path
                    d={generateAreaPath()}
                    fill="url(#gradient)"
                    opacity="0.3"
                  />

                  {/* Line */}
                  <path
                    d={generateChartPath()}
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-draw-line"
                    style={{
                      strokeDasharray: 500,
                      strokeDashoffset: 0,
                      animation: 'drawLine 2s ease-out forwards',
                    }}
                  />

                  {/* Data points */}
                  {[
                    { x: 0, y: 80 },
                    { x: 100, y: 70 },
                    { x: 200, y: 55 },
                    { x: 300, y: 25 },
                    { x: 400, y: 10 },
                  ].map((p, i) => (
                    <circle
                      key={i}
                      cx={p.x}
                      cy={p.y}
                      r="4"
                      fill="#059669"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#059669" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#059669" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* X-axis labels */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4 text-xs text-gray-400">
                  <span>2021</span>
                  <span>2022</span>
                  <span>2023</span>
                  <span>2024</span>
                  <span>2025</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-6">
              <div>
                <div className="text-sm text-gray-500 mb-1">市场增速</div>
                <div className="text-3xl font-bold text-brand-green">+40%</div>
                <div className="text-sm text-gray-400">年复合增长率</div>
              </div>

              <div className="h-px bg-gray-200" />

              <div>
                <div className="text-sm text-gray-500 mb-1">潜在用户</div>
                <div className="text-3xl font-bold text-brand-orange">3000万+</div>
                <div className="text-sm text-gray-400">大学生群体</div>
              </div>

              <div className="h-px bg-gray-200" />

              <div>
                <div className="text-sm text-gray-500 mb-1">服务缺口</div>
                <div className="text-3xl font-bold text-blue-600">70%</div>
                <div className="text-sm text-gray-400">需求未被满足</div>
              </div>

              <div className="p-4 bg-brand-green-light rounded-xl">
                <p className="text-sm text-brand-green-dark">
                  <span className="font-semibold">心约智理</span> 致力于填补这一缺口，
                  用AI技术让心理健康服务触手可及。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes drawLine {
          from {
            stroke-dashoffset: 500;
          }
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </section>
  );
}
