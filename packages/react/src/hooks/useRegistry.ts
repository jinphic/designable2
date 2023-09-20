import { GlobalRegistry, IDesignerRegistry } from '@designable2/core'
import { globalThisPolyfill } from '@designable2/shared'

export const useRegistry = (): IDesignerRegistry => {
  return globalThisPolyfill['__DESIGNER_REGISTRY__'] || GlobalRegistry
}
