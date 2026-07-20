interface SectionHeadingProps {
  label: string;
  title: string;
  description: string;
}

export default function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="text-blue-500 font-medium">{label}</p>

      <h2
        className="
          mt-3
          text-4xl
          md:text-5xl
          font-bold
        "
      >
        {title}
      </h2>

      <p className="mt-6 text-lg">{description}</p>
    </div>
  );
}
