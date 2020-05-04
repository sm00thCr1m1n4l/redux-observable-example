import { ActionType, StateType} from 'typesafe-actions';
import { Store, Dispatch } from 'redux';

declare module 'typesafe-actions' {
  export type RootState = StateType<typeof import('./store/root-reducer').default>;
  export type RootAction = ActionType<typeof import('./store/root-action').default>;

  interface Types {
    RootAction: RootAction;
  }
}

declare module 'react-redux'{
  import { RootState, RootAction} from 'typesafe-actions'
  export function useStore(): Store<RootState,RootAction>;
  export function useSelector<TState = DefaultRootState, TSelected = unknown>(
    selector: (state: RootState) => TSelected,
    equalityFn?: (left: TSelected, right: TSelected) => boolean
  ): TSelected;
  export function useDispatch(): Dispatch<RootAction>;
}

declare global {
  declare interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}
export { }