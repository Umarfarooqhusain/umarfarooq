interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span
      className="
        px-3
        py-2
        rounded-full
        bg-zinc-900/80
        border
        border-zinc-800
        text-sm
        text-zinc-300
        smooth
        hover:text-white
        hover:border-blue-500
      "
    >
      {children}
    </span>
  );
}
