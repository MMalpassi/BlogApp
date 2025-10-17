'use client'
import './LoginPage.css'
import { animate, motion, useMotionValue, useTransform } from 'motion/react'
import { useEffect } from 'react'

export default function HTMLContent() {
    const count = useMotionValue(0)
    const rounded = useTransform(() => Math.round(count.get()))

    useEffect(() => {
        const controls = animate(count, 1000, { duration: 3 })
        return () => controls.stop()
    }, [])

    return <motion.p
      className="animated-text"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      ✍️ Join +<motion.span className="highlight">{rounded}</motion.span> writers already using{" "}
      <strong>Quill</strong>
    </motion.p>
}

const text = {
    fontSize: 64,
    color: "#3866c9ff",
}