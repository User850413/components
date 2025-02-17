export interface ButtonProps {
  text: string;
}

export default function Button({ text }: ButtonProps) {
  return <div>{text}</div>;
}
