import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ApplicationCompleteProps {
  onBack: () => void;
}

export function ApplicationComplete({ onBack }: ApplicationCompleteProps) {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-20">
      <Card className="max-w-md w-full border-skin-border bg-skin-card shadow-sm rounded-xl overflow-hidden text-center">
        <CardContent className="pt-12 pb-10 px-8">
          <div className="w-14 h-14 rounded-full bg-skin-brand/10 flex items-center justify-center mx-auto mb-6 text-skin-brand text-2xl">
            ✓
          </div>
          <h2 className="font-serif text-xl text-skin-foreground mb-3">
            申し込みが完了しました
          </h2>
          <p className="text-sm text-skin-muted leading-relaxed mb-8">
            ご登録いただいたメールアドレスに、体験会の詳細をご案内いたします。
            <br />
            今しばらくお待ちください。
          </p>
          <Button
            variant="outline"
            onClick={onBack}
            className="border-skin-border text-skin-foreground hover:bg-skin-accent rounded-md"
          >
            トップに戻る
          </Button>
        </CardContent>
      </Card>
    </section>
  );
}
