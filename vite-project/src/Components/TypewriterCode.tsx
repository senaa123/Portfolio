import React, { useState, useEffect, useRef } from 'react';

export interface CodeToken {
    text: string;
    className?: string;
    node?: React.ReactNode;
}

interface TypewriterCodeProps {
    lines: CodeToken[][];
    fileName: string;
    typingSpeed?: number;
    /** Optional slot rendered below the typed code (e.g. a form) */
    children?: React.ReactNode;
}

export const TypewriterCode: React.FC<TypewriterCodeProps> = ({ lines, fileName, typingSpeed = 20, children }) => {
    const [displayedLines, setDisplayedLines] = useState<CodeToken[][]>([]);
    const [hasStarted, setHasStarted] = useState(false);
    const [isFinished, setIsFinished] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const [cursorLine, setCursorLine] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                }
            },
            { threshold: 0.1 }
        );
        if (containerRef.current) observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [hasStarted]);

    useEffect(() => {
        if (!hasStarted || isFinished) return;

        let currentLine = 0;
        let currentTokenIndex = 0;
        let currentCharIndex = 0;
        let timeoutId: ReturnType<typeof setTimeout>;

        // Pre-fill displayed lines with empty arrays
        setDisplayedLines(lines.map(() => []));

        const typeNextChar = () => {
            if (currentLine >= lines.length) {
                setIsFinished(true);
                return;
            }

            const lineData = lines[currentLine];

            // Empty line — skip immediately
            if (lineData.length === 0) {
                currentLine++;
                setCursorLine(currentLine);
                timeoutId = setTimeout(typeNextChar, typingSpeed);
                return;
            }

            // Finished all tokens in this line — move to next
            if (currentTokenIndex >= lineData.length) {
                currentLine++;
                currentTokenIndex = 0;
                currentCharIndex = 0;
                setCursorLine(currentLine);
                timeoutId = setTimeout(typeNextChar, typingSpeed);
                return;
            }

            const token = lineData[currentTokenIndex];

            // If it's a ReactNode token, render it immediately
            if (token.node !== undefined) {
                setDisplayedLines(prev => {
                    const newLines = prev.map(l => [...l]);
                    const lineTokens = newLines[currentLine] || [];
                    lineTokens.push({ text: "", node: token.node });
                    newLines[currentLine] = lineTokens;
                    return newLines;
                });
                currentTokenIndex++;
                currentCharIndex = 0;
                timeoutId = setTimeout(typeNextChar, typingSpeed);
                return;
            }

            // Safety check for empty strings
            if (!token.text || token.text.length === 0) {
                currentTokenIndex++;
                currentCharIndex = 0;
                timeoutId = setTimeout(typeNextChar, typingSpeed);
                return;
            }

            const char = token.text[currentCharIndex];

            if (char === undefined) {
                // Token fully typed — move to next token
                currentTokenIndex++;
                currentCharIndex = 0;
                timeoutId = setTimeout(typeNextChar, typingSpeed);
                return;
            }

            const targetLine = currentLine;
            const targetCharIndex = currentCharIndex;
            const targetChar = char;
            const targetTokenClass = token.className;

            setDisplayedLines(prev => {
                const newLines = prev.map(l => [...l]);
                const lineTokens = newLines[targetLine] || [];

                if (targetCharIndex === 0) {
                    lineTokens.push({ text: targetChar, className: targetTokenClass });
                } else {
                    const last = lineTokens[lineTokens.length - 1];
                    if (last && last.node === undefined) {
                        lineTokens[lineTokens.length - 1] = { ...last, text: last.text + targetChar };
                    } else {
                        // Fallback in case of unexpected state desync
                        lineTokens.push({ text: targetChar, className: targetTokenClass });
                    }
                }

                newLines[targetLine] = lineTokens;
                return newLines;
            });

            currentCharIndex++;
            setCursorLine(currentLine);

            if (currentCharIndex >= token.text.length) {
                currentTokenIndex++;
                currentCharIndex = 0;
            }

            timeoutId = setTimeout(typeNextChar, typingSpeed);
        };

        timeoutId = setTimeout(typeNextChar, typingSpeed);
        return () => clearTimeout(timeoutId);
    }, [hasStarted, isFinished, lines, typingSpeed]);

    return (
        <div
            ref={containerRef}
            className="w-full rounded-xl border border-[#253745] bg-[#11212D] overflow-hidden transition-all duration-300 hover:border-[#4A5C6A] hover:-translate-y-[3px] hover:shadow-[0_14px_24px_-16px_rgba(0,0,0,0.6)]"
        >
            {/* Window Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-[#253745]">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#253745]" />
                    <div className="w-3 h-3 rounded-full bg-[#253745]" />
                    <div className="w-3 h-3 rounded-full bg-[#253745]" />
                </div>
                <span className="ml-4 text-xs font-mono-custom text-[#9BA8AB]">{fileName}</span>
            </div>

            {/* Code Content */}
            <div className="p-3 sm:p-6 font-mono-custom text-sm leading-7 overflow-x-auto">
                {lines.map((line, lineIndex) => {
                    const displayedLine = displayedLines[lineIndex] || [];
                    const isCurrentLine = !isFinished && cursorLine === lineIndex;
                    const hasContent = displayedLine.length > 0;

                    return (
                        <div
                            key={lineIndex}
                            className="hover:bg-[#0d1f28] rounded px-2 -mx-2 transition-colors duration-200 min-h-[1.75rem]"
                        >
                            {line.length === 0 ? (
                                // Empty line spacer
                                <span className="invisible">_</span>
                            ) : (
                                <>
                                    {displayedLine.map((token, i) => {
                                        const freshToken = line[i];
                                        return freshToken?.node !== undefined ? (
                                            <span key={i} className={freshToken.className}>{freshToken.node}</span>
                                        ) : (
                                            <span key={i} className={token.className}>{token.text}</span>
                                        );
                                    })}
                                    {isCurrentLine && hasContent && (
                                        <span className="inline-block w-[2px] h-[0.9em] bg-[#CCD0CF] animate-blink align-middle ml-px" />
                                    )}
                                </>
                            )}
                        </div>
                    );
                })}

                {/* Slot for interactive children (e.g. form fields) */}
                {children && (
                    <div className="mt-2">
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
};
