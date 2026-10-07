import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const handleMouseMove = (event) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="cyborg-page">

      {/* ================= NAVIGATION ================= */}

      <nav className="navbar">

        <div className="logo">
          CYBORG<span>_X</span>
        </div>

        <div className="nav-links">
          <a href="#system">SYSTEM</a>
          <a href="#specs">SPECS</a>
          <a href="#about">ABOUT</a>
        </div>

        <button
          className="nav-button"
          onClick={() => scrollToSection("about")}
        >
          INITIALIZE
        </button>

      </nav>


      {/* ================= HERO ================= */}

      <main className="hero">

        <div className="hero-content">

          <p className="status">
            <span></span>
            SYSTEM ONLINE // 2087
          </p>

          <h1>
            HUMAN
            <br />
            <span>2.0</span>
          </h1>

          <p className="hero-text">
            The next evolution of humanity has arrived.
            <br />
            Intelligence. Strength. Precision.
          </p>

          <div className="hero-buttons">

            <button
              className="primary-btn"
              onClick={() => scrollToSection("system")}
            >
              EXPLORE SYSTEM →
            </button>

            <button
              className="secondary-btn"
              onClick={() => scrollToSection("specs")}
            >
              VIEW SPECS
            </button>

          </div>

        </div>


        {/* ================= CYBORG VISUAL ================= */}

        <div className="cyborg-visual">

          <div className="scan-line"></div>

          <div className="cyborg-circle">

            <div className="cyborg-head">

              <div className="eye left-eye"></div>

              <div className="eye right-eye"></div>

              <div className="face-line"></div>

            </div>

          </div>


          {/* ORBIT RINGS */}

          <div className="orbit orbit-one"></div>

          <div className="orbit orbit-two"></div>


          {/* DATA CARD 1 */}

          <div className="data-card card-one">

            <small>
              NEURAL LINK
            </small>

            <strong>
              98.7%
            </strong>

          </div>


          {/* DATA CARD 2 */}

          <div className="data-card card-two">

            <small>
              CORE POWER
            </small>

            <strong>
              99.2%
            </strong>

          </div>


          {/* SYSTEM HUD */}

          <div className="system-readout">

            <div className="readout-top">

              <span>
                SYSTEM STATUS
              </span>

              <span className="live">
                ● LIVE
              </span>

            </div>


            <div className="readout-line">

              <span>
                NEURAL SYNC
              </span>

              <strong>
                98%
              </strong>

            </div>


            <div className="readout-line">

              <span>
                AI CORE
              </span>

              <strong>
                99%
              </strong>

            </div>


            <div className="readout-line">

              <span>
                BIOMETRIC
              </span>

              <strong>
                100%
              </strong>

            </div>

          </div>

        </div>

      </main>


      {/* ================= SYSTEM CAPABILITIES ================= */}

      <section
        className="system-section"
        id="system"
      >

        <p className="section-label">
          // SYSTEM CAPABILITIES
        </p>

        <h2>
          BUILT FOR THE
          <br />
          <span>NEXT ERA.</span>
        </h2>


        <div className="feature-grid">


          {/* FEATURE 01 */}

          <div className="feature-card">

            <span>
              01
            </span>

            <h3>
              NEURAL LINK
            </h3>

            <p>
              Direct connection between human consciousness
              and artificial intelligence.
            </p>

          </div>


          {/* FEATURE 02 */}

          <div className="feature-card">

            <span>
              02
            </span>

            <h3>
              ENHANCED VISION
            </h3>

            <p>
              Advanced optical systems designed for
              precision beyond human limits.
            </p>

          </div>


          {/* FEATURE 03 */}

          <div className="feature-card">

            <span>
              03
            </span>

            <h3>
              AI CORE
            </h3>

            <p>
              A self-learning intelligence engine continuously
              adapting to its environment.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SPECS ================= */}

      <section
        className="specs-section"
        id="specs"
      >

        <div className="specs-header">

          <p className="section-label">
            // SYSTEM DIAGNOSTICS
          </p>

          <h2>
            PERFORMANCE
            <br />
            <span>OVERRIDE.</span>
          </h2>

        </div>


        <div className="specs-grid">


          {/* SPEC 01 */}

          <div className="spec-card">

            <span>
              NEURAL PROCESSING
            </span>

            <strong>
              98.7%
            </strong>

            <div className="progress">

              <div
                style={{
                  width: "98.7%",
                }}
              ></div>

            </div>

          </div>


          {/* SPEC 02 */}

          <div className="spec-card">

            <span>
              REACTION SPEED
            </span>

            <strong>
              0.02 MS
            </strong>

            <div className="progress">

              <div
                style={{
                  width: "96%",
                }}
              ></div>

            </div>

          </div>


          {/* SPEC 03 */}

          <div className="spec-card">

            <span>
              AI ADAPTATION
            </span>

            <strong>
              99.4%
            </strong>

            <div className="progress">

              <div
                style={{
                  width: "99.4%",
                }}
              ></div>

            </div>

          </div>


          {/* SPEC 04 */}

          <div className="spec-card">

            <span>
              ENERGY EFFICIENCY
            </span>

            <strong>
              94.8%
            </strong>

            <div className="progress">

              <div
                style={{
                  width: "94.8%",
                }}
              ></div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= ABOUT / CTA ================= */}

      <section
        className="about-section"
        id="about"
      >

        <div className="about-content">

          <p className="section-label">
            // PROJECT CYBORG
          </p>

          <h2>
            THE FUTURE
            <br />
            <span>IS HYBRID.</span>
          </h2>

          <p>
            Humanity is no longer limited by biology.
            CYBORG_X represents a new generation where
            human intelligence meets machine precision.
          </p>

          <button
            className="primary-btn"
            onClick={() => scrollToSection("system")}
          >
            INITIALIZE SYSTEM →
          </button>

        </div>


        {/* TERMINAL */}

        <div className="terminal-box">

          <div className="terminal-header">

            <span>
              CYBORG_OS
            </span>

            <span>
              ● ● ●
            </span>

          </div>


          <div className="terminal-body">

            <p>
              &gt; booting neural interface...
            </p>

            <p>
              &gt; biometric scan complete
            </p>

            <p>
              &gt; artificial intelligence online
            </p>

            <p>
              &gt; human-machine synchronization
            </p>

            <strong>
              &gt; SYSTEM READY_
            </strong>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="logo">
          CYBORG<span>_X</span>
        </div>

        <p>
          HUMAN / MACHINE / FUTURE
        </p>

        <span>
          © 2087 CYBORG SYSTEMS
        </span>

      </footer>

    </div>
  );
}

export default App;
