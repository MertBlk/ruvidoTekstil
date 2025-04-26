import { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        const needle = document.getElementById('needle');
        const textPath = document.getElementById('ruvido-text');

        function animateNeedle() {
            const length = 1000;
            const duration = 5000; // 5 saniye
            const startTime = performance.now();

            function moveNeedle(currentTime) {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                const offset = length * (1 - progress);
                textPath.setAttribute('stroke-dashoffset', offset);

                const bbox = textPath.getBBox();
                const x = bbox.x + bbox.width * progress;
                const y = bbox.y + bbox.height / 2;

                needle.style.transform = `translate(${x}px, ${y}px)`;

                if (progress < 1) {
                    requestAnimationFrame(moveNeedle);
                }
            }

            requestAnimationFrame(moveNeedle);
        }

        animateNeedle();
    }, []);

    return (
        <div style={{ backgroundColor: '#f5f5f5', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}></div>
            <svg id="text-svg" width="600" height="150" viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
                <text id="ruvido-text" x="50" y="100" fontSize="48" fill="none" stroke="#000" strokeWidth="1.5" fontFamily="Arial, sans-serif">
                    Ruvido Tekstil
                </text>
            </svg>

            <svg id="needle" width="30" height="30" viewBox="0 0 64 64" fill="none" style={{ position: 'absolute', top: 0, left: 0 }}></svg>
                <path d="M32 0C31 10 30 20 32 32C34 44 40 50 50 50C60 50 64 45 64 32C64 19 60 12 50 10C40 8 36 0 32 0Z" fill="gray" />
                <circle cx="32" cy="32" r="5" fill="white" />
            </svg>
        </div>
    );
};

export default Home;