import Image from "next/image";

export function EventFlyer() {
  return (
    <section className="px-4 py-16 bg-skin-muted/20">
      <div className="max-w-2xl mx-auto">
        <p className="font-serif text-xs tracking-[0.2em] text-skin-muted uppercase mb-2 text-center">
          体験会のご案内
        </p>
        <h2 className="font-serif text-xl text-skin-foreground mb-8 text-center">
          スキンケア体験会
        </h2>
        <div className="relative w-full overflow-hidden rounded-xl shadow-md bg-skin-card">
          <Image
            src="/images/flyer.png"
            alt="スキンケア体験会（ビューティー体験会）のご案内"
            width={672}
            height={896}
            className="w-full h-auto block"
            sizes="(max-width: 672px) 100vw, 672px"
          />
        </div>
      </div>
    </section>
  );
}
