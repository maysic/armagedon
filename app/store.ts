import create from 'zustand';
import { AsterInfo } from './types/types';


export const useInfo = create((set) => ({
  info: [],
  addAsterInfo: (asteroid: any) => set((state: any) => {
    return {info: [...state.info, ...asteroid]}
  })
}))



export const useOrder = create((set) => ({
  order: [],
  addProduct: (asteroid: any) => set((state: any) => {
    return {order: [...state.order, asteroid]}
  })
}))
