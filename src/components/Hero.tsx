import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onStart: () => void;
}

function HeroWave() {
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full pointer-events-none">
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto block"
        preserveAspectRatio="none"
      >
        <path
          d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
          fill="var(--skin-background)"
        />
      </svg>
    </div>
  );
}

export function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative min-h-[100vh] min-h-[100dvh] flex flex-col justify-end overflow-hidden bg-skin-background">
      {/* 全面ヒーロー画像 */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* 左側グラデーション（テキスト可読性） */}
        <div
          className="absolute inset-0 bg-linear-to-r from-skin-background/95 via-skin-background/60 to-transparent"
          aria-hidden
        />
      </div>

      {/* コンテンツ: 下寄せ・左寄せ */}
      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pb-32 pt-12 md:pl-12 md:pr-12 md:pb-36 text-left">
        <p className="font-serif text-skin-brand text-sm tracking-[0.2em] uppercase mb-2 opacity-90">
          肌タイプ診断
        </p>
        <h1 className="font-serif text-skin-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4">
          あなたに、
          <br />
          ぴったりの一歩を。
        </h1>
        <p className="text-skin-muted text-base md:text-lg max-w-md leading-relaxed mb-8">
          5つの質問で、自分に合ったスキンケアがわかります。
          <br />
          無料・約60秒で診断できます。
        </p>
        <Button
          size="lg"
          onClick={onStart}
          className="bg-skin-brand hover:bg-skin-brand/90 text-white rounded-md px-8 py-6 text-base font-medium tracking-wide shadow-lg transition-all hover:shadow-xl hover:scale-[1.02]"
        >
          診断を始める
        </Button>
      </div>

      <HeroWave />
    </section>
  );
}
