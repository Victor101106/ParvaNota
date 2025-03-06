"use client";

import { CollapsibleMenuView } from "@/components/CollapsibleMenu";
import { IconButtonView } from "@/components/IconButton";
import { TextEditorView } from "@/components/TextEditor";
import { ThemeSwitchView } from "@/components/ThemeSwitch";
import { WordCounterView } from "@/components/WordCounter";
import { useModels } from "@/hooks/useModels";
import { useServices } from "@/hooks/useServices";
import { useViewModels } from "@/hooks/useViewModels";
import { RiGithubFill } from "@remixicon/react";
import { useEffect, useState } from "react";

export default function Home() {
  const Services = useServices();
  const Models = useModels();

  const ViewModels = useViewModels({
    ...Services,
    ...Models,
  });

  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="flex flex-col h-dvh w-dvw overflow-hidden">
      <div
        className={
          "transition-all lg:fixed lg:bg-transparent bg-background w-full top-0 left-0 p-3.5 lg:p-5 flex flex-row justify-between " +
          (!Models.interfaceModel.visible ? "opacity-0" : "opacity-100")
        }
      >
        <ThemeSwitchView {...ViewModels.themeSwitchViewModel} />
        <IconButtonView
          icon={RiGithubFill}
          onClick={() => {
            window.open("https://github.com/Victor101106/ParvaNota", "_blank");
          }}
        />
      </div>
      <TextEditorView {...ViewModels.textEditorViewModel} />
      <div
        className={
          "transition-all fixed bg-transparent min-w-full gap-2 bottom-0 left-0 p-3.5 lg:p-5 flex flex-row justify-between items-end " +
          (!Models.interfaceModel.visible ? "opacity-0" : "opacity-100")
        }
        {...ViewModels.interfaceViewModel}
      >
        <CollapsibleMenuView
          {...ViewModels.fontSizeControlViewModel}
          {...ViewModels.collapsibleMenuViewModel}
        />
        <WordCounterView {...ViewModels.wordCounterViewModel} />
      </div>
    </main>
  );
}
