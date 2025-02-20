"use client";

import {
  TextEditorView,
  useTextEditorViewModel,
} from "@/components/TextEditor";

export default function Home() {
  const textEditorViewModel = useTextEditorViewModel();

  return <TextEditorView {...textEditorViewModel} />;
}
