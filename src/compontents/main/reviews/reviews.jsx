import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import Left from '../../../images/Left.svg';
import Right from '../../../images/Right.svg';
import GreyDot from '../../../images/GreyDot.svg';
import Dot from '../../../images/Dot.svg';

export default function Reviews() {
    const reviews = 
    [
        {   id: 1,
            text: "Замечательное место для любителей астрономии. Здесь можно узнать много интересного о нашей Вселенной. С удовольствием вернусь сюда снова!",
            author: "Ирина Лебедева",
            what: "Экскурсия в планетарий"
        },
        {   id: 2,
            text: "Очень интересная экскурсия! Узнал много нового о космосе. Рекомендую всем посетить!",
            author: "Дмитрий Смирнов",
            what: "Экскурсия в планетарий"
        },
        {   id: 3,
            text: "Прекрасные экскурсоводы, очень интересно рассказывают о звёздах и планетах. Обязательно приду ещё!",
            author: "Екатерина Волкова",
            what: "Посещение планетария"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFadding, setisFadding] = useState(false);

    const nextReview = () => {
        setisFadding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
            setisFadding(false);
        }, 500);
    };

    const prevReview = () => {
        setisFadding(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
            setisFadding(false);
        }, 500);
    };

    const swipeHandlers = () => useSwipeable({
        onSwipedLeft : nextReview,
        onSwipedRight: prevReview,
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    })

    return(
        <div className="w-screen h-auto py-20 bg-[#c2eb1d] flex flex-col justify-center items-center">

            <div className="text-center font-medium text-4xl text-pretty max-sm:text-balance pb-20">
                <p>Отзывы посетителей Саратовского планетария</p>
            </div>

            <div className="flex w-[70vw] pb-5 justify-center max-sm:w-auto" {...swipeHandlers}>
                <button onClick={prevReview}>
                    <img 
                    src={Left}
                    alt="Image Error"
                    className="w-[51px] h-[96px] flex pr-5 opacity-75 mr-10 max-sm:mr-0 max-sm:opacity-0"/>
                </button>

                <img src="#" alt="Image Error" className=""/>

                <div className={`flex flex-col text-pretty max-sm:text-balance max-w-[50vw] duration-500 transition-opacity max-sm:max-w-screen ${isFadding?
                    'opacity-0' : 'opacity-100'}`}
                >
                    <p 
                    className="text-xl mb-5 font-light animate-fadeIn"
                    >
                        {reviews[currentIndex].text}
                    </p>

                    <p 
                    className="text-base font-bold animate-fadeIn"
                    >
                        {reviews[currentIndex].author}
                    </p>

                    <p 
                    className="text-sm animate-ani"
                    >
                        {reviews[currentIndex].what}
                    </p>
                </div>

                <button onClick={nextReview}>
                    <img 
                    src={Right} 
                    alt="Image Error" 
                    className="w-[51px] h-[96px] flex pl-5 opacity-75 ml-10 max-sm:ml-0 max-sm:opacity-0"/>
                </button>

                

            </div>

            <div className="flex flex-row pt-5">
                {reviews.map((_, index) => (
                    <img 
                    key={index}
                    src={index === currentIndex ? Dot : GreyDot} 
                    alt="Точка" 
                    className="w-[4px] h-[4px] mx-1"/>
    ))}
</div>
        </div>
    );
}