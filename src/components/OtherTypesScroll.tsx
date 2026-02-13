import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { SKIN_TYPES } from "@/data/diagnosis";

interface OtherTypesScrollProps {
  currentTypeId: string;
}

export function OtherTypesScroll({ currentTypeId }: OtherTypesScrollProps) {
  const others = SKIN_TYPES.filter((t) => t.id !== currentTypeId);

  return (
    <section className="px-4 py-16">
      <h2 className="font-serif text-xl text-skin-foreground mb-8 text-center">
        他の肌タイプもチェック
      </h2>
      <div className="overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-thin">
        <div className="flex gap-6 min-w-0" style={{ width: "max-content" }}>
          {others.map((type) => (
            <Card
              key={type.id}
              className="shrink-0 w-[300px] snap-center border-skin-border bg-skin-card overflow-hidden shadow-sm rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-skin-muted/20">
                <Image
                  src={type.imageUrl}
                  alt={type.name}
                  fill
                  className="object-cover"
                  sizes="300px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-skin-card/95 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[10px] uppercase tracking-wider text-skin-muted font-medium">
                    {type.shortDescription}
                  </p>
                  <h3 className="font-serif text-lg font-medium text-skin-foreground">
                    {type.name}
                  </h3>
                </div>
              </div>
              <CardContent className="p-4 pt-3">
                <p className="text-sm text-skin-foreground/80 line-clamp-3 leading-relaxed">
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
