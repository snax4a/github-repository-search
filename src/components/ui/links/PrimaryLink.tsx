import React from "react";

import cn from "@/lib/classnames";

import UnstyledLink, { type UnstyledLinkProps } from "./UnstyledLink";

const PrimaryLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={cn(
          "inline-flex items-center",
          "text-blue-600 hover:text-blue-500",
          "focus:outline-none focus-visible:rounded-md focus-visible:ring-2 focus-visible:ring-offset-2 ",
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

PrimaryLink.displayName = "PrimaryLink";

export default PrimaryLink;
