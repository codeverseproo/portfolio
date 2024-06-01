import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { mySkills } from '../lib/appConst'
import { useThemeContext } from '../lib/contextProvider'

export default function Skills() {
    const themeContext = useThemeContext();
    return (
        <section className="px-16" id='Skills'>
            <h1 className="section-heading">Skills Mastered</h1>
            <div className='py-16'>
                <ul className='flex flex-col justify-center items-center gap-4 flex-wrap'>
                    {
                        mySkills.map((skillSet, index) => {
                            return (
                                <>
                                    <ul key={index} className='flex gap-5 flex-wrap px-[150px] max-md:px-5  justify-center items-center'>
                                        {
                                            skillSet.map((skill, index) => {
                                                return <li key={index} className='flex gap-2 items-center'><FontAwesomeIcon icon={faAnglesRight} fade /> {skill}</li>
                                            })
                                        }
                                    </ul>
                                    <div className={`h-[2px] w-[100px] border-dashed border-t ${themeContext.theme == 'dark' ? 'border-gray-50' : 'border-dgreen-700'}`}></div>
                                </>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

