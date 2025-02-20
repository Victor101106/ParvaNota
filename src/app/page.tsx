"use client";

import { IconButtonView } from "@/components/IconButton";
import {
  TextEditorView,
  useTextEditorViewModel,
} from "@/components/TextEditor";
import {
  useWordCounterViewModel,
  WordCounterView,
} from "@/components/WordCounter";
import {
  RiComputerLine,
  RiGithubFill,
  RiMoonLine,
  RiQuestionLine,
  RiSunLine,
} from "@remixicon/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Home() {
  const textEditorViewModel = useTextEditorViewModel();

  const wordCounterViewModel = useWordCounterViewModel({
    ...textEditorViewModel,
  });

  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState<boolean>();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex flex-col h-dvh w-dvw overflow-hidden">
      <div className="lg:fixed lg:bg-transparent bg-background w-full top-0 left-0 p-3.5 lg:p-5 flex flex-row-reverse justify-between">
        <IconButtonView
          icon={RiGithubFill}
          onClick={() => {
            window.open("https://github.com/Victor101106/ParvaNota", "_blank");
          }}
        />
        <IconButtonView
          icon={
            theme === "system"
              ? RiComputerLine
              : theme === "light"
              ? RiSunLine
              : theme === "dark"
              ? RiMoonLine
              : RiQuestionLine
          }
          onClick={() =>
            setTheme(
              theme === "system"
                ? "light"
                : theme === "light"
                ? "dark"
                : "system"
            )
          }
        />
      </div>
      <TextEditorView {...textEditorViewModel} />
      <div className="lg:fixed lg:bg-transparent bg-background w-full bottom-0 left-0 p-3.5 lg:p-5 flex flex-row-reverse justify-between">
        <WordCounterView {...wordCounterViewModel} />
      </div>
    </main>
  );
}
