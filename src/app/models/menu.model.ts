export interface MenuModel {
    name: string;
    path: string;
    icon?: string;
    outlined?: boolean;
    submenus?: SubMenuModel[];
    expanded?: boolean;
}

export interface SubMenuModel {
    name: string;
    path: string;
    items?: MenuItemsModel[];
    expanded?: boolean;
}

export interface MenuItemsModel {
    name: string;
    path: string;
    icon?: string;
}
