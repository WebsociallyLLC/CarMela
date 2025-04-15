interface SubMenuItem {
  name: string;
  type: string;
}

interface MenuItem {
  name: string;
  subMenu: SubMenuItem[];
  type: string;
}
