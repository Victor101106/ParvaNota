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
import { RiGithubFill } from "@remixicon/react";

export default function Home() {
  const textEditorViewModel = useTextEditorViewModel();

  const wordCounterViewModel = useWordCounterViewModel({
    ...textEditorViewModel,
  });

  return (
    <main className="flex flex-col h-dvh w-dvw overflow-hidden">
      <div className="lg:fixed lg:bg-transparent bg-background w-full top-0 left-0 p-3.5 lg:p-5 flex flex-row-reverse justify-between">
        <IconButtonView
          icon={RiGithubFill}
          onClick={() => {
            window.open("https://github.com/Victor101106/ParvaNota", "_blank");
          }}
        />
      </div>
      <TextEditorView {...textEditorViewModel} />
      <div className="lg:fixed lg:bg-transparent bg-background w-full bottom-0 left-0 p-3.5 lg:p-5 flex flex-row-reverse justify-between">
        <WordCounterView {...wordCounterViewModel} />
      </div>
    </main>
  );
}
