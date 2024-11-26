import Learn from '../../../images/Learn.svg';
import Magic from '../../../images/Magic.svg';
import Advertising from '../../../images/Advertising.svg';
import Memories from '../../../images/Memories.svg';

export default function Advantages(){
    return(
        <div className="w-screen h-[60vh] flex flex-col justify-center max-sm:h-auto bg-[#f2f7f7]">
            <div className="font-medium text-4xl text-center max-sm:text-3xl my-10 text-balance ">
                <p>Погружение в космос рядом с домом</p>
            </div>

            <div className="grid grid-cols-2 justify-items-center mx-auto max-sm:grid-cols-1">
                <div className="flex flex-row my-10 max-w-[460px] text-pretty max-sm:text-balance mx-10 max-lg:mx-0">
                    <img src={Magic} alt="Image Error" className='w-[60px] h-[60px]'/>
                    <div className="flex flex-col ml-5">
                        <p className='text-xl font-bold'>Уникальные впечатления</p>
                        <p  className='font-light text-base'>Погрузитесь в мир космоса и получите незабываемые впечатления.</p>
                    </div>
                </div>

                <div className="flex flex-row my-10 max-w-[460px] text-pretty max-sm:text-balance">
                    <img src={Advertising} alt="Image Error" className='w-[60px] h-[60px]'/>
                    <div className="flex flex-col ml-5">
                        <p className='text-xl font-bold'>Специальные мероприятия</p>
                        <p  className='font-light text-base'>Посетите специальные мероприятия, которые помогут вам глубже изучить космос.</p>
                    </div>

                </div>

                <div className="flex flex-row my-10 max-w-[460px] text-pretty max-sm:text-balance">
                    <img src={Learn} alt="Image Error" className='w-[60px] h-[60px]'/>
                    <div className="flex flex-col ml-5">
                        <p className='text-xl font-bold'>Профессиональные гиды</p>
                        <p className='font-light text-base'>Наши профессиональные гиды сделают ваше путешествие увлекательным и познавательным.</p>
                    </div>
                
                </div>

                <div className="flex flex-row my-10 max-w-[460px] text-pretty max-sm:text-balance">
                    <img src={Memories} alt="Image Error" className='w-[60px] h-[60px]'/>
                    <div className="flex flex-col ml-5">
                        <p className='text-xl font-bold'>Неизгладимые воспоминания</p>
                        <p className='font-light text-base'>Создайте воспоминания, которые останутся с вами на всю жизнь.</p>
                    </div>
                </div>

            </div>
        </div>
    );
}