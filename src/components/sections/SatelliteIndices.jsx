import {Suspense, useMemo, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {
  Activity,
  Droplets,
  FlaskConical,
  Leaf,
  Layers3,
  Radar,
  Satellite,
  ScanLine,
  Sparkles,
  Sprout,
  Waves,
} from "lucide-react";
import * as THREE from "three";
import {Canvas, useFrame} from "@react-three/fiber";
import {useGLTF} from "@react-three/drei";

const indices = [
  {
    id: "NDVI",
    name: "NDVI",
    full: "Normalized Difference Vegetation Index",
    desc: "Measures vegetation density and crop health. Higher values indicate lush, healthy growth, while lower values signal stress or bare soil.",
    Icon: Leaf,
    accent: "#4F8F18",
    glow: "#9DFF6A",
    risk: "#F59E0B",
    score: "0.74",
    status: "Healthy crop growth",
    metric: "78% healthy area",
    cardOne: "Strong biomass detected",
    cardTwo: "Low stress zones",
    cardThree: "Good vegetation density",
    speed: 0.25,
  },
  {
    id: "EVI",
    name: "EVI",
    full: "Enhanced Vegetation Index",
    desc: "Improves vegetation monitoring by reducing atmospheric and soil background noise in dense crop areas.",
    Icon: Activity,
    accent: "#22C55E",
    glow: "#BBF7D0",
    risk: "#F97316",
    score: "0.61",
    status: "Dense canopy stable",
    metric: "71% dense vegetation",
    cardOne: "Canopy correction active",
    cardTwo: "Dense crop zone",
    cardThree: "Soil noise reduced",
    speed: 0.32,
  },
  {
    id: "NDWI",
    name: "NDWI",
    full: "Normalized Difference Water Index",
    desc: "Detects water content in crops and soil. Useful for identifying irrigation needs and drought stress.",
    Icon: Droplets,
    accent: "#0284C7",
    glow: "#7DD3FC",
    risk: "#F59E0B",
    score: "0.18",
    status: "Moderate water stress",
    metric: "26% irrigation attention",
    cardOne: "Moisture scan active",
    cardTwo: "Irrigation watch zone",
    cardThree: "Water stress visible",
    speed: 0.2,
  },
  {
    id: "NDRE",
    name: "NDRE",
    full: "Normalized Difference Red Edge",
    desc: "Sensitive to chlorophyll changes and helpful for detecting early nutrient deficiencies before severe stress appears.",
    Icon: FlaskConical,
    accent: "#7C3AED",
    glow: "#C4B5FD",
    risk: "#FB7185",
    score: "0.42",
    status: "Chlorophyll watch",
    metric: "18% nutrient risk",
    cardOne: "Chlorophyll layer active",
    cardTwo: "Nutrient variation",
    cardThree: "Early stress signal",
    speed: 0.38,
  },
  {
    id: "SAVI",
    name: "SAVI",
    full: "Soil Adjusted Vegetation Index",
    desc: "Accounts for soil brightness variation, especially useful during early growth when soil exposure is common.",
    Icon: Sprout,
    accent: "#65A30D",
    glow: "#BEF264",
    risk: "#A16207",
    score: "0.53",
    status: "Early growth visible",
    metric: "64% crop cover",
    cardOne: "Soil brightness adjusted",
    cardTwo: "Early crop stage",
    cardThree: "Better soil filtering",
    speed: 0.23,
  },
  {
    id: "LAI",
    name: "LAI",
    full: "Leaf Area Index",
    desc: "Quantifies leaf area per ground unit, helping estimate photosynthesis, biomass, and water usage.",
    Icon: Layers3,
    accent: "#15803D",
    glow: "#86EFAC",
    risk: "#FACC15",
    score: "3.2",
    status: "Leaf area strong",
    metric: "High biomass zone",
    cardOne: "Leaf density mapped",
    cardTwo: "Biomass estimation",
    cardThree: "Photosynthesis zone",
    speed: 0.29,
  },
  {
    id: "MSAVI",
    name: "MSAVI",
    full: "Modified Soil Adjusted Vegetation Index",
    desc: "A self-adjusting soil-aware index designed for large-scale field monitoring and early-stage crops.",
    Icon: Waves,
    accent: "#3A6B0F",
    glow: "#A3E635",
    risk: "#F59E0B",
    score: "0.49",
    status: "Soil-adjusted scan",
    metric: "31% exposed soil",
    cardOne: "Auto soil correction",
    cardTwo: "Exposed soil detected",
    cardThree: "Early crop analysis",
    speed: 0.27,
  },
];

function EarthModel({activeIdx}) {
  const earth = useGLTF("/planet/scene.gltf");

  const earthScene = useMemo(() => earth.scene.clone(true), [earth.scene]);

  const earthRef = useRef(null);
  const cloudRef = useRef(null);

  useFrame(({clock}) => {
    const t = clock.getElapsedTime();

    if (earthRef.current) {
      earthRef.current.rotation.y = t * activeIdx.speed;
      earthRef.current.rotation.x = 0.12;
    }

    if (cloudRef.current) {
      cloudRef.current.rotation.y = -t * 0.08;
      cloudRef.current.rotation.z = t * 0.02;
    }
  });

  return (
    <group scale={1.08} position={[0, -0.04, 0]}>
      <group ref={earthRef}>
        <primitive object={earthScene} />
      </group>

      <group ref={cloudRef}>
        <mesh>
          <sphereGeometry args={[1.18, 64, 64]} />
          <meshPhongMaterial
            color={activeIdx.accent}
            emissive={activeIdx.accent}
            emissiveIntensity={0.55}
            transparent
            opacity={0.16}
            wireframe
            side={THREE.BackSide}
          />
        </mesh>

        <mesh rotation={[0.15, 0, 0]}>
          <sphereGeometry args={[1.25, 64, 64]} />
          <meshPhongMaterial
            color={activeIdx.glow}
            emissive={activeIdx.glow}
            emissiveIntensity={0.28}
            transparent
            opacity={0.08}
            wireframe
          />
        </mesh>

        <mesh rotation={[0.6, 0.3, 0]}>
          <sphereGeometry args={[1.32, 32, 32]} />
          <meshPhongMaterial
            color={activeIdx.glow}
            transparent
            opacity={0.05}
            wireframe
          />
        </mesh>
      </group>
    </group>
  );
}

function Stars({activeIdx}) {
  const starsRef = useRef(null);

  const geometry = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < 420; i++) {
      positions.push(
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 7,
        -2 - Math.random() * 4
      );
    }

    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return g;
  }, []);

  useFrame(({clock}) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.025;
    }
  });

  return (
    <points ref={starsRef} geometry={geometry}>
      <pointsMaterial
        size={0.018}
        color={activeIdx.glow}
        transparent
        opacity={0.46}
      />
    </points>
  );
}

function ScanDots({activeIdx}) {
  const dotsRef = useRef(null);

  const geometry = useMemo(() => {
    const positions = [];
    const colors = [];

    for (let i = 0; i < 140; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 1.18;

      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );

      const color = new THREE.Color(i % 7 === 0 ? activeIdx.risk : activeIdx.glow);
      colors.push(color.r, color.g, color.b);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    return g;
  }, [activeIdx]);

  useFrame(({clock}) => {
    if (dotsRef.current) {
      dotsRef.current.rotation.y = clock.getElapsedTime() * 0.24;
    }
  });

  return (
    <points ref={dotsRef} geometry={geometry}>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

function SatelliteModel({activeIdx}) {
  const satelliteRef = useRef(null);

  useFrame(({clock}) => {
    const t = clock.getElapsedTime();

    if (satelliteRef.current) {
      satelliteRef.current.position.x = Math.cos(t * 0.8) * 1.75;
      satelliteRef.current.position.z = Math.sin(t * 0.8) * 1.75;
      satelliteRef.current.position.y = Math.sin(t * 1.1) * 0.22;
      satelliteRef.current.rotation.y = -t * 0.8;
      satelliteRef.current.rotation.z = Math.sin(t * 2) * 0.15;
    }
  });

  return (
    <group ref={satelliteRef}>
      <mesh>
        <boxGeometry args={[0.2, 0.12, 0.12]} />
        <meshStandardMaterial color="#EFFFF0" metalness={0.65} roughness={0.2} />
      </mesh>

      <mesh position={[-0.25, 0, 0]}>
        <boxGeometry args={[0.25, 0.05, 0.15]} />
        <meshStandardMaterial color={activeIdx.glow} metalness={0.25} roughness={0.25} />
      </mesh>

      <mesh position={[0.25, 0, 0]}>
        <boxGeometry args={[0.25, 0.05, 0.15]} />
        <meshStandardMaterial color={activeIdx.glow} metalness={0.25} roughness={0.25} />
      </mesh>

      <mesh position={[0, -0.16, 0]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.1, 0.38, 32]} />
        <meshBasicMaterial color={activeIdx.glow} transparent opacity={0.35} />
      </mesh>
    </group>
  );
}

function GlobeScene({activeIdx}) {
  const orbitRef = useRef(null);

  const orbitGeometry = useMemo(() => {
    const points = [];

    for (let i = 0; i <= 180; i++) {
      const a = (i / 180) * Math.PI * 2;
      points.push(new THREE.Vector3(Math.cos(a) * 1.75, 0, Math.sin(a) * 1.75));
    }

    return new THREE.BufferGeometry().setFromPoints(points);
  }, []);

  useFrame(({clock}) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.z = clock.getElapsedTime() * 0.35;
    }
  });

  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 4, 5]} intensity={2.5} />
      <pointLight position={[-4, -2, 3]} intensity={1.5} color={activeIdx.accent} />

      <Stars activeIdx={activeIdx} />

      <Suspense fallback={null}>
        <EarthModel activeIdx={activeIdx} />
      </Suspense>

      <ScanDots activeIdx={activeIdx} />

      <mesh>
        <sphereGeometry args={[1.42, 64, 64]} />
        <meshBasicMaterial color={activeIdx.accent} transparent opacity={0.07} />
      </mesh>

      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.28, 0.006, 12, 180]} />
        <meshBasicMaterial color={activeIdx.glow} transparent opacity={0.5} />
      </mesh>

      <mesh rotation={[Math.PI / 1.75, 0.15, 0]}>
        <torusGeometry args={[1.48, 0.004, 12, 180]} />
        <meshBasicMaterial color={activeIdx.accent} transparent opacity={0.55} />
      </mesh>

      <group ref={orbitRef} rotation={[0.55, 0.1, 0.35]}>
        <line geometry={orbitGeometry}>
          <lineBasicMaterial color={activeIdx.accent} transparent opacity={0.82} />
        </line>

        <SatelliteModel activeIdx={activeIdx} />
      </group>
    </>
  );
}

export default function SatelliteIndices() {
  const [active, setActive] = useState("NDVI");
  const activeIdx = indices.find((item) => item.id === active) || indices[0];
  const ActiveIcon = activeIdx.Icon;

  return (
    <section
      id="indices"
      className="relative overflow-hidden bg-[#F7FBF5] py-12 sm:py-16 lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(58,107,15,0.18),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,158,11,0.15),transparent_28%),linear-gradient(180deg,#F7FBF5_0%,#FFFFFF_58%,#F1F8EC_100%)]" />

      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-brand-primary/20 blur-[85px]" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-ember-accent/20 blur-[100px]" />

      <div className="container-wrap relative grid gap-8 lg:grid-cols-5 lg:items-center lg:gap-10">
        <div className="lg:col-span-2">
          <motion.div
            initial={{opacity: 0, y: 18}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 0.6}}
          >
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-1.5 text-xs font-semibold text-brand-primary shadow-sm backdrop-blur">
              <Sparkles className="h-4 w-4" />
              Satellite Indices
            </div>

            <h2 className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-3xl font-extrabold tracking-tight text-transparent sm:text-4xl lg:text-5xl">
              See your farm the way satellites do.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              Select any index and watch the scan layer, glow, risk points,
              labels, and orbital interface adapt around the globe.
            </p>
          </motion.div>

          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
            {indices.map((item) => {
              const Icon = item.Icon;
              const isActive = active === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActive(item.id)}
                  className={`group flex min-h-[68px] items-center gap-2 rounded-2xl border p-3 text-left transition-all duration-300 ${
                    isActive
                      ? "border-transparent text-white shadow-[0_16px_40px_rgba(58,107,15,0.24)]"
                      : "border-app-border bg-white/85 text-zinc-600 backdrop-blur hover:border-brand-primary/30 hover:bg-white"
                  }`}
                  style={{
                    background: isActive
                      ? `linear-gradient(135deg, ${item.accent}, ${item.glow})`
                      : undefined,
                  }}
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      isActive
                        ? "bg-white/18 text-white"
                        : "bg-brand-primary/10 text-brand-primary group-hover:bg-brand-primary group-hover:text-white"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-sm font-bold">{item.name}</span>
                    <span
                      className={`block truncate text-[10px] ${
                        isActive ? "text-white/75" : "text-zinc-400"
                      }`}
                    >
                      Interactive layer
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx.id}
              initial={{opacity: 0, y: 12}}
              animate={{opacity: 1, y: 0}}
              exit={{opacity: 0, y: -8}}
              transition={{duration: 0.3}}
              className="mt-5 overflow-hidden rounded-[1.4rem] border border-app-border bg-white/85 p-4 shadow-sm backdrop-blur-xl sm:p-5"
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-white"
                  style={{backgroundColor: activeIdx.accent}}
                >
                  <ActiveIcon className="h-5 w-5" />
                </div>

                <div>
                  <p
                    className="font-mono text-xs font-semibold uppercase tracking-widest"
                    style={{color: activeIdx.accent}}
                  >
                    {activeIdx.name}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-ember-text sm:text-lg">
                    {activeIdx.full}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500">
                    {activeIdx.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <motion.div
          className="relative mx-auto h-[430px] w-full max-w-[560px] overflow-visible sm:h-[520px] sm:max-w-[620px] lg:col-span-3 lg:h-[620px]"
          initial={{opacity: 0, y: 24, scale: 0.98}}
          whileInView={{opacity: 1, y: 0, scale: 1}}
          viewport={{once: true}}
          transition={{duration: 0.65}}
        >
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border sm:h-[330px] sm:w-[330px] lg:h-[360px] lg:w-[360px]"
            style={{borderColor: `${activeIdx.accent}40`}}
          />

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[295px] w-[295px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed sm:h-[430px] sm:w-[430px] lg:h-[470px] lg:w-[470px]"
            style={{borderColor: `${activeIdx.accent}50`}}
          />

          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed sm:h-[520px] sm:w-[520px] lg:h-[570px] lg:w-[570px]"
            style={{borderColor: `${activeIdx.glow}40`}}
          />

          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(circle at center, ${activeIdx.accent}33, transparent 58%)`,
            }}
          />

          <Canvas
            className="relative z-10 h-full w-full"
            camera={{position: [0, 0, 5], fov: 45}}
            dpr={[1, 1.5]}
            gl={{preserveDrawingBuffer: true, alpha: true}}
          >
            <GlobeScene activeIdx={activeIdx} />
          </Canvas>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${activeIdx.id}-top`}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: [0, -8, 0]}}
              exit={{opacity: 0, y: -8}}
              transition={{
                opacity: {duration: 0.2},
                y: {duration: 3, repeat: Infinity, ease: "easeInOut"},
              }}
              className="absolute left-1 top-8 z-20 max-w-[155px] rounded-2xl border bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:left-10 sm:top-16 sm:max-w-[190px]"
              style={{borderColor: `${activeIdx.accent}26`}}
            >
              <p
                className="flex items-center gap-2 text-[10px] font-bold sm:text-xs"
                style={{color: activeIdx.accent}}
              >
                <Radar className="h-3.5 w-3.5 shrink-0" />
                {activeIdx.name} Scan
              </p>
              <p className="mt-1 text-[10px] text-zinc-500">
                Score {activeIdx.score}
              </p>
            </motion.div>

            <motion.div
              key={`${activeIdx.id}-right`}
              initial={{opacity: 0, y: 10}}
              animate={{opacity: 1, y: [0, 8, 0]}}
              exit={{opacity: 0, y: -8}}
              transition={{
                opacity: {duration: 0.2},
                y: {duration: 3.4, repeat: Infinity, ease: "easeInOut"},
              }}
              className="absolute right-1 top-[54%] z-20 max-w-[165px] rounded-2xl border bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:right-8 sm:top-auto sm:bottom-28 sm:max-w-[210px]"
              style={{borderColor: `${activeIdx.accent}26`}}
            >
              <p
                className="flex items-center gap-2 text-[10px] font-bold sm:text-xs"
                style={{color: activeIdx.accent}}
              >
                <Satellite className="h-3.5 w-3.5 shrink-0" />
                {activeIdx.cardOne}
              </p>
              <p className="mt-1 text-[10px] text-zinc-500">
                {activeIdx.metric}
              </p>
            </motion.div>

            <motion.div
              key={`${activeIdx.id}-left`}
              initial={{opacity: 0, x: -8}}
              animate={{opacity: 1, x: [0, 8, 0]}}
              exit={{opacity: 0, x: 8}}
              transition={{
                opacity: {duration: 0.2},
                x: {duration: 3.8, repeat: Infinity, ease: "easeInOut"},
              }}
              className="absolute bottom-10 left-1 z-20 max-w-[170px] rounded-2xl border bg-white/70 px-3 py-2 shadow-sm backdrop-blur-md sm:bottom-20 sm:left-10 sm:max-w-[220px]"
              style={{borderColor: `${activeIdx.accent}26`}}
            >
              <p
                className="flex items-center gap-2 text-[10px] font-bold sm:text-xs"
                style={{color: activeIdx.accent}}
              >
                <ScanLine className="h-3.5 w-3.5 shrink-0" />
                {activeIdx.cardTwo}
              </p>
              <p className="mt-1 text-[10px] text-zinc-500">
                {activeIdx.cardThree}
              </p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}