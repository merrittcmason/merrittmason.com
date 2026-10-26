import { Fragment, type ReactNode } from "react";

const TARGETS: { re: RegExp; href: string }[] = [
  { re: /coretek 360/i, href: "https://www.coretek360.com/" },
  { re: /(?<![.\w])averase(?![.\w])/i, href: "https://averase.com/" },
];

const SPLIT = /(coretek 360|(?<![.\w])averase(?![.\w]))/gi;

/** Wraps mentions of Coretek 360 and AVERASE in a plain blue-underlined link. Text color is inherited. */
export default function Linkify({ text }: { text: string }): ReactNode {
  const parts = text.split(SPLIT);
  if (parts.length === 1) return text;
  return parts.map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    const href = TARGETS.find((t) => t.re.test(part))!.href;
    return (
      <a key={i} href={href} target="_blank" rel="noreferrer" className="underline decoration-blue decoration-[1.5px] underline-offset-2">
        {part}
      </a>
    );
  });
}
