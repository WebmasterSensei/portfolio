import { Highlighter } from "@/components/ui/highlighter"

export function HighlighterComponent() {
    return (
        <div className="text-center">
            <p className="leading-relaxed">
               Winners {" "}
                <Highlighter action="underline" color="#FF9800">
                   are not those who never fail
                </Highlighter>{" "}
                makes important{" "}
                <Highlighter action="highlight" color="#41A67E">
                   but those who never quit
                </Highlighter>{" "}
                -- Albert Einstein.
            </p>
        </div>
    )
}
