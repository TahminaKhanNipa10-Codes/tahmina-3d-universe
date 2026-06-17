// ================= WEB AUDIO HIGH-TECH SYNTH ENGINE =================
class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = true; // Muted by default to respect modern browser autoplay policies

  private initContext() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Helper to create an beautiful organic analog delay/feedback echo line
  private createEcho(sourceNode: AudioNode, delayTime: number = 0.18, feedback: number = 0.38, volume: number = 0.45) {
    if (!this.ctx) return;
    try {
      const delay = this.ctx.createDelay(1.0);
      const feedbackGain = this.ctx.createGain();
      const outputGain = this.ctx.createGain();

      delay.delayTime.setValueAtTime(delayTime, this.ctx.currentTime);
      feedbackGain.gain.setValueAtTime(feedback, this.ctx.currentTime);
      outputGain.gain.setValueAtTime(volume, this.ctx.currentTime);

      sourceNode.connect(delay);
      delay.connect(feedbackGain);
      feedbackGain.connect(delay);
      delay.connect(outputGain);
      outputGain.connect(this.ctx.destination);
    } catch {
      // Safe fail if routing fails
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    return this.isMuted;
  }

  getMuteState() {
    return this.isMuted;
  }

  playPing() {
    try {
      this.initContext();
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      const duration = 0.6;

      // Master trigger node to capture the chime and pipe it to our space echo
      const chimeMixer = this.ctx.createGain();
      chimeMixer.gain.setValueAtTime(1.0, now);
      chimeMixer.connect(this.ctx.destination);

      // Velvet Harmonics: Pure Sine wave warm chime (no harsh tri/saw waves, soft master gains)
      const createSparkNode = (freq: number, volume: number) => {
        if (!this.ctx) return;
        const o = this.ctx.createOscillator();
        const g = this.ctx.createGain();

        o.type = 'sine';
        o.frequency.setValueAtTime(freq, now);
        // Micro-pitch envelope for organic crystal glass tension
        o.frequency.exponentialRampToValueAtTime(freq * 1.002, now + duration);

        g.gain.setValueAtTime(0, now);
        g.gain.linearRampToValueAtTime(volume, now + 0.01);
        g.gain.exponentialRampToValueAtTime(0.0001, now + duration);

        o.connect(g);
        g.connect(chimeMixer);
        o.start(now);
        o.stop(now + duration + 0.05);
      };

      // Play soft beautiful chime notes (under 600Hz, incredibly warm and gentle)
      createSparkNode(293.66, 0.035); // D4 (Cozy bottom root)
      createSparkNode(392.00, 0.025); // G4 (Perfect fifth anchor)
      createSparkNode(440.00, 0.020); // A4 (Lush secondary resonance)
      createSparkNode(587.33, 0.015); // D5 (Soft crystalline highlight)

      // Sparkle a rich 180ms delay echo path
      this.createEcho(chimeMixer, 0.18, 0.28, 0.25);
    } catch {
      // Gracefully capture audio constraints
    }
  }

  playWhoosh() {
    try {
      this.initContext();
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      const duration = 0.45;

      const mixer = this.ctx.createGain();
      mixer.gain.setValueAtTime(1.0, now);
      mixer.connect(this.ctx.destination);

      // Deeply dampened velvety air breeze (filtered noise)
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        data[i] *= 0.025; // Incredibly soft, feather-like amplitude
        b6 = white * 0.115926;
      }

      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = buffer;

      // Resonant, low-cut sweep to sound like a gentle cosmic whisper passing by
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(220, now);
      filter.frequency.exponentialRampToValueAtTime(440, now + duration * 0.5);
      filter.frequency.exponentialRampToValueAtTime(220, now + duration);
      filter.Q.setValueAtTime(1.5, now);

      const mainGain = this.ctx.createGain();
      mainGain.gain.setValueAtTime(0, now);
      mainGain.gain.linearRampToValueAtTime(0.015, now + 0.1);
      mainGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noiseSource.connect(filter);
      filter.connect(mainGain);
      mainGain.connect(mixer);

      noiseSource.start(now);
      noiseSource.stop(now + duration + 0.05);

      // Gentle low physical slide sine wave (no high-pitched wind hiss)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(90, now);
      subOsc.frequency.exponentialRampToValueAtTime(140, now + duration);

      subGain.gain.setValueAtTime(0, now);
      subGain.gain.linearRampToValueAtTime(0.02, now + 0.15);
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      subOsc.connect(subGain);
      subGain.connect(mixer);

      subOsc.start(now);
      subOsc.stop(now + duration + 0.05);
    } catch {
      // Gracefully capture audio constraints
    }
  }

  playThrusterRumble() {
    try {
      this.initContext();
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      const duration = 1.2;

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();
      const lowpass = this.ctx.createBiquadFilter();

      osc1.type = 'sine';
      osc2.type = 'sine';

      // 40Hz deeply soothing sub engine throb
      osc1.frequency.setValueAtTime(40.0, now);
      osc1.frequency.linearRampToValueAtTime(43.0, now + 0.4);
      osc1.frequency.exponentialRampToValueAtTime(38.0, now + duration);

      osc2.frequency.setValueAtTime(40.4, now);
      osc2.frequency.linearRampToValueAtTime(43.4, now + 0.4);
      osc2.frequency.exponentialRampToValueAtTime(38.4, now + duration);

      lowpass.type = 'lowpass';
      lowpass.frequency.setValueAtTime(65, now);
      lowpass.Q.setValueAtTime(1.0, now);

      gainNode.gain.setValueAtTime(0, now);
      gainNode.gain.linearRampToValueAtTime(0.06, now + 0.15); 
      gainNode.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc1.connect(lowpass);
      osc2.connect(lowpass);
      lowpass.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      osc1.start(now);
      osc2.start(now);

      osc1.stop(now + duration);
      osc2.stop(now + duration);
    } catch {
      // Avoid breaking standard environments
    }
  }

  playBigBangExplosion() {
    try {
      this.initContext();
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      const duration = 2.0;

      const masterMix = this.ctx.createGain();
      masterMix.gain.setValueAtTime(1.0, now);
      masterMix.connect(this.ctx.destination);

      // Deep, cinematic, sub-bass cosmic collapse rumble (totally relaxing and clean, no hiss)
      const subOsc = this.ctx.createOscillator();
      const subGain = this.ctx.createGain();
      const subFilter = this.ctx.createBiquadFilter();

      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(75, now);
      subOsc.frequency.exponentialRampToValueAtTime(18, now + duration);

      subFilter.type = 'lowpass';
      subFilter.frequency.setValueAtTime(80, now); // Super low pass to strip any abrasive highs

      subGain.gain.setValueAtTime(0, now);
      subGain.gain.linearRampToValueAtTime(0.18, now + 0.05); 
      subGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      subOsc.connect(subFilter);
      subFilter.connect(subGain);
      subGain.connect(masterMix);

      subOsc.start(now);
      subOsc.stop(now + duration + 0.1);

      // Ultra low pink murmur (soft thunder wave)
      const bufferSize = this.ctx.sampleRate * duration;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
        output[i] *= 0.04; // Extremely soft, warm low rumble
        b6 = white * 0.115926;
      }
      
      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = buffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'lowpass';
      noiseFilter.frequency.setValueAtTime(100, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0, now);
      noiseGain.gain.linearRampToValueAtTime(0.05, now + 0.1);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(masterMix);

      noiseSource.start(now);
      noiseSource.stop(now + duration + 0.1);
    } catch {
      // Safe fail
    }
  }

  playMechanicalClick() {
    try {
      this.initContext();
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      // Luxury warm keyboard 'thock' - 100% pure sine wave sweeping downward (no triangle, zero buzz/hiss)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(45, now + 0.06);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.003); // Delicate, incredibly soft and tactile
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.07);
    } catch {
      // Safe fail
    }
  }

  playTaskTick() {
    try {
      this.initContext();
      if (this.isMuted || !this.ctx) return;
      const now = this.ctx.currentTime;
      
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      // Highly-satisfying soft fluid water-drop-bubble mechanical pop
      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(90, now + 0.04);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.035, now + 0.002);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.045);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Safe fail
    }
  }
}

export const soundEngine = new SoundEngine();
