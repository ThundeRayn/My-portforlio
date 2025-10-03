import React, { useEffect, useRef, useState } from "react";
import styles from "./SlideCards.module.css";

interface ProjectCard {
  title: string;
  desc: string;
  bg: string;
  thumb: string;
}

const CardData: ProjectCard[] = [
  {
    title: "Designers",
    desc: "Tools that work like you do.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/designers.webp",
    thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-designer.webp?w=480",
  },
  {
    title: "Marketers",
    desc: "Create faster, explore new possibilities.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/marketers.webp",
    thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-marketer.webp?w=480",
  },
  {
    title: "VFX filmmakers",
    desc: "From concept to cut, faster.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/filmmakers.webp",
    thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-film.webp?w=480",
  },
  {
    title: "Content creators",
    desc: "Make scroll-stopping content, easily.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/content-creators.webp",
    thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-content.webp?w=480",
  },
  {
    title: "Art directors",
    desc: "Creative control at every stage.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/art-directors.webp",
    thumb: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/img-art.webp?w=480",
  },
];

export const SlideCards: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const isMobile = () => window.matchMedia("(max-width:767px)").matches;

  const center = (i: number) => {
    if (!wrapRef.current || !trackRef.current) return;
    const cards = trackRef.current.children;
    const card = cards[i] as HTMLElement;
    const axis = isMobile() ? "top" : "left";
    const size = isMobile() ? "clientHeight" : "clientWidth";
    const start = isMobile() ? card.offsetTop : card.offsetLeft;
    wrapRef.current.scrollTo({
      [axis]: start - (wrapRef.current[size] / 2 - card[size] / 2),
      behavior: "smooth",
    } as any);
  };

  const go = (step: number) => {
    const nextIndex = Math.min(Math.max(current + step, 0), CardData.length - 1);
    setCurrent(nextIndex);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown"].includes(e.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(e.key)) go(-1);
    };
    window.addEventListener("keydown", handleKey);

    const handleResize = () => center(current);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
    };
  }, [current]);

  useEffect(() => {
    center(current);
  }, [current]);

  return (
    <section>
      <div className={styles.head}>
        <h2>Previous work examples</h2>
        <div className={styles.controls}>
          <button
            className={styles.navBtn}
            onClick={() => go(-1)}
            disabled={current === 0}
          >
            ‹
          </button>
          <button
            className={styles.navBtn}
            onClick={() => go(1)}
            disabled={current === CardData.length - 1}
          >
            ›
          </button>
        </div>
      </div>

      <div className={styles.slider} ref={wrapRef}>
        <div className={styles.track} ref={trackRef}>
          {CardData.map((card, i) => {
            const active = i === current;
            return (
              <article
                key={i}
                className={`${styles.projectCard} ${active ? styles.projectCardActive : ""}`}
                onClick={() => go(i - current)}
              >
                <img src={card.bg} alt="" className={styles.projectCardBg} />
                <div
                  className={`${styles.projectCardContent} ${
                    active ? styles.projectCardContentActive : ""
                  }`}
                >
                  <img
                    src={card.thumb}
                    alt=""
                    className={`${styles.projectCardThumb} ${
                      active ? styles.projectCardThumbActive : ""
                    }`}
                  />
                  <div>
                    <h3
                      className={`${styles.projectCardTitle} ${
                        active ? styles.projectCardTitleActive : ""
                      }`}
                    >
                      {card.title}
                    </h3>
                    <p
                      className={`${styles.projectCardDesc} ${
                        active ? styles.projectCardDescActive : ""
                      }`}
                    >
                      {card.desc}
                    </p>
                    <button
                      className={`${styles.projectCardBtn} ${
                        active ? styles.projectCardBtnActive : ""
                      }`}
                    >
                      Details
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className={styles.dots}>
        {CardData.map((_, i) => (
          <span
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </section>
  );
};