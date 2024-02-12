export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SRS_API: string;
    }
  }
}
