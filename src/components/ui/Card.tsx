import cn from "@/lib/classnames";

interface CardElementProps {
  children: React.ReactNode;
  className?: string;
}

function CardHeader({ children, className }: CardElementProps) {
  return (
    <header className={cn("border-b border-gray-200 px-6 py-4", className)}>
      {children}
    </header>
  );
}

function CardFooter({ children, className }: CardElementProps) {
  return (
    <footer className={cn("border-t border-gray-200 px-6 py-4", className)}>
      {children}
    </footer>
  );
}

export default function Card({ children, className }: CardElementProps) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-xl border border-gray-200 bg-white shadow",
        className
      )}
    >
      {children}
    </article>
  );
}

Card.Header = CardHeader;
Card.Footer = CardFooter;
