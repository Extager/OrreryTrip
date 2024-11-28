export default function Ticket_buy(){
    return(
        <div className="w-screen h-screen flex flex-col justify-center items-center max-sm:h-auto py-2">
            <div className="text-center text-4xl pt-20 font-medium max-sm:text-3xl">
                <p>Откройте тайны космоса</p>
            </div>
            <div className="h-full flex flex-col max-sm:items-center mt-20 max-w-[560px] max-sm:max-w-screen max-sm:max-w-0">

                <div className="mb-5 max-sm:text-center text-pretty max-sm:text-balance max-sm:w-screen">
                    <p className="text-xl font-medium">Интерактивные экспонаты</p>
                    <p className="text-lg font-thin pt-4">Погрузитесь в мир космических чудес с помощью интерактивных экспонатов.</p>
                </div>

                <div className="mb-5 max-sm:text-center text-pretty max-sm:text-balance max-sm:w-screen">
                    <p className="text-xl font-medium">Образовательный опыт</p>
                    <p className="text-lg font-thin pt-4">Узнайте больше о космосе, взаимодействуя с экспонатами.</p>
                </div>
                <div className="mb-5 max-sm:text-center text-pretty max-sm:text-balance max-sm:w-[95vw]">
                    <p className="text-xl font-medium">Увлекательный формат</p>
                    <p className="text-lg font-thin pt-4">Исследуйте Вселенную в интерактивной и увлекательной форме.</p>
                </div>
                <div className="mb-5 max-sm:text-center text-pretty max-sm:text-balance max-sm:w-screen">
                    <p className="text-xl font-medium">Познавательное путешествие</p>
                    <p className="text-lg font-thin pt-4">Расширьте свои знания о космосе и получите незабываемые впечатления.</p>
                </div>
                <div className="flex justify-center my-10 rounded-[90px] text-nowrap">
                    <button className="border border-[#c2eb1d] flex justify-center rounded-3xl">
                        <span className="text-base px-[60px] font-medium py-4 max-sm:px-[30px]">Купить билет</span>
                    </button>
                </div>
            </div>
        </div>
    );
}