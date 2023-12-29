import cn from "clsx";

type ToolTipProps = {
  tip: string;
  className?: string;
  groupInner?: boolean;
};

export default function ToolTip({
  tip,
  className,
  groupInner,
}: ToolTipProps): JSX.Element | null {
  return (
    <div
      className={cn(
        `invisible absolute left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-[#666666] px-1 py-0.5 text-xs
         text-white opacity-0 [transition:visibility_0ms_ease_200ms,opacity_200ms_ease] `,
        groupInner
          ? `group-hover/inner:visible group-hover/inner:opacity-100 group-hover/inner:delay-500 
             group-focus-visible/inner:visible group-focus-visible/inner:opacity-100 group-focus-visible/inner:delay-200`
          : `group-hover:visible group-hover:opacity-100 group-hover:delay-500 group-focus-visible:visible 
             group-focus-visible:opacity-100`,
        className ?? "translate-y-3"
      )}
    >
      <span>{tip}</span>
    </div>
  );
}
