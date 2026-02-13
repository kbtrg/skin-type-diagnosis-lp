import { Button } from "@/components/ui/button";

interface HeroProps {
  onStart: () => void;
}

export function Hero({ onStart }: HeroProps) {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-16 text-center skin-hero">
      <p className="text-sm font-medium tracking-wider text-skin-muted mb-2">
        ✨ 60秒でわかる ✨
      </p>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-skin-foreground mb-4 max-w-xl">
        あなたの本当の肌タイプ診断
      </h1>
      <ul className="text-skin-muted text-sm sm:text-base space-y-1 mb-8">
        <li>・5つの簡単な質問</li>
        <li>・完全無料</li>
        <li>・結果はすぐ表示</li>
      </ul>
      <p className="text-sm text-skin-muted mb-6">👇 今すぐ診断スタート 👇</p>
      <Button
        size="lg"
        onClick={onStart}
        className="bg-skin-primary hover:bg-skin-primary/90 text-skin-primary-foreground rounded-full px-8 text-base"
      >
        診断を始める
      </Button>
    </section>
  );
}
