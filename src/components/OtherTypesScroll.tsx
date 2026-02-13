import { Card, CardContent } from "@/components/ui/card";
import { SKIN_TYPES } from "@/data/diagnosis";

interface OtherTypesScrollProps {
  currentTypeId: string;
}

export function OtherTypesScroll({ currentTypeId }: OtherTypesScrollProps) {
  const others = SKIN_TYPES.filter((t) => t.id !== currentTypeId);

  return (
    <section className="px-4 py-12">
      <h2 className="text-lg font-semibold text-skin-foreground mb-4 text-center">
        他の肌タイプもチェック
      </h2>
      <div className="overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-thin">
        <div className="flex gap-4 min-w-0" style={{ width: "max-content" }}>
          {others.map((type) => (
            <Card
              key={type.id}
              className="flex-shrink-0 w-[280px] snap-center border-skin-border bg-skin-card"
            >
              <CardContent className="p-4">
                <p className="text-xs text-skin-muted mb-1">
                  {type.shortDescription}
                </p>
                <h3 className="font-semibold text-skin-foreground mb-2">
                  {type.name}
                </h3>
                <p className="text-sm text-skin-foreground/80 line-clamp-3">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
