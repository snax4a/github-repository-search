import React from "react";
import Link, { type LinkProps } from "next/link";

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, "href">;
} & React.ComponentPropsWithRef<"a">;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isExternalLink =
      href && !href.startsWith("/") && !href.startsWith("#");

    if (!isExternalLink && !openNewTab) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a ref={ref} {...rest} className={className}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        href={href}
        target={
          openNewTab === undefined || openNewTab === true ? "_blank" : undefined
        }
        className={className}
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    );
  }
);

UnstyledLink.displayName = "UnstyledLink";

export default UnstyledLink;
