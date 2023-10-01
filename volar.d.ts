declare module 'vue' {
  export interface GlobalComponents {
    Button: typeof import('vue-bundle-template')['Button']
  }
}

export { }