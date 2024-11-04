export const upfolioProjects = [
    {
        id: 1,
        image: 'uip.jpg',
        path: 'upfolio-internship-program',
        title: 'Upfolio Internship Program',
        year: '2021',
        banner: '',
        partners: 'The Jaguars',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.',
        objective: 'Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam! fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p. Quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid Ratione cum est Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam fugit aliquid ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p.',
        results: 'Lorem ipsum dolor itaque autem alias quo natus quasi fugiat? Consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam! fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p. Quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid Ratione cum est Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam fugit aliquid ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p.',
        definedGoals: [
            {
                item: 'Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque est? Dolorem consequuntur. wj jsdckjk jw oiwurewpol.'
            },
            {
                item: 'Quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid Ratione cum est Dolorem consequuntur necessitatibus voluptate.'
            },
            {
                item: 'Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw pest.'
            },
        ],
        tags: ['Career']
    },
    {
        id: 2,
        image: 'urb.jpg',
        path: 'upfolio-resource-bank',
        title: 'Upfolio Resource Bank',
        year: '2018',
        banner: '',
        partners: 'The Jaguars',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda voluptatem optio perferendis et consectetur.',
        objective: 'Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam! fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p. Quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid Ratione cum est Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam fugit aliquid ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p.',
        results: 'Lorem ipsum dolor itaque autem alias quo natus quasi fugiat? Consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam! fugit aliquid, ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p. Quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid Ratione cum est Dolorem consequuntur necessitatibus voluptate, ipsa quis voluptate nam numquam fugit aliquid ratione cum est? Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw p.',
        definedGoals: [
            {
                item: 'Lorem ipsum dolor itaque autem alias quo natus quasi fugiat eaque est? Dolorem consequuntur. wj jsdckjk jw oiwurewpol.'
            },
            {
                item: 'Quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid Ratione cum est Dolorem consequuntur necessitatibus voluptate.'
            },
            {
                item: 'Dolorem consequuntur necessitatibus voluptate. wj jsdckjk jw oiwurewpol ak lsc noino qiw pest.'
            },
            {
                item: 'Quasi fugiat eaque ipsa quis voluptate nam numquam, fugit aliquid Ratione cum est Dolorem consequuntur necessitatibus voluptate.'
            },
        ],
        tags: ['Technology', 'Career']
    },
]

export interface IGoal {
    item: string;
}

export interface IProject {
    id: number;
    image: string;
    banner: string;
    path: string;
    title: string;
    year: string;
    partners: string;
    description: string;
    objective: string;
    results: string;
    definedGoals: IGoal[];
    tags: string[];
}

export const initialProjectData = {
    id: 1,
    image: '',
    path: '',
    title: '',
    year: '',
    banner: '',
    partners: '',
    description: '',
    objective: '',
    results: '',
    definedGoals: [{item: ''}],
    tags: [''],
}