export interface RouterLink {
    name: string;
    path: string;
    title: string;
}
export const routerLink:RouterLink[] = [
    {
        name: 'Home',
        path: '/',
        title: 'Home'
    },
    {
        name: 'About',
        path: '/about',
        title: 'About'
    },
    {
        name: 'Characters',
        path: '/characters',
        title: 'Characters'
    }
]