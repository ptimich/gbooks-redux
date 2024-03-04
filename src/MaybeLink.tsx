import { Link, LinkProps } from "react-router-dom";

export const MaybeLink = ({ to, children, ...props }: Partial<LinkProps>) => {
  return to !== undefined ? (
    <Link to={to} {...props}>
      {children}
    </Link>
  ) : (
    <>{children}</>
  );
};
