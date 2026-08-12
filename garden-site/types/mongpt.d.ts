/** MonGPT widget global — https://dev-mongpt.com/agent-setup/prompt.md */
interface MonGPTInitOptions {
  tenantId: string;
  chatbotId?: string;
  language?: string;
  langParam?: string;
  hideButton?: boolean;
}

interface MonGPTIdentifyOptions {
  userId: string;
  email?: string;
  name?: string;
  userHash?: string;
}

interface MonGPTGlobal {
  init(options: MonGPTInitOptions): void;
  setLanguage(code: string): void;
  identify(options: MonGPTIdentifyOptions): void;
  open(options?: { reset?: boolean }): void;
  close(): void;
  toggle(): void;
  sendMessage(message: string): void;
  prefill(message: string): void;
  reset(): void;
  reload(): void;
}

declare global {
  interface Window {
    MonGPT?: MonGPTGlobal;
  }
}

export {};
