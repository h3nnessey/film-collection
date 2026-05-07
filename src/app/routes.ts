export interface AppRoute {
  path: string;
  label: string;
  exact: boolean;
}

export type RouteName = 'Home' | 'About';

export const AppRoutes: Record<RouteName, AppRoute> = {
  Home: {
    path: '',
    label: 'Home',
    exact: true,
  },
  About: {
    path: 'about',
    label: 'About',
    exact: false,
  },
} as const;
