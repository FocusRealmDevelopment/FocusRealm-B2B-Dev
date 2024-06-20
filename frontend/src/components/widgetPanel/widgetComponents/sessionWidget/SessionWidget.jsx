//import React from 'react'
import "../../../../styles/global.css"
import styles from "./sessionwidget.module.css"

const SessionWidget = () => {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <span className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                    </svg>
                </span>
                <span className={styles.title}>Maths Class on Trigonometry - basics from masters</span>
            </div>
            <div className={styles.body}>
                <div className={styles.status}>
                    <span className={styles.paused}>Paused</span>
                    <span className={styles.timer}>00:35:25</span>
                </div>
                <button className={styles.resumeButton}>Resume Session Now</button>
            </div>
        </div>
    )
}

export default SessionWidget