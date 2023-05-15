import { Title } from "@solidjs/meta";
import type { JSX } from "solid-js";

const About = (): JSX.Element => (
	<>
		<Title>Pear Loans: About Page</Title>

		<section class="mx-auto max-w-6xl px-5 pb-10 pt-20">
			<p>
				If you've come across this page, hello! 👋 Welcome to{" "}
				<abbr title="🍐 Loans, Peer Loans">🍐 Pear Loans.</abbr>
			</p>
			<p>
				This place allows you to list your student loans and / or donate
				directly to other students.
			</p>

			<br />

			<p>
				Unfortunately, this website is still under construction. 🚧 Much of the
				functionality mentioned on the home page is not present. Many things,
				like login, donation pages, and the ability to donate do not exist.
			</p>
			<p>
				This project has been created and is currently maintained by one person.
				I'm so excited to create this site, and I very much hope this helps
				reduce someone's financial burden.
			</p>

			<br />

			<p>
				I'd like to answer a couple questions I think you may have, but please
				feel free to{" "}
				<a class="italic underline" href="mailto:info@pear.loans">
					email me
				</a>{" "}
				📬 any questions or comments.
			</p>

			<br />

			<ul class="space-y-5">
				<li class="space-y-2">
					<h3 class="font-bold">✍️ How will I list my student loan?</h3>
					<p>
						I am hoping to use{" "}
						<a
							class="italic underline"
							target="_blank"
							href="https://plaid.com"
							rel="noreferrer"
						>
							Plaid
						</a>{" "}
						to allow students to list their loan. Plaid allows the website to
						see your student loan balance - if you've used apps like{" "}
						<a
							href="https://mint.intuit.com"
							class="italic underline"
							target="_blank"
							rel="noreferrer"
						>
							Mint
						</a>{" "}
						or{" "}
						<a
							href="https://www.rocketmoney.com/?rebrand=true"
							class="italic underline"
							target="_blank"
							rel="noreferrer"
						>
							Truebill
						</a>{" "}
						(now branded "Rocket Money"), they will use Plaid or a service like
						it to link your financial accounts.
					</p>
				</li>
				<li class="space-y-2">
					<h3 class="font-bold">🔐 Privacy concerns?</h3>
					<p>
						I wish to allow students to create their own donation profile, and
						there, they can give as much or as little information as they'd
						like. I would encourage them to not include anything they feel
						uncomfortable sharing. I only want to also store the minimal amount
						of information Plaid gives me to keep the loan balance linked to
						your account.
					</p>
					<p>
						This site will showcase your student loan balance once linked to
						your profile. Perhaps I could truncate or round this amount, or show
						a percentage left to pay, or nothing at all. This also could be
						configurable by the user.
					</p>
					<p>
						Generally, I want to only store the absolute minimum amount of
						information necessary to facilitate showcasing student loans and
						payments to them. I am no expert or lawyer on this matter and will
						need to consult one to make sure I'm doing things right.{" "}
						<span class="italic">I want to respect you and your privacy.</span>
					</p>
					<p>
						Please don't hesitate to email me any suggestions or comments on
						this matter as well. I am always open to feedback.
					</p>
				</li>
				<li class="space-y-2">
					<h3 class="font-bold">
						💵 How will donations be paid to the student loan?
					</h3>
					<p>
						Unfortunately this is one aspect I have not been able to solution
						yet. If I were to build it right now, students would be receiving
						payment directly from donors, which means it would be the student's
						responsibility to ensure donations are paid to the loan. Ideally,
						payments would pay down the loan directly, automatically.
					</p>
					<p>
						This means donors would have to trust that students would use
						donations for their student loans. I am sure that a large majority
						of people would do this in good faith, however, I am sure there
						could be some that would game the system.
					</p>
					<p>
						As far as I am aware, there is no financial product that exists that
						would allow me to apply donations to the loan directly. I am also
						unsure if this is legally possible for the website to pay on behalf
						of the student.
					</p>
					<p>
						In my opinion, it is acceptable, at least for the sake of getting
						this website out there, to allow direct payments to students where
						they would be responsible to apply donations to their loan balance.
						To some capacity, it would be possible to see if a student is acting
						in bad faith if the displayed loan balance does not decrease over
						time despite having received many donations.
					</p>
					<p>
						Nevertheless, I would like to reduce this friction / worry as much
						as possible, whenever I can.
					</p>
				</li>
			</ul>
		</section>
	</>
);

export default About;
