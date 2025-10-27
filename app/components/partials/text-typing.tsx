import { TypingAnimation } from "@/components/ui/typing-animation";

export function TextTypingComponent({ text }: { text: string }) {
  return <TypingAnimation>{text}</TypingAnimation>;
}
