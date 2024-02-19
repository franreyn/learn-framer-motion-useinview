import { motion } from 'framer-motion';
import useVisible from './hooks/useVisible';

function App() {

  const { ref: ref1, isVisible: isVisible1 } = useVisible({
    triggerOnce: false,
    initial: false,
    threshold: 1
  });
  
  const { ref: ref2, isVisible: isVisible2 } = useVisible({
    triggerOnce: true,
    initial: false,
    threshold: 1
  });

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: center;
          width: 100%;
        }
        .container > :nth-child(1) {
          margin-bottom: 200px;
        }
        .container > :nth-child(2) {
          margin-bottom: 200px;
        }
        .container > :nth-child(3) {
          margin-bottom: 1500px;
        }
      `}</style>
        <div className="container">

          <h1>Framer Motion useInView</h1>
          
          <motion.div
            ref={ref1}
            initial="hidden"
            animate={isVisible1 ? "visible" : "hidden"}
            variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <h2>Tempor anim mollit qui exercitation reprehenderit.</h2>
            <p>In anim do consequat laboris magna magna.</p>  
          </motion.div>

          <motion.div
              ref={ref2}
              initial="hidden"
              animate={isVisible2 ? "visible" : "hidden"}
              variants={{ hidden: {opacity: 0, y: 75}, visible: {opacity: 1, y: 0} }}
              transition={{ duration: 0.3, delay: 0.8 }}
          >
            <p>In anim do consequat laboris magna magna.</p>  
          </motion.div>
          
        </div>      
    </>
  )
}

export default App
