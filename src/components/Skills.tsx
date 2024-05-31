import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons'
import { mySkills } from '../lib/appConst'

export default function Skills() {
    return (
        <section className="px-16" id='Skills'>
            <h1 className="section-heading">Skills Mastered</h1>
            <div className='py-16'>
                <ul className='flex gap-5 flex-wrap px-[150px] max-md:px-5 max-sm:justify-start justify-center items-center'>
                    {
                        mySkills.map((skill) => {
                            return <li key={skill} className='flex gap-2 items-center'><FontAwesomeIcon icon={faAnglesRight} fade /> {skill}</li>
                        })
                    }
                </ul>
            </div>
        </section>
    )
}
