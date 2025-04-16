declare module 'monaco-jsx-highlighter' {
  export default class Highlighter {
    constructor(monaco: any, jscodeshift: any, editor: any);
    highLightOnDidChangeModelContent(
      dispose: () => void,
      callback: () => void,
      delay?: number,
      callback2?: () => void
    ): void;
  }
}
