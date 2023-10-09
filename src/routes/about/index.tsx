import { component$ } from "@builder.io/qwik";

export default component$(() => {
	return (
		<div class="mx-3 md:mx-0 space-y-12">
			<section class="space-y-2">
				<p>
					If you've come across this page, hello! 👋 Welcome to{" "}
					<abbr title="🍐 Loans, Peer Loans">🍐 Pear Loans.</abbr>
				</p>
				<p>
					This place allows you to list your student loans and / or donate directly to other
					students.
				</p>

				<p>
					Unfortunately, this website is still under construction. 🚧 Much of the functionality
					mentioned on the home page is not present. Many things, like login, donation pages, and
					the ability to donate do not exist.
				</p>
				<p>
					This project has been created and is currently maintained by one person. I'm so excited to
					create this site, and I very much hope this helps reduce someone's financial burden.
				</p>

				<p>
					I'd like to answer a couple questions I think you may have, but please feel free to{" "}
					<a class="italic underline" href="mailto:info@pear.loans">
						email me
					</a>{" "}
					📬 any questions or comments.
				</p>
			</section>

			<ul class="space-y-12">
				<li class="space-y-2">
					<h3 class="font-bold">🤔 What is this site?</h3>
					<p>
						This site will let you list your student loan balance alongside a profile you create.
						People who wish to donate can then find your profile and donate directly to you!
					</p>
					<p>
						I intend to give donors tools to find students they want to donate to, such as filtering
						by school, major, or other criteria. Also, donors can choose to donate to random
						student(s).
					</p>
					<p>
						The hope is that this site will give students another means to pay down their student
						loans, if not at least reduce the burden of their monthly payment.
					</p>
				</li>

				<li class="space-y-2">
					<h3 class="font-bold">✍️ How will I list my student loan?</h3>
					<p>
						I am hoping to use{" "}
						<a class="italic underline" target="_blank" href="https://plaid.com" rel="noreferrer">
							Plaid
						</a>{" "}
						to allow students to list their loan. Plaid allows the website to see your student loan
						balance - if you've used apps like{" "}
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
						(now branded "Rocket Money"), they will use Plaid or a service like it to link your
						financial accounts.
					</p>
				</li>
				<li class="space-y-2">
					<h3 class="font-bold">🔐 Privacy concerns?</h3>
					<p>
						I wish to allow students to create their own donation profile, and there, they can give
						as much or as little information as they'd like. I would encourage them to not include
						anything they feel uncomfortable sharing. I only want to also store the minimal amount
						of information Plaid gives me to keep the loan balance linked to your account.
					</p>
					<p>
						This site will showcase your student loan balance once linked to your profile. Perhaps I
						could truncate or round this amount, or show a percentage left to pay, or nothing at
						all. This also could be configurable by the user.
					</p>
					<p>
						Generally, I want to only store the absolute minimum amount of information necessary to
						facilitate showcasing student loans and payments to them. I am no expert or lawyer on
						this matter and will need to consult one to make sure I'm doing things right.{" "}
						<span class="italic">I want to respect you and your privacy.</span>
					</p>
					<p>
						Please don't hesitate to email me any suggestions or comments on this matter as well. I
						am always open to feedback.
					</p>
				</li>
				<li class="space-y-2">
					<h3 class="font-bold">💵 How will donations be paid to the student loan?</h3>
					<p>
						It is up to the recepient to use their donations to pay down their student loan. I would
						always recommend they use this cash to pay down high interest debts, such as their
						student loan, as quickly as possible.
					</p>
					<p>
						At present, I am unaware of any mechanism available to the site that would let donations
						apply directly to the loan. If you are aware of or able to provide such a service,{" "}
						<a class="italic underline" href="mailto:info@pear.loans">
							let us know.
						</a>
					</p>
					<p>
						Nonetheless, I believe any money donated will help those with student loans reduce their
						immediate financial burdens and ease the stress.
					</p>
				</li>
			</ul>
		</div>
	);
});
