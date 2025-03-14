declare module '*.vue' {
  import type { defineComponent } from 'vue'

  const Component: ReturnType<typeof defineComponent>
  export default Component
}

interface Obj {
  [key: string]: any
}

declare module 'vue3/jsx-runtime' {
  namespace JSX {
    interface IntrinsicElements {}
  }
}
