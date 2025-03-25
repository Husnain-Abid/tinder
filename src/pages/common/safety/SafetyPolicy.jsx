import { Link } from "react-router-dom"
import logo from "../../../asset/logo.png"

const SafetyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-sm">


      {/* Header */}
      <header className="max-w-6xl mx-auto  py-4 px-6 md:px-0 flex justify-between items-center">
        <Link to="/" className="flex items-center">

          <img src={logo} alt="logo" className="w-32" />


        </Link>
      </header>



      {/* Main Content */}
      <main className="py-8 px-6 md:px-12 border-t">

        <div className="max-w-6xl mx-auto px-4 py-8 md:px-8">

          {/* Our Commitment Section */}
          <div className="mb-12">


            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Safety And Policy Center</h1>


            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-600 mb-4">
              Making sure Tinder is a safe and positive place of use is very important. As the world's most popular app
              for meeting new people, we take pride in connecting millions of people every day. While a relatively small
              percentage of these matches have led to users being subject to criminal activity, we firmly believe any
              incident of misconduct or criminal behavior is one too many.
            </p>
            <p className="text-gray-600 mb-4">
              We are continuously improving new systems, processes, and technologies to enhance and reduce our safety
              efforts while fostering a respectful environment. We are committed to informing about our efforts to keep
              our community-based home. Whether you're in Santa Monica, São Paulo or Seoul - our goal remains the same: a
              safe and positive experience for users on our platform.
            </p>
          </div>

          {/* Our Safety Tools Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Our Safety Tools</h2>
            <p className="text-gray-600 mb-4">
              We utilize a network of industry-leading automated and manual moderation and review tools, systems and
              processes - and invest significant resources to prevent, combat and remove inappropriate behavior
              (impersonation, harassment and more) from our app.
            </p>
            <p className="text-gray-600 mb-4">
              These tools include automatic scans of profiles for red flag language and images, manual reviews of
              suspicious profiles, activity, and user-generated reports, as well as blocking email addresses, phone
              numbers and other identifiers associated with bad actors.
            </p>
            <p className="text-gray-600 mb-4">
              We have a zero-tolerance policy on harassment and encourage our community to report any instance of
              misconduct and/or anyone who violates our{" "}
              <Link to="/community-guidelines" className="text-tinder-red hover:underline">
                Community Guidelines
              </Link>{" "}
              or{" "}
              <Link to="/terms" className="text-tinder-red hover:underline">
                Terms of Use
              </Link>
              . In the event that we receive such a report, our dedicated community teams take appropriate measures, which
              may include removing the content, banning the user, or notifying the appropriate law enforcement resources.
            </p>
            <p className="text-gray-600 mb-4">
              We are constantly evaluating and refining our processes, and will always work with law enforcement, where
              possible, to protect our users.
            </p>
          </div>

          {/* Match Group Advisory Council Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Match Group Advisory Council</h2>
            <p className="text-gray-600 mb-4">
              As a part of{" "}
              <a href="https://mtch.com" className="text-tinder-red hover:underline">
                Match Group
              </a>
              , we work with external partners through the{" "}
              <a href="#" className="text-tinder-red hover:underline">
                Match Group Advisory Council
              </a>{" "}
              (MGAC), a group of leading experts and advocates involved in the study and prevention of sexual assault, sex
              trafficking and other related issues. The advisory team at Match Group meets with the MGAC to discuss and
              implement policies and procedures that can help make our platforms safer. Current members include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mb-4">
              <li>Scott Berkowitz, President, Rape Abuse Incest National Network (RAINN)</li>
              <li>Tracey Breeden, Founder, We Too Movement</li>
              <li>Tarana Burke, Founder, Me Too Movement</li>
              <li>John Clark, CEO, National Center for Missing & Exploited Children</li>
              <li>Julie Cordua, CEO, Thorn</li>
              <li>Deborah Eckstrom, COO, National Sexual Violence Resource Center</li>
              <li>Judy Fox-Cochran, Founder and Director, Violence Against Women & Children, Rutgers University</li>
            </ul>
          </div>

          {/* Response to Reports of Assault Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Response to Reports of Assault</h2>
            <p className="text-gray-600 mb-4">
              If user-safety is directly report instances of assault in-app or online, We strongly encourage any user who
              believes they have been a victim of a crime to report the incident to local law enforcement. We are
              committed to investigating reported crimes, assess and take appropriate action, and fully cooperate with law
              enforcement in any investigations.
            </p>
            <p className="text-gray-600 mb-4">
              When a user reports an assault to Tinder, we attempt to identify the alleged perpetrator and block the
              associated account. The incident is then reviewed by a team that operates under the direction of our legal
              counsel. If we are able to identify a user of any of our other dating platforms, if any are found, they are
              blocked as well.
            </p>
          </div>

          {/* User Education Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">User Education</h2>
            <p className="text-gray-600 mb-4">
              We offer safety tips, both online and via the app, to educate and empower users to make smart and safe
              choices while interacting on Tinder.
            </p>
            <p className="text-gray-600 mb-4">
              View our{" "}
              <Link to="/safety-tips" className="text-tinder-red hover:underline">
                Tips for Staying Safe here
              </Link>
              .
            </p>
          </div>

          {/* Government Relations and Legislative Work Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Government Relations and Legislative Work</h2>
            <p className="text-gray-600 mb-4">
              We understand that our industry needs to set high standards for the entire industry, which is why we support
              Match Group's efforts to work closely with legislators and regulators across the world to define and pass
              new safety-focused laws that can help make both our users and those on other tech platforms safe. Our team
              is actively working with several States to promote legislation to help combat catfishing. For more
              information, please contact us.
            </p>
            <p className="text-gray-600 mb-4">
              We welcome the opportunity to work with governments around the world to make the Internet a safer place for
              everyone.
            </p>
          </div>

          {/* Fraud Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Fraud</h2>
            <p className="text-gray-600 mb-4">
              We know the issue of fraud very seriously at Tinder. We have a zero-tolerance policy on predatory behavior
              of any kind. We have a dedicated fraud team that utilizes a network of industry-leading technology that
              scans for fraud and reviews each and every member profile for red flag language, and conducts manual reviews
              of suspicious profiles, activity, and user-generated reports. Ultimately, no one, whether they met on Tinder
              or any Internet service, should send money to someone they haven't met in person. In addition, users should
              never share personal or financial information with someone online, particularly if they request it.
            </p>
            <p className="text-gray-600 mb-4">
              Financial information are our self-monitoring tools. Those bad actors get pretty smart in adapting almost
              every tactic in its books and help protect the next victim.
            </p>
          </div>

          {/* Data Privacy and Platform Security Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Data Privacy and Platform Security</h2>
            <p className="text-gray-600 mb-4">
              Our users' privacy is a top priority at Tinder, and we work diligently to ensure that we go above and beyond
              applicable privacy laws and industry standards. We have implemented multiple layers of security to protect
              our users' personal information, including their photos, messages, and more. We also employ encryption to
              protect our users' communications and other data. When it comes to Tinder, users' data, and information, we
              are always looking for ways to enhance their data privacy.
            </p>
            <p className="text-gray-600 mb-4">
              Unlike other social apps, our business model is focused on providing users with premium features, including
              in-app upgrades and subscriptions to enhance their experience. We do not sell user data to third parties or
              advertisers advertising to monetize or grow our business. In fact, in 2018, less than that percent of all
              revenue was generated through advertising. Your data is yours. As such, users can request a copy of their{" "}
              <a href="#" className="text-tinder-red hover:underline">
                data page
              </a>{" "}
              at any time. The most up-to-date information on our data practices is always available in the general public
              through our{" "}
              <a href="#" className="text-tinder-red hover:underline">
                Privacy Policy
              </a>
              , which can be also found in-app.
            </p>
            <p className="text-gray-600 mb-4">
              Additionally, we are constantly improving our defenses to be battle against those with malicious intent.
              However, we do not discuss any specific security tools we use or enhancements we may implement to local
              protect our users and avoid tipping off any would-be offenders.
            </p>
          </div>

          {/* Additional Policies and Information Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Additional Policies and Information</h2>
            <p className="text-gray-600 mb-4">
              Our fundamental goal is to introduce our community of users to new people. And while this is a lot of fun,
              it's important to remember that there are{" "}
              <Link to="/community-guidelines" className="text-tinder-red hover:underline">
                Community Guidelines
              </Link>{" "}
              that our users must abide by to help make Tinder the best app for meeting new people.
            </p>
            <p className="text-gray-600 mb-4">
              We encourage our users to report any instance of bad behavior on or off our platform. Reporting is one our
              responsibility (which is straightforward and easy to do). On any given profile, users can tap the 3 dots
              icon and select "Report" (don't use can report another user by{" "}
              <a href="#" className="text-tinder-red hover:underline">
                submitting a help request online
              </a>
              ).
            </p>
            <p className="text-gray-600 mb-4">
              Below are more details about some of our policies that we have implemented to keep Tinder more safe.
            </p>
          </div>

          {/* Dedication to Inclusion Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Dedication to Inclusion</h2>
            <p className="text-gray-600 mb-4">
              No matter your gender identity, sexual orientation, ethnicity, or background, Tinder welcomes you. We strive
              to make Tinder the most inclusive platform for meeting new people and have worked closely with organizations
              around the world to constantly improve our practices. Today, we offer users the ability to select from more
              than 50 gender options and 9 sexual orientations.
            </p>
          </div>

          {/* Harassment Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Harassment</h2>
            <p className="text-gray-600 mb-4">
              We have a zero-tolerance policy for harassment on our platform. We encourage all users to report any
              unacceptable behavior so that our community team can investigate and take appropriate action.
            </p>
          </div>

          {/* Underage Usage Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Underage Usage</h2>
            <p className="text-gray-600 mb-4">
              Tinder is for users 18+, and we work hard to vigilantly maintain an adults-only community. We utilize a
              network of industry-leading automated and manual moderation and review tools, systems and processes - and
              invest significant resources - to prevent and remove minors from our app.
            </p>
            <p className="text-gray-600 mb-4">
              These tools may include automatic scans of profiles for red flag language and images, manual reviews of
              suspicious profiles, activity, and user-generated reports, as well as blocking email addresses, phone
              numbers and other identifiers associated with underage users trying to circumvent our age gate. If we find
              that someone has lied about their age in order to interact on Tinder, we ban their account. Period.
            </p>
            <p className="text-gray-600 mb-4">We do not want minors on Tinder. Period.</p>
          </div>

          {/* Solicitation/Prostitution Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Solicitation/Prostitution</h2>
            <p className="text-gray-600 mb-4">
              Solicitation of any kind - whether attempting to buy or sell - is against our{" "}
              <a href="#" className="text-tinder-red hover:underline">
                Terms of Use
              </a>
              . If you encounter a profile engaging our terms, we encourage them to report via the self-reporting tool
              featured on all Tinder profiles or online. Making such a report allows our dedicated community team to
              quickly investigate profiles that may include removing the profile or banning the user.
            </p>
          </div>

          {/* Illegal Substances Section */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Illegal Substances</h2>
            <p className="text-gray-600 mb-4">
              Profiles on Tinder cannot promoting illegal substances under our{" "}
              <a href="#" className="text-tinder-red hover:underline">
                Terms of Use
              </a>{" "}
              and we have a system in place to remove these profiles from the app. If you encounter a profile promoting
              illegal substances, we encourage users to report it is within the app.
            </p>
          </div>

          {/* Resources for Support, Advice, or Assistance Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Resources for Support, Advice, or Assistance</h2>
            <p className="text-gray-600 mb-4">
              In case of emergency, call 911 (U.S. or Canada) or your local law enforcement agency.
            </p>

            <div className="space-y-3">
              <p className="font-semibold">Rape, Abuse and Incest National Network (RAINN) Hotline</p>
              <p className="text-gray-600">
                1-800-656-HOPE (4673) |{" "}
                <a href="https://www.rainn.org" className="text-tinder-red hover:underline">
                  www.rainn.org
                </a>
              </p>

              <p className="font-semibold">Planned Parenthood</p>
              <p className="text-gray-600">
                1-800-230-PLAN |{" "}
                <a href="https://www.plannedparenthood.org" className="text-tinder-red hover:underline">
                  www.plannedparenthood.org
                </a>
              </p>

              <p className="font-semibold">National Domestic Violence Hotline</p>
              <p className="text-gray-600">
                1-800-799-SAFE (7233) or 1-800-787-3224 |{" "}
                <a href="https://www.thehotline.org" className="text-tinder-red hover:underline">
                  www.thehotline.org
                </a>
              </p>

              <p className="font-semibold">National Human Trafficking Hotline</p>
              <p className="text-gray-600">
                1-888-373-7888 or text 233733 |{" "}
                <a href="https://www.humantraffickinghotline.org" className="text-tinder-red hover:underline">
                  www.humantraffickinghotline.org
                </a>
              </p>

              <p className="font-semibold">National Sexual Violence Resource Center</p>
              <p className="text-gray-600">
                1-877-739-3895 |{" "}
                <a href="https://www.nsvrc.org" className="text-tinder-red hover:underline">
                  www.nsvrc.org
                </a>
              </p>

              <p className="font-semibold">National Center for Missing & Exploited Children</p>
              <p className="text-gray-600">
                1-800-THE-LOST (843-5678) |{" "}
                <a href="https://www.missingkids.com" className="text-tinder-red hover:underline">
                  www.missingkids.com
                </a>
              </p>

              <p className="font-semibold">Cyber Civil Rights Initiative</p>
              <p className="text-gray-600">
                1-844-878-2274 |{" "}
                <a href="https://www.cybercivilrights.org" className="text-tinder-red hover:underline">
                  www.cybercivilrights.org
                </a>
              </p>

              <p className="font-semibold">FBI Internet Crime Complaint Center</p>
              <p className="text-gray-600">
                <a href="https://www.ic3.gov" className="text-tinder-red hover:underline">
                  www.ic3.gov
                </a>
              </p>

              <p className="text-gray-600 mt-4">
                If you are outside the U.S., view the{" "}
                <a href="#" className="text-tinder-red hover:underline">
                  list of resources from Match Group
                </a>{" "}
                across many of the countries in which we operate.
              </p>
            </div>
          </div>





        </div>

      </main>


    
      {/* Footer */}
      <footer className="bg-white pt-6 pb-12 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 md:px-0">
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

export default SafetyPolicy

