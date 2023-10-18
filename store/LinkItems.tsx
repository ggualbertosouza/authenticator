import { create } from "zustand";
import { uuid } from "uuidv4";

export type State = {
  id: string;
  user: string;
  socialMedia: string;
};

type actions = {
  items: State[];
  addItem: ({
    user,
    socialMedia,
  }: {
    user: string;
    socialMedia: string;
  }) => void;
  removeItem: (id: string) => void;
};

export const LinkStore = create<actions>((set) => ({
  items: [],
  addItem: ({ user, socialMedia }) => {
    set((state) => ({
      items: [
        ...state.items,
        { id: uuid(), user: user, socialMedia: socialMedia },
      ],
    }));
  },
  removeItem: (id: string) => {
    set((state) => ({ items: state.items.filter((i) => i.id !== id) }));
  },
}));
