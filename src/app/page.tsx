"use client";

import {
  CollapsibleMenuView,
  useCollapsibleMenuViewModel,
} from "@/components/CollapsibleMenu";
import { IconButtonView } from "@/components/IconButton";
import {
  TextEditorView,
  useTextEditorViewModel,
} from "@/components/TextEditor";
import {
  ThemeSwitchView,
  useThemeSwitchViewModel,
} from "@/components/ThemeSwitch";
import {
  useWordCounterViewModel,
  WordCounterView,
} from "@/components/WordCounter";
import { clipboardService } from "@/services/clipboard.service";
import { RiGithubFill } from "@remixicon/react";
import { useEffect, useState } from "react";

export default function Home() {
  const textEditorViewModel = useTextEditorViewModel();

  const themeSwitchViewModel = useThemeSwitchViewModel();

  const CollapsibleMenuViewModel = useCollapsibleMenuViewModel({
    ...textEditorViewModel,
    clipboardService,
  });

  const wordCounterViewModel = useWordCounterViewModel({
    ...textEditorViewModel,
  });

  const [mounted, setMounted] = useState<boolean>();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex flex-col h-dvh w-dvw overflow-hidden">
      <div className="lg:fixed lg:bg-transparent bg-background transition-colors w-full top-0 left-0 p-3.5 lg:p-5 flex flex-row-reverse justify-between">
        <IconButtonView
          icon={RiGithubFill}
          onClick={() => {
            window.open("https://github.com/Victor101106/ParvaNota", "_blank");
          }}
        />
        <ThemeSwitchView {...themeSwitchViewModel} />
      </div>
      <TextEditorView {...textEditorViewModel} />
      <div className="lg:fixed lg:bg-transparent bg-background transition-colors w-full bottom-0 left-0 p-3.5 lg:p-5 flex flex-row-reverse justify-between items-end">
        <WordCounterView {...wordCounterViewModel} />
        <CollapsibleMenuView {...CollapsibleMenuViewModel} />
      </div>
    </main>
  );
}
