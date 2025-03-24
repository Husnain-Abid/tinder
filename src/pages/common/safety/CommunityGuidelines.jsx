import { Link } from "react-router-dom"
import logo from "../../../asset/logo.png"

const CommunityGuidelines = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-40" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8 px-6 md:px-12 text-sm">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Community Guidelines</h1>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-600 mb-4">Welcome to Tinder!</p>
            <p className="text-gray-600 mb-4">
              Tinder is where meaningful connections can happen. It Starts With a Swipe™. Sometimes you click. Sometimes
              you don't. And sometimes the talking leads to something. Possibility is exhilarating. Possibilities are
              endless. All (adults) are welcome to come explore.
            </p>
            <p className="text-gray-600 mb-4">
              We want Tinder to be a fun, safe and inclusive space where anyone can be themselves while getting to know
              others.{" "}
              <span className="font-semibold">
                That's what these Community Guidelines are for—to set expectations for everyone's behavior, both on and
                off of the app.
              </span>{" "}
              So read on, and following these guidelines can have real consequences from a nudge to a ban.
            </p>
          </div>

          {/* Tinder's Rules */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Tinder's Rules:</h2>

            <ol className="list-decimal pl-6 space-y-6">
              <li>
                <p className="font-semibold">Consider boundaries.</p>
                <p className="text-gray-600">
                  Comfort levels vary person to person. That's why we don't allow nudity, sexual content, sexual
                  desires, or looking for sex on your public profile. If you are in a private conversation, these are
                  okay if everyone is okay with it. Consent matters.
                </p>
              </li>

              <li>
                <p className="font-semibold">Share cautiously and thoughtfully.</p>
                <p className="text-gray-600">
                  Don't publicly broadcast your personal information or ways for people to connect with you (no public
                  displays of things like phone numbers, emails, or social handles). Sharing out your bank account
                  numbers or email password is always a bad idea. Don't ask others to send you their personal details
                  either. Be cautious when sending money to other people. Or maybe don't at all.
                </p>
              </li>

              <li>
                <p className="font-semibold">Steer clear of violent content.</p>
                <p className="text-gray-600">
                  We promote positivity and won't tolerate any sort of violent content that contains gore, death, images
                  or descriptions of violent acts against humans or animals, use of weapons, and anything advocating or
                  glorifying self-harm.
                </p>
                <p className="text-gray-600 mt-2">
                  If we believe there's a risk of imminent harm, we may take steps to assist, like reaching out directly
                  with crisis resources.
                </p>
              </li>

              <li>
                <p className="font-semibold">Make personal connections, not biz ones.</p>
                <p className="text-gray-600">
                  Don't advertise, promote, share your social handles to gain followers, sell stuff, fundraise, or
                  campaign. This also means Tinder isn't the place for any sort of sex work, escort services, or
                  compensated relationships. So, no—don't use Tinder to find your sugarmamma.
                </p>
              </li>

              <li>
                <p className="font-semibold">Just be you.</p>
                <p className="text-gray-600">
                  People want to meet the real you. Not your fake persona. Don't create a fake account or pretend to be
                  someone you're not, even if it's just for fun.
                </p>
              </li>

              <li>
                <p className="font-semibold">Communicate Respectfully.</p>
                <p className="text-gray-600">
                  Talking to new people can be tricky, especially when you're interacting with humans from all walks of
                  life. Respect goes a long way.
                </p>
                <p className="text-gray-600 mt-2">
                  If the convo goes unexpectedly awry and you find yourself getting upset or feeling angry—pause and
                  reflect before you react. Harassment, threats, bullying, intimidation, doxing, sexualism, deadnaming,
                  or anything intentionally done to cause harm is not allowed.
                </p>
                <p className="text-gray-600 mt-2">
                  Tinder is not a place for hate. We will never stand behind racism, bigotry, hatred, or violence based
                  on who someone is, how they identify or what they look like. This includes (but not limited to)
                  someone's race, ethnicity, religious affiliation, disability, physically, gender, gender identity,
                  age, national origin, or sexual orientation. If you see someone who doesn't meet your personal
                  criteria, don't tear them or unmatch and move on. Don't report them unless you think they've violated
                  our policies.
                </p>
              </li>

              <li>
                <p className="font-semibold">Lead with kindness, not harm.</p>
                <p className="text-gray-600">
                  Any acts or behavior that suggests, intends, or causes harm to another member - either on or offline,
                  physically or digitally - will be taken very seriously. This includes anything setting for or inciting
                  harm.
                </p>
                <p className="text-gray-600 mt-2">
                  If you've been hurt by someone on Tinder: first, please take care of yourself; and second, take some
                  time to decide what you need to heal, whether that be accountability measures, resources, support, or
                  all of the above. If this includes reporting the harm to us, please reach out. We're here for you.
                </p>
              </li>

              <li>
                <p className="font-semibold">Adults only.</p>
                <p className="text-gray-600">
                  You must be 18 years of age or older to use Tinder. This also means we don't allow photos of
                  unaccompanied or undressed minors, including photos of your younger self—no matter how adorable you
                  were back then.
                </p>
              </li>

              <li>
                <p className="font-semibold">Abide by the law.</p>
                <p className="text-gray-600">
                  No illegal content or activities are allowed, ever. This means you can't use Tinder to buy or sell
                  drugs or counterfeit goods, or ask for assistance to help you break the law. We definitely won't
                  tolerate anyone using Tinder to advocate or participate in any sort of harm involving minors or human
                  trafficking.
                </p>
              </li>

              <li>
                <p className="font-semibold">One account per person.</p>
                <p className="text-gray-600">
                  Each account can only have one owner. For logistic and privacy reasons, we can't support multiple
                  people accessing the same account, each individual needs to have their own.
                </p>
              </li>

              <li>
                <p className="font-semibold">This is your space, post your own content.</p>
                <p className="text-gray-600">
                  Don't post images or private messages from other people unless you've been given consent to do so.
                  Don't post work that's copyrighted or trademarked by others.
                </p>
              </li>

              <li>
                <p className="font-semibold">Be an honest member of the Tinder community.</p>
                <p className="text-gray-600">
                  Don't abuse Tinder. Don't use Tinder to spread false or misleading info. Don't spam harmful links or
                  unsolicited content. Don't create mass accounts. Don't use Tinder to manipulate, con, or get people to
                  send you money or anything else. Don't submit misleading reports. Don't use third-party apps to unlock
                  features or game the system.
                </p>
              </li>

              <li>
                <p className="font-semibold">Stick around to stay active.</p>
                <p className="text-gray-600">
                  If you don't log into your Tinder account in two years, we'll assume it's zZzZzZ and may delete it for
                  inactivity. So if you want to be seen in the app, just log in from time to time.
                </p>
              </li>
            </ol>
          </div>

          {/* Reporting Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Reporting</h2>
            <p className="text-gray-600 mb-4">
              As a member of the Tinder community, we encourage you to speak up and speak out. If someone is causing you
              harm, making you feel uncomfortable, or is violating our Community Guidelines—report it. Your report is
              always confidential. By reporting, you can help us stop harmful behavior.
            </p>
          </div>

          {/* Impact Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Impact</h2>
            <p className="text-gray-600 mb-4">
              We take our Community Guidelines and the impact they have on our community seriously. We'll do everything
              we can to make sure people follow them. We have a warning system in place, but if violations continue or
              if the violation is severe, we will respond accordingly.
            </p>
            <p className="text-gray-600 mb-4">
              We reserve the right to investigate and/or terminate accounts without a refund of any purchases if we find
              you have misused the Service or behaved in a way Tinder deems inappropriate, unlawful, or in violation of
              our Community Guidelines or{" "}
              <Link to="/terms" className="text-tinder-red hover:underline">
                Terms of Use
              </Link>
              , including actions or communications that occur off the Service but involve others you meet through the
              Service.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-6 pb-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Security
                  </a>
                </li>
              </ul>
            </div>

            {/* Community Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Community</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Tech Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Press
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Consumer Health Data Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Safety and Policy Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Safety Tips
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Community Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
                    Intellectual Property
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default CommunityGuidelines

