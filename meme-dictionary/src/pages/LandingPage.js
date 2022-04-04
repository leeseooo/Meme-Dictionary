import React from 'react'
import styles from "../assets/style/LandingPage.module.css"


export default function LandingPage() {
    function onClick() {
        //각 원 article 중앙 translate 애니메이션, /home으로 이동
    }
    return (
        <div className={styles.mainContainer}>
            <main>
                <article>
                    <h3>Archive</h3>
                    <p>밈을 기록해보세요</p>
                </article>
                <article>
                    <h3>Dictionary</h3>
                    <p>사전처럼 밈을 검색해보세요</p>
                </article>
                <article>
                    <h3>Join</h3>
                    <p>직접 밈을 등록해보세요</p>
                </article>
            </main>
            <button onClick={onClick}>바로가기</button>
        </div>
    )
}
