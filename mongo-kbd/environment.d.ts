declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DB_CONN_STRING: string;
      DB_NAME: string;
      TASK_COLLECTION_NAME: string;
    }
  }
}
export {};
