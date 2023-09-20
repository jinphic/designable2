import { ICustomEvent } from '@designable2/shared'
import { AbstractCursorEvent } from './AbstractCursorEvent'

export class DragMoveEvent extends AbstractCursorEvent implements ICustomEvent {
  type = 'drag:move'
}
