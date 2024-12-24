import { useEffect, useRef, useState } from "react";

const YandexMap = () => {
  const API = String(import.meta.env.VITE_YANDEXAPI);
  const mapInstance = useRef(null);
  const mapDiv = useRef(null);
  const [load, setLoad] = useState(true);
  const [mapType, setMapType] = useState("yandex#publicMap");

  const loadMap = async () => {
    return new Promise((res, rej) => {
      if (window.ymaps) {
        window.ymaps.ready(res);
      } else {
        const script = document.createElement("script");
        script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=${API}`;
        script.onload = () => window.ymaps.ready(res);
        script.onerror = rej;
        document.head.appendChild(script);
      }
    });
  };

  const mapTypes = [
    { type: "yandex#publicMap", label: "Схема" },
    { type: "yandex#satellite", label: "Спутник" },
    { type: "yandex#hybrid", label: "Гибрид" },
  ];

  useEffect(() => {
    const init = async () => {
      try {
        await loadMap();
        if (!mapInstance.current) {
          mapInstance.current = new window.ymaps.Map(mapDiv.current, {
            center: [51.524485, 46.037176],
            zoom: 19,
            controls: ["zoomControl", "geolocationControl"],
          });

          // Устанавливаем начальный тип карты
          mapInstance.current.setType(mapType);

          const place = new window.ymaps.Placemark([51.524485, 46.037176], {
            hintContent: "Саратовский планетарий",
            balloonContent: "Экскурсия «Тайны звёздного небосклона»",
          });

          mapInstance.current.geoObjects.add(place);

          const listBoxItems = mapTypes.map(({ type, label }) => {
            const item = new window.ymaps.control.ListBoxItem({
              data: { content: label },
              state: { selected: mapType === type },
            });

            item.events.add("select", () => {
              setMapType(type);  // Обновляем mapType при выборе нового слоя
            });

            return item;
          });

          const listBox = new window.ymaps.control.ListBox({
            data: { content: "Слои" },
            items: listBoxItems,
          });

          mapInstance.current.controls.add(listBox);
        }
        setLoad(false);
      } catch (error) {
        console.log("Ошибка:", error);
        setLoad(false);
      }
    };

    init();
  }, []); // Инициализация карты при монтировании компонента

  // Обновление карты при изменении mapType
  useEffect(() => {
    if (mapInstance.current && mapInstance.current.setType) {
      mapInstance.current.setType(mapType);
    }
  }, [mapType]);

  // Синхронизация состояния элементов ListBox с состоянием mapType
  useEffect(() => {
    if (mapInstance.current) {
      const items = mapInstance.current.controls.get(0)?.items;
      items?.forEach((item) => {
        const isSelected = item.data.get('content') === mapTypes.find(({ type }) => type === mapType)?.label;
        // Обновляем состояние selected для каждого элемента в зависимости от mapType
        item.state.set('selected', isSelected);
      });
    }
  }, [mapType]); // Когда mapType изменяется, обновляем состояние галочек

  return (
    <div className="flex justify-center items-center py-10 h-screen flex-col max-sm:text-center max-lg:px-0 max-lg:text-center">
      <p className="font-medium text-base mb-5 max-sm:text-xl max-lg:text-xl">Запланируйте свой визит уже сегодня!</p>
      <p className="text-4xl font-light mb-10 max-sm:text-3xl max-lg:text-3xl">Саратовский планетарий: путешествие в мир космоса</p>
      {load ? (
        <div>Загрузка карты...</div>
      ) : (
        <div ref={mapDiv} className="w-full h-full max-w-[70%] max-h-[60%] max-sm:max-w-screen" />
      )}
      <div className="max-w-[40%] flex flex-col text-center text-xl font-extralight text-pretty max-sm:text-balance max-sm:max-w-[100%] max-sm:py-0 mt-10">
        <p>Мы рады пригласить вас на увлекательную экскурсию по Саратовскому планетарию! 
          Здесь вы сможете познакомиться с миром звёзд и планет, узнать много интересного о космосе.</p>

      </div>
    </div>
  );
};

export default YandexMap;
