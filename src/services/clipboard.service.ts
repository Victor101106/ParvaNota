export class ClipboardService {
  private constructor() {}

  public static create(): ClipboardService {
    return new ClipboardService();
  }

  public async copy(content: string): Promise<void> {
    return navigator.clipboard.writeText(content);
  }

  public async paste(): Promise<string> {
    return await navigator.clipboard.readText();
  }
}
