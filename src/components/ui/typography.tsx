import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface ChildrenProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}
export function TypographyH1({ children, className, ...rest }: ChildrenProps) {
  return (
    <h1
      className={cn(
        "text-4xl font-bold tracking-tight scroll-m-20 lg:text-5xl",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({ children, className, ...rest }: ChildrenProps) {
  return (
    <h2
      className={cn(
        "pb-2 text-3xl font-semibold tracking-tight scroll-m-20 first:mt-0",
        className
      )}
      {...rest}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className, ...rest }: ChildrenProps) {
  return (
    <h3
      className={cn(
        "text-2xl font-semibold tracking-tight scroll-m-20",
        className
      )}
      {...rest}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({ children, className, ...rest }: ChildrenProps) {
  return (
    <h4
      className={cn(
        "text-xl font-semibold tracking-tight scroll-m-20",
        className
      )}
      {...rest}
    >
      {children}
    </h4>
  );
}

export function TypographyP({ children, className, ...rest }: ChildrenProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-4", className)}
      {...rest}
    >
      {children}
    </p>
  );
}

export function TypographyBlockquote({ children, className }: ChildrenProps) {
  return (
    <blockquote className={cn("pl-6 mt-6 italic border-l-2", className)}>
      {children}
    </blockquote>
  );
}

export function TypographyList({ children, className }: ChildrenProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mt-2", className)}>
      {children}
    </ul>
  );
}

export function TypographyLead({
  children,
  className,
  ...rest
}: ChildrenProps) {
  return (
    <p className={cn("text-xl text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
}

export function TypographyLarge({
  children,
  className,
  ...rest
}: ChildrenProps) {
  return (
    <div className={cn("text-lg font-medium", className)} {...rest}>
      {children}
    </div>
  );
}
export function TypographyMedium({
  children,
  className,
  ...rest
}: ChildrenProps) {
  return (
    <div className={cn("text-md", className)} {...rest}>
      {children}
    </div>
  );
}

export function TypographySmall({
  children,
  className,
  ...rest
}: ChildrenProps) {
  return (
    <small className={cn("text-sm leading-none", className)} {...rest}>
      {children}
    </small>
  );
}

export function TypographyMuted({
  children,
  className,
  ...rest
}: ChildrenProps) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)} {...rest}>
      {children}
    </p>
  );
}
