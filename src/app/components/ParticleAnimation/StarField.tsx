'use client';

import React, { useEffect, useRef } from 'react';

interface Props {
	speedFactor?: number;
	backgroundColor?: string;
	particleColor?: string;
	particleCount?: number;
	particleSize?:number;
}

export default function Starfield(props: Props) {
	const {
		speedFactor = 0.05,
		backgroundColor = '#0E1322',
		particleColor = '#ececec',
		particleCount = 900,
		particleSize=1.1, 
	} = props;

	const canvasRef = useRef<HTMLCanvasElement | null>(null);

	useEffect(() => {
		const canvas = canvasRef.current;

		if (canvas) {
			const ctx = canvas.getContext('2d');

			if (ctx) {
				let width = window.innerWidth;
				let height = window.innerHeight;
				let particles: { x: number; y: number; z: number }[] = [];
				let rotationX = 0;
				let rotationY = 0;

				// Calculate radius with an additional buffer for overflow
				const baseRadius = Math.sqrt(width ** 2 + height ** 2) / 2;
				const overflowBuffer = baseRadius * 0.3; // 30% larger than screen diagonal
				const effectiveRadius = baseRadius + overflowBuffer;

				const setCanvasExtents = () => {
					canvas.width = width;
					canvas.height = height;
				};

				setCanvasExtents();

				window.addEventListener('resize', () => {
					width = window.innerWidth;
					height = window.innerHeight;
					setCanvasExtents();
				});

				const generateParticles = (count: number) => {
					const particles = [];
					for (let i = 0; i < count; i++) {
						// Generate spherical coordinates with larger radius including overflow buffer
						const theta = Math.random() * 2 * Math.PI;
						const phi = Math.acos(2 * Math.random() - 1);
						const r = Math.cbrt(Math.random()) * effectiveRadius;

						const x = r * Math.sin(phi) * Math.cos(theta);
						const y = r * Math.sin(phi) * Math.sin(theta);
						const z = r * Math.cos(phi);

						particles.push({ x, y, z });
					}
					return particles;
				};

				particles = generateParticles(particleCount);

				const clearCanvas = () => {
					ctx.fillStyle = backgroundColor;
					ctx.fillRect(0, 0, width, height);
				};

				const drawParticles = () => {
					const centerX = width / 2;
					const centerY = height / 2;

					particles.forEach((particle) => {
						// Apply rotation
						const rotatedX =
							particle.x * Math.cos(rotationX) - particle.z * Math.sin(rotationX);
						const rotatedZ =
							particle.x * Math.sin(rotationX) + particle.z * Math.cos(rotationX);
						const rotatedY =
							particle.y * Math.cos(rotationY) - rotatedZ * Math.sin(rotationY);

						// Perspective projection
						const perspective = 800 / (800 - rotatedZ);
						const x = centerX + rotatedX * perspective;
						const y = centerY + rotatedY * perspective;

						// Only draw particles within the visible screen
						if (x >= 0 && x < width && y >= 0 && y < height) {
							ctx.fillStyle = particleColor;
							ctx.beginPath();
							
							ctx.arc(x, y, particleSize, 0, 2 * Math.PI);
							ctx.fill();
						}
					});
				};

				const regenerateParticles = () => {
					// Dynamically add new particles when rotation exceeds certain angles
					particles = generateParticles(particleCount);
				};

				const update = () => {
					clearCanvas();
					drawParticles();

					// Increment rotation for animation
					rotationX += speedFactor * 0.01;
					rotationY += speedFactor * 0.015;

					// Regenerate particles periodically to fill gaps
					if (Math.abs(rotationX) > Math.PI || Math.abs(rotationY) > Math.PI) {
						regenerateParticles();
						rotationX = 0;
						rotationY = 0;
					}

					requestAnimationFrame(update);
				};

				update();
			} else {
				console.error('Could not get 2D context for canvas.');
			}
		} else {
			console.error('Could not find canvas element.');
		}

		return () => {
			window.removeEventListener('resize', () => null);
		};
	}, [speedFactor, backgroundColor, particleColor, particleCount]);

	return (
		<canvas
			ref={canvasRef}
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',
				zIndex: -1,
			}}
		></canvas>
	);
}
