"use client";

import {
  TextEditorView,
  useTextEditorViewModel,
} from "@/components/TextEditor";
import {
  useWordCounterViewModel,
  WordCounterView,
} from "@/components/WordCounter";

export default function Home() {
  const textEditorViewModel = useTextEditorViewModel();

  const wordCounterViewModel = useWordCounterViewModel({
    ...textEditorViewModel,
  });

  return (
    <main className="flex flex-col h-dvh w-dvw overflow-hidden">
      <TextEditorView {...textEditorViewModel} />
      <div className="lg:fixed lg:bg-transparent bg-background w-full bottom-0 left-0 p-5 flex flex-row-reverse justify-between">
        <WordCounterView {...wordCounterViewModel} />
      </div>
    </main>
  );
}
