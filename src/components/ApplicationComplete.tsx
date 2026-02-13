import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ApplicationCompleteProps {
  onBack: () => void;
}

export function ApplicationComplete({ onBack }: ApplicationCompleteProps) {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16">
      <Card className="max-w-md w-full border-skin-border bg-skin-card text-center">
        <CardContent className="pt-8 pb-8">
          <div className="text-4xl mb-4">✓</div>
          <h2 className="text-xl font-bold text-skin-foreground mb-2">
            申し込みが完了しました
          </h2>
          <p className="text-sm text-skin-muted mb-6">
            ご登録いただいたメールアドレスに、体験会の詳細をご案内いたします。
            <br />
            今しばらくお待ちください。
          </p>
          <Button
            variant="outline"
            onClick={onBack}
            className="border-skin-border text-skin-foreground hover:bg-skin-accent"
          >
            トップに戻る
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
