import { Fragment } from "react";

/**
 * Renders the original ".a-word" word-split markup used by the heading
 * reveal animation. Delays match the source: index * 0.08s, normalized so
 * e.g. 0 -> "0s", 0.4 -> "0.4s", 0.56 -> "0.56s" (no float artifacts).
 */
export default function AnimatedWords({ words }: { words: string[] }) {
  return (
    <>
      {words.map((word, i) => (
        <Fragment key={i}>
          {i > 0 ? " " : ""}
          <span className="a-word">
            <span style={{ transitionDelay: `${+(i * 0.08).toFixed(2)}s` }}>{word}</span>
          </span>
        </Fragment>
      ))}
    </>
  );
}
