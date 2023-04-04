import {
  VerticalTimeline,
  VerticalTimelineElement
} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import { experience } from '../locales/en/experience.en'
import 'react-vertical-timeline-component/style.min.css'

const Experience = () => {
  return (
    <div className='max-w-[100%] md:max-w-[90%] mx-auto rounded-3xl bg-gray p-[10px] md:p-[30px]'>
      <motion.div>
        <h2 className='text-primary text-center font-bold text-[25px] md:text-[60px] my-5'>
          My Work Experience
        </h2>
      </motion.div>
      <VerticalTimeline lineColor='#c4c4c4'>
        {experience?.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: '#292929',
              color: '#c4c4c4',
              border: '4px solid #c4c4c4',
              borderRadius: '20px',
              padding: '10px'
            }}
            contentArrowStyle={{ borderRight: '10px solid #c4c4c4' }}
            date={item.date}
            dateClassName='dateTimaline'
            iconStyle={{ background: item.iconBg }}
            icon={
              <div className='flex justify-center items-center w-full h-full'>
                <img
                  src={item.icon}
                  alt={item.company_name}
                  className='w-[60%] h-[60%] object-cover'
                />
              </div>
            }
          >
            <div>
              <h3 className='text-primary text-[14px] md:text-[24px] font-bold'>
                {item.title}
              </h3>
              <p
                className='text-secondary text-[10px] md:text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {item.company_name}
              </p>
            </div>
            <ul className='mt-5 list-disc ml-3 md:ml-5 space-y-2'>
              {item.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[8px] md:text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Experience
