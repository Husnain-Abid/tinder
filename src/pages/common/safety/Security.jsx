import { Link } from "react-router-dom"
import logo from "../../../asset/logo.png"

const Security = () => {
  return (
    <div className="min-h-screen bg-white text-sm">
      {/* Header with Logo */}

      {/* Header */}
      <header className="border-b border-gray-200 py-4 px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="w-40" />
          </Link>
        </div>
      </header>



      {/* Main Content */}
      <main className="py-8 px-6 md:px-12 border-t">
        <div className="max-w-6xl mx-auto">
          {/* Main Header */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Security at Tinder</h1>

          {/* Subheader */}
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            A Secure and Trusted Place to Keep the Magic of Human Connection Alive!
          </h2>

          {/* Introduction */}
          <div className="mb-10">
            <p className="text-gray-600 mb-4">
              The Tinder Security team's mission is to build the best security organization in the world, ensuring our
              members have a private and secure place to keep the magic of human connection alive.
            </p>
            <p className="text-gray-600 mb-4">
              Because you entrust Tinder with your information, the security of our application and the privacy of your
              data is our top priority. Ensuring that we maintain a robust, transparent, and accountable security
              program is core to our commitment to you.
            </p>
          </div>

          {/* Internal Tinder Security Practices */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Internal Tinder Security Practices</h2>
            <p className="text-gray-600 mb-4">
              The security program at Tinder protects our organization and your data at every turn utilizing a
              combination of industry-leading security infrastructure, responsible data practices, as well as security
              and privacy best practices to stay ahead of the evolving number of threats facing internet services and
              infrastructure.
            </p>
            <p className="text-gray-600 mb-4">Our security program is focused on the following domains:</p>

            {/* Internal Information Security Program */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Internal Information Security Program:</h3>
              <p className="text-gray-600">
                We strive to increase security and reduce risk within Tinder's digital environment. We proactively build
                secure access protocols and network architecture to enable systematic control of internal access to
                Tinder's facilities, systems, and resources, using the least privilege paradigm. Tinder enforces the use
                of two-factor authentication (2FA) internally.
              </p>
            </div>

            {/* Application / Infrastructure Security */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Application / Infrastructure Security:</h3>
              <p className="text-gray-600">
                Security is engineered and integrated at all levels of our development lifecycle to help enable the
                creation of better, safer products, as well as to ensure secure design and engineering principles. Our
                applications and systems, including new features, code, and configuration changes pass through extensive
                security design reviews and assessments by our internal teams. Additionally, many of these applications
                and systems undergo routine independent and rigorous pen tests through reputable third-party security
                experts.
              </p>
            </div>

            {/* Governance, Risk, and Compliance */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Governance, Risk, and Compliance:</h3>
              <p className="text-gray-600">
                At Tinder, security awareness begins on day one and it is a continuous process thereafter. All employees
                undergo security and privacy training the moment they start as well as annually. Security is everyone's
                responsibility at Tinder. We have implemented and enforced physical, operational, and technical
                controls, as well as enforced security policies and procedures to secure our systems and member data. In
                addition to performing extensive internal security risk assessments, we also perform in-depth reviews of
                the security posture of our third-party vendors.
              </p>
            </div>

            {/* Red Team / Offensive Security */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Red Team / Offensive Security:</h3>
              <p className="text-gray-600">
                Our internal Red Team identifies previously unknown security vulnerabilities in existing systems and
                workflows through offensive security testing. This group simulates real-world attacks on all areas of
                the company and prioritizes upleveling security posture to address areas of greatest risk. Our goal is
                to gain insight into potential exposures, and to continuously test to reduce the likelihood of a breach.
              </p>
            </div>

            {/* Monitoring and Threat Management */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Monitoring and Threat Management:</h3>
              <p className="text-gray-600">
                Access to our infrastructure and systems is continuously logged and monitored. Tinder's security
                monitoring, investigation, threat hunting, and response program ensures that we are alerted to, as well
                as appropriately investigate, triage, and remediate security events.
              </p>
            </div>
          </div>

          {/* Compliance Certifications, Standards, and Regulations */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Compliance Certifications, Standards, and Regulations
            </h2>
            <p className="text-gray-600 mb-4">
              Tinder is the first dating app to be recognized for its comprehensive information security and privacy
              practices in accordance with internationally accepted standards, achieving the{" "}
              <span className="font-medium">ISO 27001:2022</span>, <span className="font-medium">ISO 27017:2015</span>{" "}
              and <span className="font-medium">ISO 27018:2019</span> certifications for our Information Security and
              Privacy Management System.
            </p>
            <p className="text-gray-600 mb-4">
              We also undergo annual audits by independent firms to ensure our compliance with SOX and PCI DSS security
              requirements.
            </p>
          </div>

          {/* Reporting Security Vulnerabilities */}
          <div className="mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Reporting Security Vulnerabilities</h2>
            <p className="text-gray-600 mb-4">
              Tinder welcomes input from the security research community in identifying potential issues and ways to
              improve the security of our applications, infrastructure, and member data. We encourage security
              researchers to responsibly disclose any potential vulnerabilities uncovered to our{" "}
              <a href="#" className="text-tinder-red hover:underline">
                Bug Bounty program
              </a>
              . We are committed to addressing security issues responsibly and in a timely manner. To protect our
              members, we request that you please refrain from sharing information about any potential vulnerabilities
              with anyone outside of Tinder until we have had the opportunity to review and address them with you. We
              appreciate your help in keeping Tinder secure for our members.
            </p>
            <p className="text-gray-600 mb-4">
              For questions, concerns, or issues with your profile, or to report another member or profile, please visit{" "}
              <a href="https://www.help.tinder.com/" className="text-tinder-red hover:underline">
                https://www.help.tinder.com/
              </a>{" "}
              to contact our Support team.
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

export default Security

