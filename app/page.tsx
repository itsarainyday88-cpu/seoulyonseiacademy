'use client';

import styles from './page.module.css';
import { LayoutGrid, Users, School, Phone, ChevronRight } from 'lucide-react';

export default function Home() {
    return (
        <main className={styles.main}>
            {/* Navigation */}
            <nav className={styles.nav}>
                <div className={styles.navInner}>
                    <div className={styles.logo}>
                        <span className={styles.logoMain}>SEOUL YONSEI</span>
                        <span className={styles.logoSub}>ACADEMY</span>
                    </div>
                    <div className={styles.menu}>
                        <a href="#about">학원소개</a>
                        <a href="#facilities">교육환경</a>
                        <a href="#curriculum">커리큘럼</a>
                        <a href="#contact" className={styles.navCta}>상담예약</a>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroBg}>
                    <img src="/images/Exterior.jpg" alt="Seoul Yonsei Academy" />
                    <div className={styles.overlay} />
                </div>
                <div className={styles.heroContent}>
                    <div className={styles.badge}>PREMIUM ELITE EDUCATION</div>
                    <h1 className={styles.title}>
                        서울대의 진중함,<br />
                        연세대의 자부심을 담다
                    </h1>
                    <p className={styles.subtitle}>
                        검증된 리더들의 교육 철학으로 우리 아이의 내일을 설계합니다.
                    </p>
                    <div className={styles.btnGroup}>
                        <button className={styles.primaryBtn}>상담 예약하기 <ChevronRight size={18} /></button>
                        <button className={styles.secondaryBtn}>커리큘럼 보기</button>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className={styles.stats}>
                <div className={styles.statItem}>
                    <span className={styles.statNum}>100%</span>
                    <span className={styles.statLabel}>전문 강사진 직강</span>
                </div>
                <div className={styles.statLine} />
                <div className={styles.statItem}>
                    <span className={styles.statNum}>1:1</span>
                    <span className={styles.statLabel}>개별 밀착 관리</span>
                </div>
                <div className={styles.statLine} />
                <div className={styles.statItem}>
                    <span className={styles.statNum}>PREMIUM</span>
                    <span className={styles.statLabel}>학습 최적화 공간</span>
                </div>
            </section>

            {/* Directors Section */}
            <section id="about" className={styles.directors}>
                <div className={styles.sectionHeader}>
                    <h2>Leadership</h2>
                    <p>꿈을 현실로 만드는 교육 전문가</p>
                </div>
                <div className={styles.directorContent}>
                    <div className={styles.directorImage}>
                        <img src="/images/Directors.jpg" alt="Directors" />
                    </div>
                    <div className={styles.directorText}>
                        <h3>믿음으로 맡기는 프리미엄 교육</h3>
                        <p>
                            서울연세학원은 단순한 지식 전달을 넘어, 학생들이 스스로 사고하고 미래를 설계할 수 있는 힘을 길러줍니다.
                            서울대와 연세대의 정수를 담은 커리큘럼으로 최상의 결과를 약속합니다.
                        </p>
                        <ul className={styles.features}>
                            <li><Users size={16} /> 베테랑 원장진 책임 직강</li>
                            <li><LayoutGrid size={16} /> 학생별 맞춤형 진도 설계</li>
                            <li><School size={16} /> 몰입도 높은 학습 분위기 조성</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Facilities Section */}
            <section id="facilities" className={styles.facilities}>
                <div className={styles.sectionHeader}>
                    <h2>Educational Environment</h2>
                    <p>최상의 결과를 만드는 압도적 시설</p>
                </div>
                <div className={styles.gallery}>
                    <div className={styles.galleryItem}>
                        <img src="/images/Big_Lecture_Room.jpg" alt="대강의실" />
                        <div className={styles.imgLabel}>대강의실</div>
                    </div>
                    <div className={styles.galleryGrid}>
                        <img src="/images/Study_Room.jpg" alt="스터디룸" />
                        <img src="/images/Lecture_Room2.jpg" alt="강의실" />
                        <img src="/images/Lecture_Room4.jpg" alt="개별지도실" />
                        <img src="/images/Study_Room2.jpg" alt="집중독서실" />
                    </div>
                </div>
            </section>

            {/* Curriculum (AI Generated) Section */}
            <section id="curriculum" className={styles.curriculum}>
                <div className={styles.curriculumBg}>
                    <img src="/images/curriculum_bg.png" alt="Premium Curriculum System" />
                    <div className={styles.curriculumOverlay} />
                </div>
                <div className={styles.curriculumContent}>
                    <div className={styles.sectionHeaderInner}>
                        <h2>Premium Curriculum</h2>
                        <p>초격차를 달성하는 마스터 플랜</p>
                    </div>
                    <div className={styles.curriculumGrid}>
                        <div className={styles.curriculumCard}>
                            <h4>SNU Korean Method</h4>
                            <p>서울대 소비자학·로스쿨 출신 변호사 원장의 직강. 단순 암기를 넘어선 치밀한 지문 분석과 논리 체계를 구축합니다.</p>
                        </div>
                        <div className={styles.curriculumCard}>
                            <h4>Yonsei Math System</h4>
                            <p>연세대 치대 출신 원장의 수학 직강. 수능 0.5% 내 최상위권의 안목으로 복잡한 킬러 문항의 해법을 전수합니다.</p>
                        </div>
                        <div className={styles.curriculumCard}>
                            <h4>Premium 1:1 Clinic</h4>
                            <p>소수정예 원장 직강의 가치를 결과로 증명합니다. 개별 학습 패턴 분석을 통한 완벽한 밀착 관리 시스템을 운영합니다.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className={styles.contact}>
                <div className={styles.contactCard}>
                    <div className={styles.contactInfo}>
                        <h2>Consultation</h2>
                        <p>지금 바로 우리 아이의 가능성을 확인하세요.</p>
                        <div className={styles.phoneBox}>
                            <Phone size={24} />
                            <span>010-XXXX-XXXX (가안)</span>
                        </div>
                    </div>
                    <form className={styles.contactForm}>
                        <input type="text" placeholder="학생 성함 / 학교" />
                        <input type="tel" placeholder="연락처" />
                        <textarea placeholder="문의 사항 (학년, 과목 등)"></textarea>
                        <button type="submit">지금 무료 상담 신청하기</button>
                    </form>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2026 SEOUL YONSEI ACADEMY. All rights reserved.</p>
            </footer>
        </main >
    );
}
