
type ObjectWithDefault<TOriginal extends object, TDefault = React.ReactElement | null> = TOriginal & {
  default: TDefault
}

type TOnState<T extends string | null> = NoInfer<T> extends null 
  ? Partial<ObjectWithDefault<{ [key: string]: React.ReactElement | null}>>
  : Partial<ObjectWithDefault<{ [K in Exclude<T, null>]: React.ReactElement | null }>>

type TConditionalRenderProps<T extends string | null> = {
  state: T,
  onState: TOnState<NoInfer<T>>
}

type Switch = <T extends string | null>({ state, onState }: TConditionalRenderProps<T>) => React.ReactElement | null

export const Switch: Switch = ({ state, onState }) => {
  return onState[state ?? 'default'] ?? null;
}
