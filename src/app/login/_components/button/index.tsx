import { Button } from "@/components/ui/button";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function LoginButton({ children, className = "", ...props }: IProps) {
  return (
    <Button
      className={`bg-primary text-white py-2 rounded-full hover:brightness-90 transition-all ${className}`}
      type="submit"
      {...props}
      data-cy="login-activator"
    >
      {children}
    </Button>
  );
}
