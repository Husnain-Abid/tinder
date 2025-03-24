import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../../asset/logo.png"


export default function SafetyTips() {
  return (
    <div className="min-h-screen bg-white ">
      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-40" />
          </Link>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8 md:px-8">

        {/* Introduction */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Dating Safety Tips   </h1>
          <p className="text-gray-600 mb-4">
            Meeting new people is exciting, but you should always be cautious when interacting with someone you don’t know. Use your best judgment and put your safety first, whether you are exchanging initial messages or meeting in person. While you can’t control the actions of others, there are things you can do to help you stay safe during your Tinder experience.</p>
        </div>



        {/* Online Safety Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Online Safety</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-semibold text-gray-800">Never Send Money or Share Financial Information</h3>
              <p className="text-gray-600 mt-1">
                Never send money, especially over wire transfer, even if the person claims to be in an emergency. Wiring
                money is like sending cash — it's nearly impossible to reverse the transaction or trace where the money
                went. Never share information that could be used to access your financial accounts. If another user asks
                you for money, report it to us immediately.
              </p>
              <p className="text-gray-600 mt-2">
                For tips on avoiding romance scams, check out some of the resources from the U.S Federal Trade
                Commission on{" "}
                <a href="https://www.ftc.gov/online-security" className="text-tinder-red hover:underline">
                  the FTC website
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Protect Your Personal Information</h3>
              <p className="text-gray-600 mt-1">
                Never share personal information, such as your social security number, home or work address, or details
                about your daily routine (e.g., that you go to a certain gym every Monday) with people you don't know.
                If you are a parent, limit the information that you share about your children on your profile and in
                early communications. Avoid sharing details such as your children's names, where they go to school, or
                their ages or genders.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Stay in the Platform</h3>
              <p className="text-gray-600 mt-1">
                Keep conversations on the Tinder platform while you're getting to know someone. Because exchanges on
                Tinder are subject to our{" "}
                <a href="#" className="text-tinder-red hover:underline">
                  Safe Message Filters
                </a>
                , users with bad intentions often try to move the conversation to text, messaging apps, email, or phone
                right away.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Be Wary of Long Distance and Overseas Relationships</h3>
              <p className="text-gray-600 mt-1">
                Watch out for scammers who claim to be from your country but stuck somewhere else, especially if they
                ask for financial help to return home. Be wary of anyone who will not meet in person or talk on a video
                call—they may not be who they say they are. If someone is avoiding your questions or pushing for a
                serious relationship without meeting or getting to know you first – that's a red flag.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Report All Suspicious and Offensive Behavior</h3>
              <p className="text-gray-600 mt-1">
                You know when someone's crossed the line and when they do, we want to know about it. Block and report
                anyone that violates our terms. Here are some examples of violations:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-600 space-y-1">
                <li>Requests for money or donations</li>
                <li>Underage users</li>
                <li>Harassment, threats, and offensive messages</li>
                <li>Inappropriate or harmful behavior during or after meeting in person</li>
                <li>Fraudulent profiles</li>
                <li>
                  Spam or solicitation including links to commercial websites or attempts to sell products or services
                </li>
              </ul>
              <p className="text-gray-600 mt-2">
                You can{" "}
                <a href="#" className="text-tinder-red hover:underline">
                  report any concerns
                </a>{" "}
                about suspicious behavior from any profile page or messaging window. For more information, check out our{" "}
                <a href="/community-guidelines" className="text-tinder-red hover:underline">
                  Community Guidelines
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Protect Your Account</h3>
              <p className="text-gray-600 mt-1">
                Be sure to pick a strong password, and always be careful when logging into your account from a public or
                shared computer. Tinder will never send you an email asking for your username and password information —
                if you receive an email asking for account information, report it immediately.
              </p>
            </li>
          </ul>
        </div>

        {/* Meeting in Person Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Meeting in Person</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-semibold text-gray-800">Don't Be in A Rush</h3>
              <p className="text-gray-600 mt-1">
                Take your time and get to know the other person before agreeing to meet or chat off Tinder. Don't be
                afraid to ask questions to screen for any red flags or personal dealbreakers. A phone or video call can
                be a useful screening tool before meeting.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Meet in Public and Stay in Public</h3>
              <p className="text-gray-600 mt-1">
                Meet for the first few times in a populated, public place — never at your home, your date's home, or any
                other private location. If your date pressures you to go to a private location, end the date.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Tell Friends and Family About Your Plans</h3>
              <p className="text-gray-600 mt-1">
                Tell a friend or family member of your plans, including when and where you're going. Have your cell
                phone charged and with you at all times.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Be in Control of Your Transportation</h3>
              <p className="text-gray-600 mt-1">
                We want you to be in control of how you get to and from your date so that you can leave whenever you
                want. If you're driving yourself, it's a good idea to have a backup plan such as a ride-share app or a
                friend to pick you up.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Know Your Limits</h3>
              <p className="text-gray-600 mt-1">
                Be aware of the effects of drugs or alcohol on you specifically — they can impair your judgment and your
                alertness. If your date tries to pressure you to use drugs or drink more than you're comfortable with,
                hold your ground and end the date.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Don't Leave Drinks or Personal Items Unattended</h3>
              <p className="text-gray-600 mt-1">
                Know where your drink comes from and know where it is at all times — only accept drinks poured or served
                directly from the bartender or server. Many substances that are slipped into drinks to facilitate sexual
                assault are odorless, colorless, and tasteless. Also, keep your phone, purse, wallet, and anything
                containing personal information on you at all times.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">If You Feel Uncomfortable, Leave</h3>
              <p className="text-gray-600 mt-1">
                It's okay to end the date early if you're feeling uncomfortable. In fact, it's encouraged. And if your
                instincts are telling you something is off or you feel unsafe, ask the bartender or server for help.
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">LGBTQ+ Travel</h3>
              <p className="text-gray-600 mt-1">Be careful while traveling.</p>
              <p className="text-gray-600 mt-2">
                We recognize and believe in the importance of being inclusive of all gender identities and sexual
                orientations, but the reality is this: nowhere in the world is without potential risk, and some
                countries have specific laws that target LGBTQ+ people.
              </p>
              <p className="text-gray-600 mt-2">
                Check out the laws around you when you travel to a new place and research what types of legal
                protection, if any, are available to you based on sexual orientation. In the event that you're in unsafe
                territory, we suggest logging off "Show me on Tinder" which you can find under the settings page.
              </p>
              <p className="text-gray-600 mt-2">
                If you have added a sexual orientation to your profile and choose to be shown on Tinder, we will hide
                your sexual orientation from your profile until you leave that area.
              </p>
              <p className="text-gray-600 mt-2">
                It's important to exercise extra caution if you choose to connect with new people in these countries -
                as some law enforcement have been known to use dating apps as tools for potential entrapment. Some
                countries have also recently introduced laws that criminalize communications between individuals on
                same-sex dating applications or websites and even aggravate penalties if that communication leads to
                sexual encounters.
              </p>
              <p className="text-gray-600 mt-2">
                Visit{" "}
                <a href="https://ilga.org" className="text-tinder-red hover:underline">
                  ILGA World
                </a>{" "}
                to see the latest sexual orientation laws by country, and consider donating to support their research.
              </p>
              <p className="text-gray-500 text-sm mt-2">Source: ILGA World, Updated March 2019</p>
            </li>
          </ul>
        </div>

        {/* Sexual Health & Consent Section */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Sexual Health & Consent</h2>
          <ul className="space-y-6">
            <li>
              <h3 className="font-semibold text-gray-800">Protect Yourself</h3>
              <p className="text-gray-600 mt-1">
                When used correctly and consistently, condoms can significantly reduce the risk of contracting and
                passing on STIs (like HIV). But, be aware of STIs like herpes or HPV that can be passed on through
                skin-to-skin contact. The risk of contracting some STIs can be reduced through{" "}
                <a href="#" className="text-tinder-red hover:underline">
                  vaccination
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Know Your Status</h3>
              <p className="text-gray-600 mt-1">
                Not all STIs show symptoms, and you don't want to be in the dark about your status. Stay on top of your
                health and prevent the spread of STIs by getting tested regularly. Here's where you can{" "}
                <a href="#" className="text-tinder-red hover:underline">
                  find a clinic near you (US only)
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Talk About It</h3>
              <p className="text-gray-600 mt-1">
                Communication is everything. Before you get physically intimate with a partner, talk about sexual health
                and STI testing. And be aware — in some places, it's actually a crime to knowingly pass on an STI. Need
                help starting the conversation?{" "}
                <a href="#" className="text-tinder-red hover:underline">
                  Here are some tips
                </a>
                .
              </p>
            </li>

            <li>
              <h3 className="font-semibold text-gray-800">Consent</h3>
              <p className="text-gray-600 mt-1">
                All sexual activity must start with consent and should include ongoing check-ins with your partner.
                Verbal communication can help you and your partner ensure that you respect each other's boundaries.
                Consent can be withdrawn at any time, and sex is never owed to anyone. Do not proceed if your partner
                seems uncomfortable or unsure, or if your partner is unable to consent due to the effects of drugs or
                alcohol. Read more about{" "}
                <a href="#" className="text-tinder-red hover:underline">
                  consent from RAINN
                </a>
                .
              </p>
            </li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Resources for Help, Support, or Advice</h2>
          <p className="text-gray-600 mb-4">
            Remember — even if you follow these tips, no method of risk reduction is perfect. If you have a negative
            experience, please know that it's not your fault and help is available. Report any incidents to Tinder and
            consider reaching out to one of the resources below.{" "}
            <span className="font-semibold">
              If you feel you are in immediate danger or need emergency assistance, call 911 (U.S. or Canada) or your
              local law enforcement agency.
            </span>
          </p>

          <div className="space-y-3">
            <p className="font-semibold">
              RAINN's National Sexual Assault Hotline:{" "}
              <a href="tel:8006564673" className="text-tinder-red hover:underline">
                800-656-HOPE (4673)
              </a>{" "}
              |{" "}
              <a href="https://www.rainn.org" className="text-tinder-red hover:underline">
                rainn.org
              </a>{" "}
              |{" "}
              <a href="https://hotline.rainn.org" className="text-tinder-red hover:underline">
                online.rainn.org
              </a>
            </p>

            <p className="font-semibold">
              Planned Parenthood:{" "}
              <a href="tel:8002307526" className="text-tinder-red hover:underline">
                800-230-7526
              </a>{" "}
              |{" "}
              <a href="https://www.plannedparenthood.org" className="text-tinder-red hover:underline">
                www.plannedparenthood.org
              </a>
            </p>

            <p className="font-semibold">
              National Domestic Violence Hotline:{" "}
              <a href="tel:8007997233" className="text-tinder-red hover:underline">
                800-799-SAFE (7233)
              </a>{" "}
              or{" "}
              <a href="tel:18007873224" className="text-tinder-red hover:underline">
                1-800-787-3224
              </a>{" "}
              |{" "}
              <a href="https://www.thehotline.org" className="text-tinder-red hover:underline">
                www.thehotline.org
              </a>
            </p>

            <p className="font-semibold">
              National Human Trafficking Hotline:{" "}
              <a href="tel:8883737888" className="text-tinder-red hover:underline">
                1-888-373-7888
              </a>{" "}
              or text 233733 |{" "}
              <a href="https://www.humantraffickinghotline.org" className="text-tinder-red hover:underline">
                www.humantraffickinghotline.org
              </a>
            </p>

            <p className="font-semibold">
              National Sexual Violence Resource Center:{" "}
              <a href="tel:8777393895" className="text-tinder-red hover:underline">
                877-739-3895
              </a>{" "}
              |{" "}
              <a href="https://www.nsvrc.org" className="text-tinder-red hover:underline">
                www.nsvrc.org
              </a>
            </p>

            <p className="font-semibold">
              National Center for Missing & Exploited Children:{" "}
              <a href="tel:8008435678" className="text-tinder-red hover:underline">
                800-THE-LOST (843-5678)
              </a>{" "}
              |{" "}
              <a href="https://www.missingkids.com" className="text-tinder-red hover:underline">
                www.missingkids.com
              </a>
            </p>

            <p className="font-semibold">
              Cyber Civil Rights Initiative:{" "}
              <a href="tel:8446782274" className="text-tinder-red hover:underline">
                844-878-2274
              </a>{" "}
              |{" "}
              <a href="https://www.cybercivilrights.org" className="text-tinder-red hover:underline">
                www.cybercivilrights.org
              </a>
            </p>

            <p className="font-semibold">
              VictimConnect - Crime Victims Resource Center:{" "}
              <a href="tel:8554842846" className="text-tinder-red hover:underline">
                855-4-VICTIM (855-484-2846)
              </a>{" "}
              |{" "}
              <a href="https://www.victimconnect.org" className="text-tinder-red hover:underline">
                www.victimconnect.org
              </a>
            </p>

            <p className="font-semibold">
              FBI Internet Crime Complaint Center:{" "}
              <a href="https://www.ic3.gov" className="text-tinder-red hover:underline">
                www.ic3.gov
              </a>
            </p>

            <p className="font-semibold">
              LGBT National Help Center:{" "}
              <a href="tel:8888434564" className="text-tinder-red hover:underline">
                888-843-4564
              </a>{" "}
              |{" "}
              <a href="https://www.glbthotline.org" className="text-tinder-red hover:underline">
                www.glbthotline.org
              </a>
            </p>

            <p className="font-semibold">
              Trans Lifeline:{" "}
              <a href="tel:8775658860" className="text-tinder-red hover:underline">
                877-565-8860 (US)
              </a>{" "}
              or{" "}
              <a href="tel:8773306366" className="text-tinder-red hover:underline">
                1-877-330-6366 (CA)
              </a>{" "}
              |{" "}
              <a href="https://www.translifeline.org" className="text-tinder-red hover:underline">
                www.translifeline.org
              </a>
            </p>
          </div>

          <p className="text-gray-600 mt-6">If you are outside the UK:</p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>
              <a href="#" className="text-tinder-red hover:underline">
                Additional resources from Metro Group
              </a>{" "}
              in many of the countries where we operate.
            </li>
            <li>
              <a href="#" className="text-tinder-red hover:underline">
                Information regarding international sexual orientation laws
              </a>{" "}
              from the International Lesbian, Gay, Bisexual, Trans and Intersex Association (ILGA).
            </li>
          </ul>
        </div>
      </div>









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
