export interface Route {
  name: string,
  path: string
}

export const Routes: Route[] = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'Login',
    path: '/login'
  },
  {
    name: 'Protected Route',
    path: '/protected-route'
  }
]
