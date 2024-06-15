import { useMemo } from "react"

const generateKey = (key: string) => key.startsWith("--") ? key : `--${key}`

export const useStyle = (props: Record<string, boolean | number | string | undefined>): React.CSSProperties => {
  return useMemo(() => {
    return Object.entries(props).reduce((acc, [key, value]) => {
      if (typeof value === "boolean") {
        return {
          ...acc,
          [generateKey(key)]: value ? "1px" : "0"
        }
      }

      if (typeof value === "number") {
        return {
          ...acc,
          [generateKey(key)]: `${value}px`
        }
      }

      if (typeof value === "string") {
        return {
          ...acc,
          [generateKey(key)]: value
        }
      }

      return acc
    }, {})
  }, Object.values(props))
}