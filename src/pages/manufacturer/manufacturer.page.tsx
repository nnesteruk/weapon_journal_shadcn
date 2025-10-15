import { columns, type Manufacturer } from "./columns";
import { DataTable, DataTableSearchInput } from "@/shared/components";
import { Dialog, Button } from "@/shared/ui";
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";

const sendData = async () => {
  return [
    { id: 1, name: "Шквал-1", country: "Россия" },
    { id: 2, name: "Ворон", country: "США" },
    { id: 3, name: "Кобра-Р", country: "Китай" },
    { id: 4, name: "Громовой Молот", country: "Франция" },
    { id: 5, name: "Астра-9", country: "Германия" },
    { id: 6, name: "Ночной Ястреб", country: "Япония" },
    { id: 7, name: "Пирон", country: "Индия" },
    { id: 8, name: "Северный Вихрь", country: "Канада" },
    { id: 9, name: "Змей-7", country: "Израиль" },
    { id: 10, name: "Легионер", country: "Великобритания" },
    { id: 11, name: "Фаланга", country: "Италия" },
    { id: 12, name: "Оникс", country: "Швеция" },
    { id: 13, name: "Торнадо", country: "Бразилия" },
    { id: 14, name: "Радарис", country: "Австралия" },
    { id: 15, name: "Меркурий", country: "Нидерланды" },
    { id: 16, name: "Катарсис", country: "Швейцария" },
    { id: 17, name: "Вулкан-III", country: "Испания" },
    { id: 18, name: "Арго", country: "Польша" },
    { id: 19, name: "Эхо", country: "Турция" },
    { id: 20, name: "Сирин", country: "Греция" },
    { id: 21, name: "Браво-2", country: "Мексика" },
    { id: 22, name: "Крест-9", country: "Южная Корея" },
    { id: 23, name: "Лабиринт", country: "Чехия" },
    { id: 24, name: "Призм", country: "Финляндия" },
    { id: 25, name: "Оникс-Х", country: "Норвегия" },
    { id: 26, name: "Скаут", country: "Дания" },
    { id: 27, name: "Грифон", country: "Румыния" },
    { id: 28, name: "Маяк", country: "Венгрия" },
    { id: 29, name: "Титан-Р", country: "Бельгия" },
    { id: 30, name: "Заря", country: "Португалия" },
    { id: 31, name: "Кайрос", country: "Аргентина" },
    { id: 32, name: "Шторм", country: "Чили" },
    { id: 33, name: "Клинок-7", country: "ЮАР" },
    { id: 34, name: "Феникс", country: "Сингапур" },
    { id: 35, name: "Рейзор", country: "ОАЭ" },
    { id: 36, name: "Мираж", country: "Таиланд" },
    { id: 37, name: "Эгида", country: "Филиппины" },
    { id: 38, name: "Вега", country: "Индонезия" },
    { id: 39, name: "Каскад", country: "Вьетнам" },
    { id: 40, name: "Арктур", country: "Исландия" },
    { id: 41, name: "Паладин", country: "Колумбия" },
    { id: 42, name: "Сатурн", country: "Кения" },
    { id: 43, name: "Аталант", country: "Нигерия" },
    { id: 44, name: "Рубин", country: "Алжир" },
    { id: 45, name: "Гелиос", country: "Марокко" },
    { id: 46, name: "Капелла", country: "Пакистан" },
    { id: 47, name: "Орлан", country: "Египет" },
    { id: 48, name: "Сирокко", country: "Тунис" },
    { id: 49, name: "Инферно", country: "Беларусь" },
    { id: 50, name: "Мираж-XS", country: "Словакия" },
  ];
};

export const ManufacturerPage = () => {
  const [data, setData] = useState<Manufacturer[]>([]);
  const getData = async () => {
    const data = await sendData();
    return setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* <Button>Добавить изготовителя</Button> */}
      <div className="flex justify-between items-center">
        <DataTableSearchInput table={table} />
        <div className="flex gap-2">
          <Dialog>
            <Button>
              <PlusIcon />
              Добавить запись
            </Button>
          </Dialog>
          <Button>Экспорт в Excel</Button>
        </div>
      </div>
      <DataTable data={data} columns={columns}></DataTable>;
    </>
  );
};
