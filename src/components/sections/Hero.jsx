import { Suspense, useEffect, useMemo, useRef } from "react";
import {
  ArrowRight,
  Play,
  Sparkles,
  Zap,
  Activity,
  Droplets,
  Bug,
  Leaf,
  Radio,
  Satellite,
  Radar,
  Globe2,
  ScanLine,
} from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const appUrl = "https://app.satagro.ai";

const ticker = [
  {
    Icon: Zap,
    title: "NDVI Alert",
    text: "Farm #A24 · Punjab · 0.42 Low",
    tone: "text-red-500 bg-red-50 border-red-100",
  },
  {
    Icon: Activity,
    title: "EVI Update",
    text: "0.68 Normal · Maharashtra",
    tone: "text-status-green bg-green-50 border-green-100",
  },
  {
    Icon: Bug,
    title: "Pest Risk",
    text: "Aphid detected · UP",
    tone: "text-status-orange bg-orange-50 border-orange-100",
  },
  {
    Icon: Droplets,
    title: "NDWI",
    text: "−0.12 Drought stress · Rajasthan",
    tone: "text-blue-500 bg-blue-50 border-blue-100",
  },
  {
    Icon: Leaf,
    title: "LAI",
    text: "3.8 Healthy · Karnataka",
    tone: "text-status-green bg-green-50 border-green-100",
  },
  {
    Icon: Radio,
    title: "New Scan",
    text: "Farm #B17 · Haryana",
    tone: "text-brand-primary bg-brand-primary/5 border-brand-primary/10",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

function EarthModel() {
  const earth = useGLTF("/planet/scene.gltf");

  const earthRef = useRef(null);
  const cloudRef = useRef(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (earthRef.current) {
      earthRef.current.rotation.y = t * 0.25;
      earthRef.current.rotation.x = 0.12;
    }

    if (cloudRef.current) {
      cloudRef.current.rotation.y = -t * 0.08;
      cloudRef.current.rotation.z = t * 0.02;
    }
  });

  return (
    <group scale={1.35} position={[0, -0.12, 0]}>
      {/* ORIGINAL PLANET */}
      <group ref={earthRef}>
        <primitive object={earth.scene} />
      </group>

      {/* GREEN TEXTURED ATMOSPHERE */}
      <group ref={cloudRef}>
        <mesh>
          <sphereGeometry args={[1.18, 64, 64]} />
          <meshPhongMaterial
            color="#4F8F18"
            emissive="#3A6B0F"
            emissiveIntensity={0.6}
            transparent
            opacity={0.18}
            wireframe
            side={THREE.BackSide}
          />
        </mesh>

        <mesh rotation={[0.15, 0, 0]}>
          <sphereGeometry args={[1.23, 64, 64]} />
          <meshPhongMaterial
            color="#9DFF6A"
            emissive="#9DFF6A"
            emissiveIntensity={0.3}
            transparent
            opacity={0.08}
            wireframe
          />
        </mesh>

        <mesh>
          <sphereGeometry args={[1.28, 64, 64]} />
          <meshBasicMaterial
            color="#4F8F18"
            transparent
            opacity={0.05}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh rotation={[0.6, 0.3, 0]}>
          <sphereGeometry args={[1.32, 32, 32]} />
          <meshPhongMaterial
            color="#9DFF6A"
            transparent
            opacity={0.04}
            wireframe
          />
        </mesh>
      </group>
    </group>
  );
}

function Stars() {
  const starsRef = useRef(null);

  const starGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = [];

    for (let i = 0; i < 420; i++) {
      positions.push(
        (Math.random() - 0.5) * 9,
        (Math.random() - 0.5) * 7,
        -2 - Math.random() * 4
      );
    }

    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );

    return geometry;
  }, []);

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.025;
    }
  });

  return (
    <points ref={starsRef} geometry={starGeometry}>
      <pointsMaterial size={0.018} color="#9DFF6A" transparent opacity={0.45} />
    </points>
  );
}

function ScanDots() {
  const dotsRef = useRef(null);

  const dotsGeometry = useMemo(() => {
    const positions = [];
    const colors = [];

    for (let i = 0; i < 110; i++) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const r = 1.18;

      positions.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );

      const color = new THREE.Color(i % 8 === 0 ? "#F59E0B" : "#B7FF7A");
      colors.push(color.r, color.g, color.b);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    return geometry;
  }, []);

  useFrame(({ clock }) => {
    if (dotsRef.current) {
      dotsRef.current.rotation.y = clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <points ref={dotsRef} geometry={dotsGeometry}>
      <pointsMaterial
        size={0.035}
        vertexColors
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}

function GlobeScene() {
  const satelliteRef = useRef(null);
  const orbitRef = useRef(null);

  const orbitGeometry = useMemo(() => {
    const orbitPoints = [];

    for (let i = 0; i <= 180; i++) {
      const a = (i / 180) * Math.PI * 2;
      orbitPoints.push(
        new THREE.Vector3(Math.cos(a) * 1.9, 0, Math.sin(a) * 1.9)
      );
    }

    return new THREE.BufferGeometry().setFromPoints(orbitPoints);
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (orbitRef.current) {
      orbitRef.current.rotation.z = t * 0.35;
    }

    if (satelliteRef.current) {
      satelliteRef.current.position.x = Math.cos(t * 0.8) * 1.9;
      satelliteRef.current.position.z = Math.sin(t * 0.8) * 1.9;
      satelliteRef.current.position.y = Math.sin(t * 1.1) * 0.25;
      satelliteRef.current.rotation.y = -t * 0.8;
      satelliteRef.current.rotation.z = Math.sin(t * 2) * 0.15;
    }
  });

  return (
    <>
      <ambientLight intensity={1.3} />
      <directionalLight position={[4, 4, 5]} intensity={2.5} />
      <pointLight position={[-4, -2, 3]} intensity={1.5} color="#4F8F18" />

      <Stars />

      <Suspense fallback={null}>
        <EarthModel />
      </Suspense>

      <ScanDots />

      <mesh>
        <sphereGeometry args={[1.5, 64, 64]} />
        <meshBasicMaterial color="#4F8F18" transparent opacity={0.07} />
      </mesh>

      <mesh rotation={[Math.PI / 2.3, 0, 0]}>
        <torusGeometry args={[1.38, 0.006, 12, 180]} />
        <meshBasicMaterial color="#9DFF6A" transparent opacity={0.5} />
      </mesh>

      <mesh rotation={[Math.PI / 1.75, 0.15, 0]}>
        <torusGeometry args={[1.58, 0.004, 12, 180]} />
        <meshBasicMaterial color="#4F8F18" transparent opacity={0.55} />
      </mesh>

      <group ref={orbitRef} rotation={[0.55, 0.1, 0.35]}>
        <line geometry={orbitGeometry}>
          <lineBasicMaterial color="#3A6B0F" transparent opacity={0.8} />
        </line>

        <group ref={satelliteRef}>
          <mesh>
            <boxGeometry args={[0.22, 0.13, 0.13]} />
            <meshStandardMaterial
              color="#EFFFF0"
              metalness={0.65}
              roughness={0.2}
            />
          </mesh>

          <mesh position={[-0.27, 0, 0]}>
            <boxGeometry args={[0.27, 0.05, 0.16]} />
            <meshStandardMaterial
              color="#9DFF6A"
              metalness={0.25}
              roughness={0.25}
            />
          </mesh>

          <mesh position={[0.27, 0, 0]}>
            <boxGeometry args={[0.27, 0.05, 0.16]} />
            <meshStandardMaterial
              color="#9DFF6A"
              metalness={0.25}
              roughness={0.25}
            />
          </mesh>

          <mesh position={[0, -0.17, 0]} rotation={[0, 0, Math.PI]}>
            <coneGeometry args={[0.11, 0.42, 32]} />
            <meshBasicMaterial color="#9DFF6A" transparent opacity={0.35} />
          </mesh>
        </group>
      </group>
    </>
  );
}

export default function Hero() {
  const visualRef = useRef(null);
  const bgOneRef = useRef(null);
  const bgTwoRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 767px)").matches;

    if (!isMobile) {
      if (visualRef.current) {
        gsap.to(visualRef.current, {
          y: -14,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (bgOneRef.current) {
        gsap.to(bgOneRef.current, {
          x: 35,
          y: -25,
          duration: 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (bgTwoRef.current) {
        gsap.to(bgTwoRef.current, {
          x: -30,
          y: 30,
          duration: 6,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    }

    return () =>
      gsap.killTweensOf([visualRef.current, bgOneRef.current, bgTwoRef.current]);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#F7FBF5]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(58,107,15,0.18),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(245,158,11,0.15),transparent_28%),linear-gradient(180deg,#F7FBF5_0%,#FFFFFF_58%,#F1F8EC_100%)]" />

      <div
        ref={bgOneRef}
        className="pointer-events-none absolute -left-24 top-20 h-52 w-52 rounded-full bg-brand-primary/20 blur-[80px] md:h-72 md:w-72"
      />

      <div
        ref={bgTwoRef}
        className="pointer-events-none absolute -right-32 top-36 h-72 w-72 rounded-full bg-ember-accent/20 blur-[95px] md:h-[480px] md:w-[480px]"
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-4 pb-14 pt-24 sm:px-6 md:pt-28 lg:grid-cols-5 lg:items-center lg:gap-8 lg:px-8 lg:pb-24">
        <motion.div
          className="z-10 space-y-5 text-center lg:col-span-3 lg:text-left"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.div
            variants={itemVariants}
            className="mx-auto inline-flex max-w-full items-center gap-2 rounded-full border border-brand-primary/15 bg-white/80 px-3 py-2 text-[11px] font-semibold text-brand-primary shadow-sm backdrop-blur sm:px-4 sm:text-sm lg:mx-0"
          >
            <Sparkles className="h-4 w-4 shrink-0" />
            <span className="truncate">
              AI + Satellite Intelligence for modern farming
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="font-display text-[34px] font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#234607] bg-clip-text text-transparent">
              See crop stress
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#111827] via-[#3A6B0F] to-[#4F8F18] bg-clip-text text-transparent">
              before it becomes
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#3A6B0F] via-[#4F8F18] to-[#F59E0B] bg-clip-text text-transparent">
              crop loss.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-500 sm:text-base md:text-lg lg:mx-0"
          >
            SatAgro.AI helps farmers and agri-teams monitor crop health, water
            stress, pest risk, and field performance using satellite imagery and
            AI-powered advisory.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <a
              href={appUrl}
              className="btn-primary w-full justify-center px-6 py-3 text-sm sm:w-auto sm:text-base"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/contact"
              className="btn-secondary w-full justify-center px-6 py-3 text-sm sm:w-auto sm:text-base"
            >
              <Play className="h-4 w-4" />
              Book a Demo
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto grid max-w-xl grid-cols-3 gap-2 sm:gap-3 lg:mx-0"
          >
            {[
              ["2,400+", "Farmers"],
              ["12+", "States"],
              ["24/7", "Monitoring"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-app-border bg-white/80 p-3 shadow-sm backdrop-blur sm:rounded-2xl sm:p-4"
              >
                <p className="bg-gradient-to-r from-[#111827] to-[#3A6B0F] bg-clip-text text-lg font-bold text-transparent sm:text-2xl">
                  {value}
                </p>
                <p className="mt-1 text-[10px] text-zinc-500 sm:text-xs">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mx-auto max-w-full overflow-hidden rounded-2xl border border-app-border bg-white/85 p-1.5 shadow-sm backdrop-blur-sm sm:max-w-2xl sm:rounded-full lg:mx-0"
          >
            <div className="overflow-hidden">
              <div className="animate-ticker flex w-max gap-2 py-1.5 pl-2 sm:gap-3">
                {[...ticker, ...ticker].map(
                  ({ Icon, title, text, tone }, index) => (
                    <div
                      key={index}
                      className={`flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 shadow-sm sm:gap-3 sm:px-4 ${tone}`}
                    >
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/80">
                        <Icon className="h-3.5 w-3.5" />
                      </span>

                      <span className="text-left">
                        <span className="block text-[11px] font-bold leading-none sm:text-xs">
                          {title}
                        </span>
                        <span className="mt-1 block max-w-[145px] truncate text-[10px] opacity-75 sm:max-w-none sm:text-xs">
                          {text}
                        </span>
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          ref={visualRef}
          className="relative -mt-12 mx-auto h-[360px] w-full max-w-[500px] lg:col-span-2 lg:h-[520px] lg:max-w-none lg:-mt-16"
          initial={{ opacity: 0, scale: 0.95, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.65 }}
        >
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full border border-brand-primary/20 sm:h-[310px] sm:w-[310px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-brand-primary/25 sm:h-[400px] sm:w-[400px]" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-ember-accent/20 sm:h-[480px] sm:w-[480px]" />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(58,107,15,0.24),transparent_58%)]" />

          <Canvas
            className="relative z-10"
            camera={{ position: [0, 0, 5], fov: 45 }}
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true, alpha: true }}
          >
            <GlobeScene />
          </Canvas>

          <motion.div
            className="absolute left-2 top-10 z-20 rounded-2xl border border-brand-primary/15 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-md sm:left-8 sm:top-16"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="flex items-center gap-2 text-[11px] font-bold text-brand-primary sm:text-xs">
              <Globe2 className="h-3.5 w-3.5" />
              NDVI Scan
            </p>
            <p className="mt-1 text-[10px] text-zinc-500">0.74 Healthy</p>
          </motion.div>

          <motion.div
            className="absolute bottom-16 right-2 z-20 rounded-2xl border border-brand-primary/15 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-md sm:bottom-24 sm:right-8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="flex items-center gap-2 text-[11px] font-bold text-brand-primary sm:text-xs">
              <Satellite className="h-3.5 w-3.5" />
              Satellite Pass
            </p>
            <p className="mt-1 text-[10px] text-zinc-500">Updated 12 min ago</p>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-2 z-20 rounded-2xl border border-brand-primary/15 bg-white/60 px-3 py-2 shadow-sm backdrop-blur-md sm:bottom-16 sm:left-10"
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="flex items-center gap-2 text-[11px] font-bold text-brand-primary sm:text-xs">
              <Radar className="h-3.5 w-3.5" />
              Water Stress
            </p>
            <p className="mt-1 text-[10px] text-zinc-500">
              NDWI 0.18 Moderate
            </p>
          </motion.div>

          <p className="absolute bottom-0 right-2 z-20 flex items-center gap-1.5 text-right text-[10px] text-zinc-400 sm:right-8 sm:text-xs">
            <ScanLine className="h-3.5 w-3.5" />
            Real-time satellite crop monitoring
          </p>
        </motion.div>
      </div>
    </section>
  );
}