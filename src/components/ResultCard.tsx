import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SKIN_TYPES } from "@/data/diagnosis";

interface ResultCardProps {
  skinTypeId: string;
}

export function ResultCard({ skinTypeId }: ResultCardProps) {
  const type = SKIN_TYPES.find((t) => t.id === skinTypeId) ?? SKIN_TYPES[0];

  return (
    <section className="px-4 py-16">
      <div className="max-w-xl mx-auto text-center mb-10">
        <p className="font-serif text-xs tracking-[0.2em] text-skin-muted uppercase mb-2">
          診断結果
        </p>
        <h2 className="font-serif text-2xl text-skin-foreground">
          あなたの肌タイプは
        </h2>
      </div>
      <Card className="max-w-xl mx-auto border-skin-border bg-skin-card overflow-hidden shadow-md rounded-xl">
        <div className="relative aspect-16/10 w-full overflow-hidden bg-skin-muted/20">
          <Image
            src={type.imageUrl}
            alt={type.name}
            fill
            className="object-cover"
            sizes="(max-width: 512px) 100vw, 576px"
          />
          <div className="absolute inset-0 bg-linear-to-t from-skin-card via-transparent to-transparent opacity-95" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-skin-foreground">
            <p className="text-xs tracking-wider text-skin-muted font-medium mb-1">
              {type.shortDescription}
            </p>
            <h3 className="font-serif text-2xl font-medium">{type.name}</h3>
          </div>
        </div>
        <CardHeader className="pb-2">
          <CardContent className="pt-4 px-6 pb-6 text-skin-foreground/85 text-[15px] leading-relaxed">
            {type.description}
          </CardContent>
        </CardHeader>
      </Card>
    </section>
  );
}
