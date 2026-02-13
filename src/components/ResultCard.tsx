import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { SkinType } from "@/data/diagnosis";
import { SKIN_TYPES } from "@/data/diagnosis";

interface ResultCardProps {
  skinTypeId: string;
}

export function ResultCard({ skinTypeId }: ResultCardProps) {
  const type = SKIN_TYPES.find((t) => t.id === skinTypeId) ?? SKIN_TYPES[0];

  return (
    <section className="px-4 py-12">
      <div className="max-w-lg mx-auto text-center mb-4">
        <p className="text-sm text-skin-muted mb-1">診断結果</p>
        <h2 className="text-xl font-bold text-skin-foreground">
          あなたの肌タイプは
        </h2>
      </div>
      <Card className="max-w-lg mx-auto border-skin-border bg-skin-card overflow-hidden">
        <div className="bg-skin-accent/50 px-4 py-3">
          <p className="text-sm font-medium text-skin-muted">
            {type.shortDescription}
          </p>
          <h3 className="text-2xl font-bold text-skin-foreground">
            {type.name}
          </h3>
        </div>
        <CardHeader>
          <CardContent className="pt-0 text-skin-foreground/90 text-sm leading-relaxed">
            {type.description}
          </CardContent>
        </CardHeader>
      </Card>
    </section>
  );
}
