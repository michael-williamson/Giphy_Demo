declare global {
    namespace NodeJS {
      interface ProcessEnv {
        GIPHY_DEMO: string;
        NODE_ENV: 'development' | 'production';
        PORT?: string;
        PWD: string;
      }
    }
  }

  export {}