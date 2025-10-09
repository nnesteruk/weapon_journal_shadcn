const RoutesPath = {
  BASE_NAME: "/weapon_journal_shadcn",
  MAIN: "/",
  LOGIN: "/login",
  APPLICANT: "/applicant",
  PRODUCT: "/product",
  CALIBER: "/caliber",
  MANUFACTURER: "/manufacturer",
  MODEL: "/model",
  PRODUCTS_CATEGORY: "/products_category",
  PRODUCTS_TYPE: "/products_type",
  PERFORMER: "/performer",
} as const;

const RoutesMeta: Partial<
  Record<(typeof RoutesPath)[keyof typeof RoutesPath], { title: string }>
> = {
  [RoutesPath.MAIN]: { title: "Главная таблица" },
  [RoutesPath.APPLICANT]: { title: "Заявители" },
  [RoutesPath.PRODUCT]: { title: "Продукция" },
  [RoutesPath.CALIBER]: { title: "Калибры" },
  [RoutesPath.MANUFACTURER]: { title: "Изготовители" },
  [RoutesPath.MODEL]: { title: "Модели" },
  [RoutesPath.PRODUCTS_CATEGORY]: { title: "Категории продукции" },
  [RoutesPath.PRODUCTS_TYPE]: { title: "Типы продукции" },
  [RoutesPath.PERFORMER]: { title: "Исполнители" },
};

export { RoutesMeta, RoutesPath };
