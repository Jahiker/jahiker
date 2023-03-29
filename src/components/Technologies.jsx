import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPhp,
  FaReact,
  FaVuejs,
  FaLaravel,
  FaShopify,
  FaWordpressSimple,
  FaSass,
  FaLess,
  FaBootstrap,
  FaWindows,
  FaLinux
} from 'react-icons/fa'
import { VscTerminalPowershell } from 'react-icons/vsc'
import {
  DiMysql,
  DiJqueryLogo,
  DiStylus,
  DiMaterializecss
} from 'react-icons/di'

const Technologies = ({ motion }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'linear', duration: 1 }}
      className='glass-element rounded-[40px] z-10 p-5 md:p-10 overflow-hidden flex justify-center items-center flex-wrap gap-10 md:gap-20'
    >
      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaHtml5 size='40px' />
        <span className='uppercase text-[8px] font-extralight'>Html</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaCss3Alt size='40px' />
        <span className='uppercase text-[8px] font-extralight'>css</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaJsSquare size='40px' />
        <span className='uppercase text-[8px] font-extralight'>javascript</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaPhp size='40px' />
        <span className='uppercase text-[8px] font-extralight'>php</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaReact size='40px' />
        <span className='uppercase text-[8px] font-extralight'>react</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaVuejs size='40px' />
        <span className='uppercase text-[8px] font-extralight'>vue</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <DiJqueryLogo size='40px' />
        <span className='uppercase text-[8px] font-extralight'>jquery</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaLaravel size='40px' />
        <span className='uppercase text-[8px] font-extralight'>laravel</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaShopify size='40px' />
        <span className='uppercase text-[8px] font-extralight'>Shopify</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaWordpressSimple size='40px' />
        <span className='uppercase text-[8px] font-extralight'>Wordpress</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaSass size='40px' />
        <span className='uppercase text-[8px] font-extralight'>sass</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaLess size='40px' />
        <span className='uppercase text-[8px] font-extralight'>lass</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <DiStylus size='40px' />
        <span className='uppercase text-[8px] font-extralight'>stylus</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaBootstrap size='40px' />
        <span className='uppercase text-[8px] font-extralight'>bootstrap</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <DiMaterializecss size='40px' />
        <span className='uppercase text-[8px] font-extralight'>
          materialize
        </span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <DiMysql size='40px' />
        <span className='uppercase text-[8px] font-extralight'>mysql</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <VscTerminalPowershell size='40px' />
        <span className='uppercase text-[8px] font-extralight'>terminal</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaWindows size='40px' />
        <span className='uppercase text-[8px] font-extralight'>windows</span>
      </div>

      <div className='flex flex-col justify-center items-center gap-2 bg-dark text-primary w-[100px] h-[100px] rounded-full'>
        <FaLinux size='40px' />
        <span className='uppercase text-[8px] font-extralight'>linux</span>
      </div>
    </motion.div>
  )
}

export default Technologies
