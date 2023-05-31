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
					class="text-4xl xs:text-5xl md:text-7xl absolute -top-8 xs:-top-10 md:-top-16 right-8 rotate-12 animate-wiggle"
				/>
				<Fa
					icon={faGraduationCap}
					opacity={[0.8, 0.9]}
					class="fa-primary-blue-500 text-4xl xs:text-5xl md:text-7xl absolute left-6 bottom-8 xs:bottom-10 -rotate-12 animate-wiggle"
				/>
				<Fa
					icon={faSchool}
					opacity={[0.8, 0.9]}
					class="text-4xl xs:text-5xl md:text-7xl absolute -rotate-12 animate-wiggle top-12 xs:top-14 right-8 md:top-16 md:right-10 fa-primary-blue-500"
				/>
				<Fa
					icon={faMoneyBill1Wave}
					opacity={[0.8, 0.9]}
					class="text-4xl xs:text-5xl md:text-7xl absolute -bottom-12 md:-bottom-20 rotate-12 animate-wiggle left-20"
				/>

				<h1 class="font-extrabold text-4xl xs:text-5xl md:text-6xl text-center relative inline-block animate-fade-in-up">
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
