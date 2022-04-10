declare global {
  interface Window {
    electron: {
      ipcRenderer: {
        myPing(): void;
        // FIXME: figure out proper type
        on(channel: string, func: (...args: any[]) => void): void;
        // FIXME: figure out proper type
        once(channel: string, func: (...args: any[]) => void): void;
      };
    };
  }
}

export {};
