import create from 'zustand';

interface State {
  data: any | null;
  loading: boolean;
  error: Error | null;
  setData: (data: any) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: Error) => void;
}

export const useStore = create<State>((set) => ({
  data: null,
  loading: true,
  error: null,
  setData: (data) => set(() => ({ data })),
  setLoading: (loading) => set(() => ({ loading })),
  setError: (error) => set(() => ({ error })),
}));