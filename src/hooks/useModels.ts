import { CollapsibleModel } from "@/models/CollapsibleModel";
import { FontModel } from "@/models/FontModel";
import { InterfaceModel } from "@/models/InterfaceModel";
import { TextModel } from "@/models/TextModel";
import { ThemeModel } from "@/models/ThemeModel";
import { WordCounterModel } from "@/models/WordCounterModel";

export function useModels() {
  return {
    wordCounterModel: WordCounterModel.create(),
    collapsibleModel: CollapsibleModel.create(),
    interfaceModel: InterfaceModel.create(),
    themeModel: ThemeModel.create(),
    fontModel: FontModel.create(),
    textModel: TextModel.create(),
  };
}
