import { Context } from './src/types'

class ContextManager {
  current: Context | null = null

  change (context: Context) {
    if (this.current) {
      this.current.exit()
    }

    this.current = context
    this.current.enter()
  }
}

export const contextManager = new ContextManager()
