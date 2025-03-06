import { ClipboardService } from "@/services/clipboard.service";
import { LocalStorageService } from "@/services/local.storage.service";

export function useServices() {
  return {
    localStorageService: LocalStorageService.create(),
    clipboardService: ClipboardService.create(),
  };
}
