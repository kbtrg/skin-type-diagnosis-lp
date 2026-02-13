import { Card, CardContent, CardHeader } from "@/components/ui/card";

export function EventFlyer() {
  return (
    <section className="px-4 py-12 bg-skin-muted/30">
      <div className="max-w-lg mx-auto">
        <h2 className="text-lg font-semibold text-skin-foreground mb-4 text-center">
          スキンケア体験会
        </h2>
        <Card className="border-skin-border bg-skin-card overflow-hidden">
          <CardHeader className="bg-skin-primary/10">
            <p className="text-sm font-medium text-skin-muted">
              あなたの肌タイプに合わせたケアを体験
            </p>
            <h3 className="text-xl font-bold text-skin-foreground">
              無料スキンケア体験会
            </h3>
          </CardHeader>
          <CardContent className="pt-4 space-y-3 text-sm text-skin-foreground/90">
            <p>
              <strong>内容：</strong>
              プロのアドバイス付きスキンケア体験・お肌の相談
            </p>
            <p>
              <strong>日時：</strong>
              体験会の日時は申込後にご案内します
            </p>
            <p>
              <strong>場所：</strong>
              詳細は申込後にご案内します
            </p>
            <p>
              <strong>特典：</strong>
              診断結果に合わせたサンプルプレゼント
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
