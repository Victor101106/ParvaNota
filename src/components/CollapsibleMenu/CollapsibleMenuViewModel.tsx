import { CollapsibleModel } from "@/models/CollapsibleModel";
import { TextModel } from "@/models/TextModel";
import { ClipboardService } from "@/services/clipboard.service";

export type CollapsibleMenuViewModelProps = {
  clipboardService: ClipboardService;
  collapsibleModel: CollapsibleModel;
  textModel: TextModel;
};

export function useCollapsibleMenuViewModel(
  props: CollapsibleMenuViewModelProps
) {
  const isOpen = props.collapsibleModel.open;

  async function onCopyClick() {
    await props.clipboardService.copy(props.textModel.value);
  }

  function onDeleteClick() {
    props.textModel.value = "";
  }

  async function onPasteClick() {
    props.textModel.value = await props.clipboardService.paste();
  }

  function onToggleClick() {
    props.collapsibleModel.toggle();
  }

  return { onCopyClick, onDeleteClick, onPasteClick, onToggleClick, isOpen };
}
