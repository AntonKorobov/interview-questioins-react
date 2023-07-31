import { createContext } from 'react';

interface IContext {
  value: string;
  setValue: (value: string) => void;
}

export const contextGlobal = createContext<IContext | null>(null);
