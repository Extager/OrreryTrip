import Calendar from '../../images/Calendar.png'
import Clock from '../../images/Clock.png';
import Location from '../../images/Location.png';

export  default function Header(){
    return(
        <div className="w-full h-screen flex flex-col  bg-[url('../src/images/Header.jpg')] bg-center bg-no-repeat
         text-pretty max-sm:text-balance text-white text-center items-center justify-center py-15">
            <div className='absolute inset-0 bg-cover'></div>
            <p className="font-semibold text-5xl max-sm:text-3xl py-10 ">Эксурсия «Тайны звёздного небосклона»</p>
            <p className="font-thin text-2xl max-w-[600px] max-sm:text-xl">Узнайте, как астрономы изучают космос и какие тайны скрывает наша вселенная.</p>
            <div className="flex w-full flex-row justify-center items-start mt-20">
                <div className="flex flex-col text-center items-center text-pretty max-sm:text-balance
                max-sm:max-w-[100vw] max-sm:w-[100vw]">
                    <img src={Calendar} alt="Image" className='w-[50px] h-[50px] max-sm:w-[50px] max-sm:h-[50px] mb-2' />
                    <p>15 января / Среда</p>
                </div>
                <div className="flex flex-col text-center items-center text-pretty max-sm:text-balance
                mx-[10rem] max-sm:my-5 max-lg:mx-[8rem] max-sm:mx-0">
                    <img src={Clock} alt="Image Error" className='w-[50px] h-[50px] max-sm:w-[50px] max-sm:h-[50px] mb-2'/>
                    <p>10:00 –17:00</p>
                </div>
                <div className="flex flex-col text-center items-center max-w-[130px] text-pretty max-sm:text-pretty
                max-sm:max-w-[100vw] max-sm:w-[100vw]">
                    <img src={Location} alt="Image Error" className='w-[50px] h-[50px] mb-2'/>
                    <p>ул. Чернышевского, 165/167, Саратов</p>
                </div>
            </div>
        </div>
    );
}