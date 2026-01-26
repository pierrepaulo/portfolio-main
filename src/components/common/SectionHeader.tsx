import { SplitText } from "@/components/common/SplitText";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn("mb-10 max-w-2xl mx-auto text-center", className)}>
      <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
        <SplitText text={title} />
      </h2>
      <p className="mt-3 text-base text-muted-foreground sm:text-lg">
        {subtitle}
      </p>
    </div>
  );
}
