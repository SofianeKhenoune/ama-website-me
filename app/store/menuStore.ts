import { create } from "zustand"

interface SetMenu {
  open: boolean
  setMenu: () => void
}

const useSetMenu = create<SetMenu>((set) => ({
  open: false,
  setMenu: () =>
    set((state) => {
      if (window.innerWidth > 768) {
        return { open: false } as SetMenu
      }
      return { open: !state.open }
    }),
}))

export default useSetMenu
