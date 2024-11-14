import Calendar from '../../images/Calendar.png'
import Clock from '../../images/Clock.png';
import Location from '../../images/Location.png';

export  default function Header(){
    return(
        <div className="w-full h-screen flex flex-col bg-cover bg-[url('../src/images/Header.jpg')] bg-center bg-no-repeat
         text-pretty max-sm:text-balance text-white text-center items-center justify-center">
            <p className="font-semibold text-5xl max-sm:text-3xl py-10 ">Эксурсия «Тайны звёздного небосклона»</p>
            <p className="font-thin text-2xl max-w-[600px] max-sm:text-xl">Узнайте, как астрономы изучают космос и какие тайны скрывает наша вселенная.</p>
            <div className="flex w-full flex-row justify-center items-start mt-20">
                <div className="flex flex-col text-center items-center max-w-[360px] text-pretty max-sm:text-balance">
                    <img src={Calendar} alt="Image" className='w-[100px] h-[100px]' />
                    <p>15 января / Среда</p>
                </div>
                <div className="flex flex-col text-center items-center max-w-[360px] text-pretty max-sm:text-balance
                mx-[10rem] ">
                    <img src={Clock} alt="Image Error" className='w-[100px] h-[100px]'/>
                    <p>10:00 –17:00</p>
                </div>
                <div className="flex flex-col text-center items-center max-w-[130px] text-pretty max-sm:text-pretty">
                    <img src={Location} alt="Image Error" className='w-[100px] h-[100px]'/>
                    <p>ул. Чернышевского, 165/167, Саратов</p>
                </div>
            </div>
        </div>
    );
}