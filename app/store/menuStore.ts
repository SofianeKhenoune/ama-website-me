import { create } from "zustand"

interface SetMenu {
  open: boolean
  setMenu: () => void
}

const useSetMenu = create<SetMenu>((set) => ({
  open: false,
  setMenu: () => set((state) => ({ open: !state.open })),
}))

export default useSetMenu
