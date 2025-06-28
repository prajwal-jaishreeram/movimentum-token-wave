// import Particles from './Particles';
import { BackgroundGlow } from "@/components/ui/background-glow";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";
import { TrendingUp, Users, Globe } from "lucide-react";

const CaseStudyMetrics = () => {
  const metrics = [
    {
      title: "BEAM: Content that reached the right wallets",
      brand: "MOV_Beam",
      icon: <TrendingUp className="h-4 w-4" />,
      stats: [
        { label: "IMPRESSIONS", value: "617k" },
        { label: "CPM", value: "$8.10" },
        { label: "TOP 3 COUNTRIES", value: "US, DE, TR" }
      ]
    },
    {
      title: "bitget: Positioned where attention means action", 
      brand: "bitget",
      icon: <Users className="h-4 w-4" />,
      stats: [
        { label: "IMPRESSIONS", value: "3.5M" },
        { label: "LINK CLICKS", value: "11k" },
        { label: "TOP 3 COUNTRIES", value: "US, KR, DE" }
      ]
    }
  ];

  return (
    <section className="relative py-20 bg-black overflow-hidden">
      <BackgroundGlow colorFrom="#6b3a1a" colorTo="#1a0e05" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Case Studies
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {metrics.map((metric, index) => (
            <GridItem
              key={index}
              icon={metric.icon}
              title={metric.title}
              description={
                <div className="space-y-4">
                  <div className="inline-block px-4 py-2 bg-white/10 rounded-full border border-white/20">
                    <span className="text-white/90 font-medium text-sm tracking-wide uppercase">
                      {metric.brand}
                    </span>
                  </div>
                  <div className="space-y-3">
                  {metric.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="flex items-center justify-between py-2 border-b border-white/10 last:border-b-0">
                      <span className="text-gray-400 font-medium text-sm tracking-wide uppercase">
                        {stat.label}
                      </span>
                        <span className="text-white font-bold text-lg">
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ icon, title, description }: GridItemProps) => {
  return (
    <div className="min-h-[20rem]">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <div className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyMetrics;
