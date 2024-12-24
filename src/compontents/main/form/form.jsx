import { useState } from "react";

export default function Form() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [teleph, setTeleph] = useState('');

    const handleInputEmail = (event) => {
        setEmail(event.target.value);
    };

    const handleInputName = (event) => {
        setName(event.target.value);
    };

    const handleInputTeleph = (event) => {
        setTeleph(event.target.value);
    };

    const sentToServer = (event) => {
        event.preventDefault();  // предотвращаем перезагрузку страницы
        console.log({ email, name, teleph });
        // Здесь отправляйте данные на сервер
    };

    return (
        <div className="w-screen h-[70vh] flex text-center items-center justify-center flex-col bg-[#F2F7F7] max-sm:h-auto">
            <p className="text-5xl font-medium py-5 max-sm:text-4xl">Напишите нам</p>
            <p className="text-pretty max-sm:text-balance max-w-[45%] text-2xl font-extralight pb-8 max-lg:max-w-[70%]">Свяжитесь с нами напрямую по любым вопросам или с отзывами, используя нашу удобную форму обратной связи.</p>
            <form onSubmit={sentToServer} className="flex items-center space-x-10 flex-row py-5 max-sm:flex-col max-sm:space-x-0">
                <div className="w-[15vw] flex flex-col max-lg:w-[20vw] max-sm:w-[80vw]">
                    <input
                        type="email"
                        placeholder="Ваш имейл"
                        value={email}
                        onChange={handleInputEmail}
                        className="focus:outline-none active:border-none w-full bg-[#F2F7F7] py-2 px-4"
                        required
                    />
                    <hr className="border-t border-gray-300 my-2" />
                </div>

                <div className="w-[15vw] flex flex-col max-lg:w-[20vw] max-sm:w-[80vw] max-sm:my-10">
                    <input
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={handleInputName}
                        className="focus:outline-none active:border-none w-full bg-[#F2F7F7] py-2 px-4"
                        required
                    />
                    <hr className="border-t border-gray-300 my-2" />
                </div>

                <div className="w-[15vw] flex flex-col max-lg:w-[20vw] max-sm:w-[80vw]">
                    <input
                        type="tel"
                        placeholder="Ваш телефон"
                        value={teleph}
                        onChange={handleInputTeleph}
                        pattern="[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        className="focus:outline-none active:border-none w-full bg-[#F2F7F7] py-2 px-4"
                        required
                    />
                    <hr className="border-t border-gray-300 my-2" />
                </div>

                <button
                    type="submit"
                    className="bg-[#c2eb1d] rounded-3xl py-3 px-5 flex items-center justify-center max-sm:my-5"
                >
                    <span className="black font-medium">
                        Отправить
                    </span>
                </button>
            </form>
        </div>
    );
}
