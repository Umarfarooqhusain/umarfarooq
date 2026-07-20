interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary';
}

export default function Button({
  children,
  href,
  variant = 'primary',
}: ButtonProps) {
  const styles = {
    primary: 'bg-blue-500 hover:bg-blue-600 text-white',
    secondary: 'border border-zinc-700 hover:border-zinc-500',
  };

  const classes = `
    inline-flex
    items-center
    justify-center
    px-6
    py-3
    rounded-xl
    font-medium
    smooth
    ${styles[variant]}
    `;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
