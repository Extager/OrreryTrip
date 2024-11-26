import Star from '../../../images/Star.svg';
import Lamp from '../../../images/Lamp.svg';
import Сhemistry from '../../../images/Сhemistry.svg';
import Museum from '../../../images/Museum.svg';

export default function About_2(){
    return(
        <div className="w-screen h-[60vh] flex flex-col justify-center max-sm:h-auto bg-[#f2f7f7]">
            <div className="font-medium text-4xl text-center max-sm:text-3xl my-10 text-pretty max-sm:text-balance">
                <p>Погружение в космос рядом с домом</p>
            </div>

            <div className="grid grid-cols-2 justify-items-center mx-auto max-sm:grid-cols-1">
                <div className="flex flex-row my-10 max-w-[460px] text-pretty max-sm:text-balance mx-10 max-lg:mx-0">
                    <img src={Star} alt="Image Error" className='w-[60px] h-[60px]'/>
                    <div className="flex flex-col ml-5">
                        <p className='text-xl font-bold'>Звёздное небо над головой</p>
                        <p  className='font-light text-base'>Вы сможете наблюдать за небесными явлениями и изучать созвездия.</p>
                    </div>
                </div>

                <div className="flex flex-row my-10 max-w-[460px] text-pretty max-sm:text-balance">
                    <img src={Lamp} alt="Image Error" className='w-[60px] h-[60px]'/>
                    <div className="flex flex-col ml-5">
                        <p className='text-xl font-bold'>Захватывающие проекции</p>
                        <p  className='font-light text-base'>С помощью проекций вы сможете увидеть красоту Вселенной.</p>
                    </div>

                </div>

                <div className="flex flex-row my-10 max-w-[460px] text-pretty max-sm:text-balance">
                    <img src={Museum} alt="Image Error" className='w-[60px] h-[60px]'/>
                    <div className="flex flex-col ml-5">
                        <p className='text-xl font-bold'>Интерактивные экспонаты</p>
                        <p className='font-light text-base'>Экспозиция планетария включает увлекательные интерактивные экспонаты.</p>
                    </div>
                
                </div>

                <div className="flex flex-row my-10 max-w-[460px] text-pretty max-sm:text-balance">
                    <img src={Сhemistry} alt="Image Error" className='w-[60px] h-[60px]'/>
                    <div className="flex flex-col ml-5">
                        <p className='text-xl font-bold'>Научные открытия</p>
                        <p className='font-light text-base'>На экскурсиях вы узнаете о последних научных открытиях в области астрономии.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}