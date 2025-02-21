"use client";

import {
  CollapsibleMenuView,
  useCollapsibleMenuViewModel,
} from "@/components/CollapsibleMenu";
import { useFontSizeControlViewModel } from "@/components/FontSizeControl";
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
import { localStorageService } from "@/services/local.storage.service";
import { RiGithubFill } from "@remixicon/react";
import { useEffect, useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState<boolean>(true);

  function enableInterface() {
    setVisible(true);
  }

  function disableInterface() {
    setVisible(false);
  }

  const fontSizeControlViewModel = useFontSizeControlViewModel({
    localStorageService,
  });

  const textEditorViewModel = useTextEditorViewModel({
    ...fontSizeControlViewModel,
    disableInterface,
    enableInterface,
  });

  const themeSwitchViewModel = useThemeSwitchViewModel();

  const collapsibleMenuViewModel = useCollapsibleMenuViewModel({
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
      <div
        className={
          "transition-all lg:fixed lg:bg-transparent bg-background w-full top-0 left-0 p-3.5 lg:p-5 flex flex-row justify-between " +
          (!visible ? "opacity-0" : "opacity-100")
        }
        onMouseOver={enableInterface}
        onTouchMove={enableInterface}
        onClick={enableInterface}
      >
        <ThemeSwitchView {...themeSwitchViewModel} />
        <IconButtonView
          icon={RiGithubFill}
          onClick={() => {
            window.open("https://github.com/Victor101106/ParvaNota", "_blank");
          }}
        />
      </div>
      <TextEditorView {...textEditorViewModel} />
      <div
        className={
          "transition-all fixed bg-transparent min-w-full gap-2 bottom-0 left-0 p-3.5 lg:p-5 flex flex-row justify-between items-end " +
          (!visible ? "opacity-0" : "opacity-100")
        }
        onMouseOver={enableInterface}
        onTouchMove={enableInterface}
        onClick={enableInterface}
      >
        <CollapsibleMenuView
          {...fontSizeControlViewModel}
          {...collapsibleMenuViewModel}
        />
        <WordCounterView {...wordCounterViewModel} />
      </div>
    </main>
  );
}
