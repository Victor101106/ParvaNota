import { useCollapsibleMenuViewModel } from "@/components/CollapsibleMenu";
import { useFontSizeControlViewModel } from "@/components/FontSizeControl";
import { useInterfaceViewModel } from "@/components/Interface";
import { useTextEditorViewModel } from "@/components/TextEditor";
import { useThemeSwitchViewModel } from "@/components/ThemeSwitch";
import { useWordCounterViewModel } from "@/components/WordCounter";
import { useModels } from "@/hooks/useModels";
import { useServices } from "@/hooks/useServices";

type useServicesReturnType = ReturnType<typeof useServices>;
type useModelsReturnType = ReturnType<typeof useModels>;

export type useViewModelsProps = useServicesReturnType & useModelsReturnType;

export function useViewModels(props: useViewModelsProps) {
  return {
    collapsibleMenuViewModel: useCollapsibleMenuViewModel({
      clipboardService: props.clipboardService,
      collapsibleModel: props.collapsibleModel,
      textModel: props.textModel,
    }),
    fontSizeControlViewModel: useFontSizeControlViewModel({
      localStorageService: props.localStorageService,
      fontModel: props.fontModel,
    }),
    textEditorViewModel: useTextEditorViewModel({
      interfaceModel: props.interfaceModel,
      fontModel: props.fontModel,
      textModel: props.textModel,
    }),
    wordCounterViewModel: useWordCounterViewModel({
      wordCounterModel: props.wordCounterModel,
      textModel: props.textModel,
    }),
    themeSwitchViewModel: useThemeSwitchViewModel({
      themeModel: props.themeModel,
    }),
    interfaceViewModel: useInterfaceViewModel({
      interfaceModel: props.interfaceModel,
    }),
  };
}
