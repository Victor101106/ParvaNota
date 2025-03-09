import { useCollapsibleModel } from "@/models/CollapsibleModel";
import { useFontModel } from "@/models/FontModel";
import { useInterfaceModel } from "@/models/InterfaceModel";
import { useTextModel } from "@/models/TextModel";
import { useThemeModel } from "@/models/ThemeModel";
import { useWordCounterModel } from "@/models/WordCounterModel";

export function useModels() {
  return {
    wordCounterModel: useWordCounterModel(),
    collapsibleModel: useCollapsibleModel(),
    interfaceModel: useInterfaceModel(),
    themeModel: useThemeModel(),
    fontModel: useFontModel(),
    textModel: useTextModel(),
  };
}
