'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export const ThemeProvider = (props: ThemeProviderProps) => {
    const { children, ...reset } = props;
    return <NextThemesProvider {...reset}>{children}</NextThemesProvider>
}