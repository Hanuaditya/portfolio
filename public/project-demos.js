(() => {
  // Set liveUrl and videoSrc for each project when they are ready.
  // Files in public/videos are served from /videos/.
  const projects = [
    { key: "public", title: "Website", liveUrl: "", videoSrc: "" },
    { key: "users", title: "Patient portal", liveUrl: "", videoSrc: "" },
    { key: "care", title: "Care team", liveUrl: "", videoSrc: "" },
    { key: "production", title: "Operations", liveUrl: "", videoSrc: "" },
  ];

  const theater = document.createElement("dialog");
  theater.className = "project-theater";
  theater.setAttribute("aria-labelledby", "project-theater-title");
  theater.innerHTML = `
    <header class="project-theater-bar">
      <button type="button" data-exit autofocus>Close <kbd>Esc</kbd></button>
      <span>Project screening</span>
      <button type="button" data-sound aria-pressed="false">Sound</button>
    </header>
    <div class="project-theater-scene">
      <div class="project-theater-screen"></div>
      <div class="project-theater-audience" aria-hidden="true">
        <div class="project-theater-frames"></div>
      </div>
      <div class="project-theater-seat" aria-hidden="true"></div>
    </div>
    <div class="project-theater-reels">
      <button type="button" data-previous aria-label="Previous demo">‹</button>
      <div aria-live="polite">
        <p id="project-theater-title"></p>
        <p data-reel></p>
      </div>
      <button type="button" data-next aria-label="Next demo">›</button>
    </div>`;

  const screen = theater.querySelector(".project-theater-screen");
  const title = theater.querySelector("#project-theater-title");
  const reel = theater.querySelector("[data-reel]");
  const sound = theater.querySelector("[data-sound]");
  const frames = theater.querySelector(".project-theater-frames");
  let biteTimer;
  let activeIndex = 0;
  let opener;
  let muted = true;
  let audio;
  let crunchBuffer;
  let crunch;

  function stopCrunch() {
    if (!crunch) return;
    crunch.stop();
    crunch.disconnect();
    crunch = null;
  }

  function playCrunch() {
    if (muted || !theater.open || audio?.state !== "running") return;
    stopCrunch();
    crunch = audio.createBufferSource();
    crunch.buffer = crunchBuffer;
    crunch.connect(audio.destination);
    crunch.start();
  }

  function prepareAudio() {
    if (audio || !window.AudioContext) return;
    audio = new AudioContext();
    crunchBuffer = audio.createBuffer(1, Math.floor(audio.sampleRate * 0.24), audio.sampleRate);
    const samples = crunchBuffer.getChannelData(0);
    for (let i = 0; i < samples.length; i++) {
      const time = i / audio.sampleRate;
      const decay = Math.exp(-(time % 0.075) * 83) * Math.exp(-time * 9);
      samples[i] = (Math.random() * 2 - 1) * decay * 0.085;
    }
  }

  function setMuted(value) {
    muted = value;
    sound.setAttribute("aria-pressed", String(!muted));
    const video = screen.querySelector("video");
    if (video) video.muted = muted;
    if (muted) {
      clearTimeout(biteTimer);
      stopCrunch();
    }
  }

  function renderReel(index) {
    activeIndex = (index + projects.length) % projects.length;
    const project = projects[activeIndex];
    title.textContent = project.title;
    reel.textContent = `Reel ${activeIndex + 1} / ${projects.length}`;
    screen.querySelector("video")?.pause();
    screen.replaceChildren();
    if (!project.videoSrc) {
      const placeholder = document.createElement("p");
      placeholder.className = "project-theater-hover";
      placeholder.textContent = "Demo coming soon";
      screen.append(placeholder);
      return;
    }

    const video = document.createElement("video");
    video.controls = true;
    video.playsInline = true;
    video.muted = muted;
    video.src = project.videoSrc;
    video.setAttribute("aria-label", `${project.title} demo`);
    const controls = document.createElement("div");
    controls.className = "project-theater-hover";

    const playback = document.createElement("button");
    playback.type = "button";
    function updatePlayback() {
      playback.textContent = video.paused ? "Play" : "Pause";
      playback.setAttribute("aria-label", video.paused ? "Play demo" : "Pause demo");
    }
    playback.addEventListener("click", () => {
      if (video.paused) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    video.addEventListener("play", updatePlayback);
    video.addEventListener("pause", updatePlayback);
    video.addEventListener("ended", updatePlayback);
    updatePlayback();
    controls.append(playback);

    if (project.liveUrl) {
      const live = document.createElement("a");
      live.href = project.liveUrl;
      live.target = "_blank";
      live.rel = "noopener noreferrer";
      live.textContent = "View Live Project";
      controls.append(live);
    }

    video.addEventListener("error", () => {
      const message = document.createElement("p");
      message.textContent = "This demo could not be loaded.";
      video.replaceWith(message);
      controls.remove();
    }, { once: true });
    screen.append(video, controls);
    void video.play().catch(() => {
      // Native controls are available when autoplay is blocked.
    });
  }

  function openTheater(index, trigger) {
    if (theater.open) return;
    opener = trigger;
    theater.showModal();
    renderReel(index);
  }

  theater.querySelector("[data-exit]").addEventListener("click", () => theater.close());
  theater.querySelector("[data-previous]").addEventListener("click", () => renderReel(activeIndex - 1));
  theater.querySelector("[data-next]").addEventListener("click", () => renderReel(activeIndex + 1));
  sound.addEventListener("click", () => {
    setMuted(!muted);
    if (muted) return;
    prepareAudio();
    if (audio) void audio.resume().catch(() => {});
  });
  function cueBite() {
    clearTimeout(biteTimer);
    if (!muted) biteTimer = setTimeout(playCrunch, 1250);
  }

  frames.addEventListener("animationiteration", cueBite);
  theater.addEventListener("close", () => {
    setMuted(true);
    screen.querySelector("video")?.pause();
    screen.replaceChildren();
    opener?.focus({ preventScroll: true });
    opener = null;
  });

  function mountActions() {
    if (!theater.isConnected) document.body.append(theater);

    projects.forEach((project, index) => {
      const targets = document.querySelectorAll(
        `[data-building-caption="${project.key}"] .vPE1kq_screenTools, [data-static-chapter="tbd-${project.key}"]`,
      );
      for (const target of targets) {
        if (target.querySelector(".project-demo-actions")) continue;

        const actions = document.createElement("div");
        actions.className = "project-demo-actions";
        const live = document.createElement(project.liveUrl ? "a" : "button");
        live.textContent = "View Live Project";
        if (project.liveUrl) {
          live.href = project.liveUrl;
          live.target = "_blank";
          live.rel = "noopener noreferrer";
        } else {
          live.type = "button";
          live.disabled = true;
          live.title = "Live project URL is unavailable";
        }

        const demo = document.createElement("button");
        demo.type = "button";
        demo.textContent = "View Demo";
        demo.setAttribute("aria-haspopup", "dialog");
        demo.addEventListener("click", () => openTheater(index, demo));
        actions.append(live, demo);
        target.append(actions);
      }
    });
  }

  // The legacy home page enhances its project captions after the snapshot loads.
  // Reattach the actions if its runtime replaces the project markup.
  let frame = 0;
  new MutationObserver(() => {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      mountActions();
    });
  }).observe(document.documentElement, { childList: true, subtree: true });
  mountActions();
})();
