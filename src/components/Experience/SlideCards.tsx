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
    title: "AI Explorer",
    desc: "building toward AI native app & web.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/designers.webp",
    thumb: "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?w=480",
  },
  {
    title: "UX Design",
    desc: "Build Visually Stunning Websites.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/marketers.webp",
    thumb: "https://images.unsplash.com/photo-1629752187687-3d3c7ea3a21b?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=480",
  },
  {
    title: "Full Stack Dev",
    desc: "Custom software for your business needs.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/filmmakers.webp",
    thumb: "https://images.unsplash.com/photo-1627896181038-a0cf83c86008?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=480",
  },
  {
    title: "B2B Custom",
    desc: "Solutions best suited for your business.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/content-creators.webp",
    thumb: "https://plus.unsplash.com/premium_photo-1752230474021-5749c334925a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?w=480",
  },
  {
    title: "Hackathon Sprinter",
    desc: "Rapid prototyping under pressure, but with passion.",
    bg: "https://cdn-front.freepik.com/home/anon-rvmp/professionals/art-directors.webp",
    thumb: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGE5cGs3M3NkOWF0YzgxbjNwYTQwZmdocG95azN1bHJoaXdoNDZhZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DHBGehJ3FSZEygszX3/giphy.gif?w=480",
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
    <section className={styles.now}>
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