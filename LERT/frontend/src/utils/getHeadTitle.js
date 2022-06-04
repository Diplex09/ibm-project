const titlesDictionary = {
    '/': 'Home',
    '/delegate': 'Delegate',
    '/employee': 'Employee',
    '/expenses': 'Expenses',
    '/recovery': 'Recovery',
    '/reports': 'Reports',
    '/types': 'Types',
    '/icas': 'ICAS',
    '/hours': 'Extra Hours',
    '/manage': 'Manage Manager Functions',
    '/edit': 'Edit Manager Information',
};

export const getHeadTitle = (path) => {
    return titlesDictionary[path];
};
