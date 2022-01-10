import { useEffect, useState } from "react"

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.onscroll = () => {
        setScrollY(window.pageYOffset)
      }
    }
  }, [])

  return scrollY
}

export default useScrollY
