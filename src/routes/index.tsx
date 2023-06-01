import { component$ } from "@builder.io/qwik";
import { Fa } from "🍐/includes/fa";
import {
	faPear,
	faGraduationCap,
	faMoneyBill1Wave,
	faSchool,
	faLandmark,
} from "@fortawesome/pro-duotone-svg-icons";

export default component$(() => (
	<>
		<section class="py-20 md:py-40 flex justify-center">
			<div class="relative">
				<Fa
					icon={faPear}
					opacity={[0.8, 0.9]}
					class="text-4xl xs:text-5xl md:text-7xl absolute  z-20 -top-8 xs:-top-10 md:-top-16 right-8 rotate-12 animate-wiggle"
				/>
				<Fa
					icon={faGraduationCap}
					opacity={[0.8, 0.9]}
					class="fa-primary-blue-500 text-4xl xs:text-5xl md:text-7xl absolute  z-20 left-6 bottom-8 xs:bottom-10 -rotate-12 animate-wiggle"
				/>
				<Fa
					icon={faSchool}
					opacity={[0.8, 0.9]}
					class="text-4xl xs:text-5xl md:text-7xl absolute  z-20 -rotate-12 animate-wiggle top-12 xs:top-14 right-8 md:top-16 md:right-10 fa-primary-blue-500"
				/>
				<Fa
					icon={faMoneyBill1Wave}
					opacity={[0.8, 0.9]}
					class="text-4xl xs:text-5xl md:text-7xl absolute  z-20 -bottom-12 md:-bottom-20 rotate-12 animate-wiggle left-20"
				/>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 200 200"
					class="absolute block -top-28 xs:-top-40 left-0 z-0 pointer-events-none animate-fade-in-up"
					role="none"
					aria-hidden="true"
				>
					<title>Blob</title>
					<defs>
						<linearGradient id="gradient" x1="0%" x2="100%">
							<stop offset="10%" class="stop-color-green-100" />
							<stop offset="90%" class="stop-color-blue-100" />
						</linearGradient>
					</defs>
					<path
						d="M32.3,-43.4C40.1,-38.8,43.4,-27,47.1,-15.4C50.8,-3.8,54.8,7.7,56.5,23.3C58.3,38.9,57.7,58.8,47.9,60.2C38.1,61.7,19,44.8,1.4,42.8C-16.2,40.9,-32.4,53.9,-39.9,51.7C-47.5,49.5,-46.4,32.1,-53.1,16.2C-59.8,0.2,-74.3,-14.3,-74.8,-27.9C-75.3,-41.5,-61.9,-54.1,-47.1,-56.4C-32.3,-58.8,-16.2,-50.8,-2,-48.1C12.3,-45.4,24.5,-48,32.3,-43.4Z"
						transform="translate(100 100)"
						fill="url(#gradient)"
					/>
				</svg>

				<h1 class="font-extrabold text-4xl xs:text-5xl md:text-6xl text-center relative z-30 inline-block animate-fade-in-up animate-delay-500">
					<span class="block">
						Help out your{" "}
						<span class="bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text animate-pulse">
							peers
						</span>
					</span>
					<span class="block">with their</span>
					<span class="block bg-gradient-to-br from-green-700 to-blue-500 dark:from-green-300 dark:to-blue-300 text-transparent bg-clip-text animate-pulse">
						student loans
					</span>
				</h1>
			</div>
		</section>

		<section class="py-20 md:py-40 flex flex-col justify-center">
			<h2>Student Loans are a huge problem</h2>
		</section>
	</>
));
