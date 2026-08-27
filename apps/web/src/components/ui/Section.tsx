import type { ReactNode } from "react";
import { Container } from "../layout/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
}

export function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-16 md:py-20 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}