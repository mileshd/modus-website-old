import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './termsOfService.css'

const TermsOfServicePage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Modus Planning Terms of Service" />
      <div className="terms-of-service">
        <div className="container">
          <h1>Terms Of Service</h1>

          <h2>License to use Website</h2>
          <p>
            Unless otherwise stated, OnePage Software, LLC. and/or its licensors own the intellectual property rights in the website and material on the website.  Subject to the license below, all these intellectual property rights are reserved.
          </p>
          <p>
            You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.  
          </p>
          <p>
            You must not:
          </p>
          <ul>
            <li>
              republish material from this website (including republication on another website);
            </li>
            <li>
              sell, rent or sub-license material from the website;
            </li>
            <li>
              reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;
            </li>
            <li>
              edit or otherwise modify any material on the website; or
            </li>
            <li>
              redistribute material from this website except for content specifically and expressly made available for redistribution
            </li>
          </ul>

          <h2>Acceptable Use</h2>
          <p>
            You must not use this website in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.
          </p>
          <p>
            You must not use this website to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.
          </p>
          <p>
            You must not conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) on or in relation to this website without OnePage Software, LLC. express written consent.
          </p>
          <p>
            You must not use this website to transmit or send unsolicited commercial communications.
          </p>
          <p>
            You must not use this website for any purposes related to marketing without OnePage Software, LLC. express written consent.
          </p>

          <h2>Restricted Access</h2>
          <p>
            Access to certain areas of this website is restricted.  OnePage Software, LLC. reserves the right to restrict access to areas of this website, or indeed this entire website, at OnePage Software, LLC. discretion.
          </p>
          <p>
            If OnePage Software, LLC. provides you with a user ID and password to enable you to access restricted areas of this website or other content or services, you must ensure that the user ID and password are kept confidential.  
          </p>
          <p>
            OnePage Software, LLC. may disable your user ID and password in OnePage Software, LLC. sole discretion without notice or explanation.
          </p>

          <h2>User Content</h2>
          <p>
            In these terms and conditions, “your user content” means material (including without limitation text, images, audio material, video material and audio-visual material) that you submit to this website, for whatever purpose.
          </p>
          <p>
            Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or OnePage Software, LLC. or a third party (in each case under any applicable law).  
          </p>
          <p>
            You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.
          </p>
          <p>
            OnePage Software, LLC. reserves the right to edit or remove any material submitted to this website, or stored on OnePage Software, LLC. servers, or hosted or published upon this website.
          </p>
          <p>
            Notwithstanding OnePage Software, LLC. rights under these terms and conditions in relation to user content, OnePage Software, LLC. does not undertake to monitor the submission of such content to, or the publication of such content on, this website.
          </p>

          <h2>No Warranties</h2>
          <p>
            This website is provided "as is" without any representations or warranties, express or implied.  OnePage Software, LLC. makes no representations or warranties in relation to this website or the information and materials provided on this website.  
          </p>
          <p>
            Without prejudice to the generality of the foregoing paragraph, OnePage Software, LLC. does not warrant that:
          </p>
          <ul>
            <li>
              This website will be constantly available, or available at all; or
            </li>
            <li>
              The information on this website is complete, true, accurate or non-misleading despite OnePage Software, LLC’s best efforts.
            </li>
          </ul>
          <p>
            Nothing on this website constitutes, or is meant to constitute, advice of any kind. If you require advice in relation to any matter you should consult an appropriate professional.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            OnePage Software, LLC. will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, this website:
          </p>
          <ul>
            <li>
              for any direct loss;
            </li>
            <li>
              for any indirect, special or consequential loss; or
            </li>
            <li>
              for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.
            </li>
          </ul>
          <p>
            These limitations of liability apply even if OnePage Software, LLC. has been expressly advised of the potential loss.
          </p>

          <h2>Exceptions</h2>
          <p>
            Nothing in this website disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in this website disclaimer will exclude or limit OnePage Software, LLC. liability in respect of any:
          </p>
          <ul>
            <li>
              death or personal injury caused by OnePage Software, LLC. negligence;
            </li>
            <li>
              fraud or fraudulent misrepresentation on the part of OnePage Software, LLC.; or
            </li>
            <li>
              matter which it would be illegal or unlawful for OnePage Software, LLC. to exclude or limit, or to attempt or purport to exclude or limit, its liability. 
            </li>
          </ul>

          <h2>Reasonableness</h2>
          <p>
            By using this website, you agree that the exclusions and limitations of liability set out in this website disclaimer are reasonable.
          </p>
          <p>
            If you do not think they are reasonable, you must not use this website.
          </p>

          <h2>Other parties</h2>
          <p>
            You accept that, as a limited liability entity, OnePage Software, LLC. has an interest in limiting the personal liability of its officers and employees.  You agree that you will not bring any claim personally against OnePage Software, LLC. officers or employees in respect of any losses you suffer in connection with the website.
          </p>
          <p>
            Without prejudice to the foregoing paragraph, you agree that the limitations of warranties and liability set out in this website disclaimer will protect OnePage Software, LLC. officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as OnePage Software, LLC..
          </p>

          <h2>Unenforceable provisions</h2>
          <p>
            If any provision of this website disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of this website disclaimer.
          </p>

          <h2>Indemnity</h2>
          <p>
            You hereby indemnify OnePage Software, LLC. and undertake to keep OnePage Software, LLC. indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by OnePage Software, LLC. to a third party in settlement of a claim or dispute on the advice of OnePage Software, LLC. legal advisers) incurred or suffered by OnePage Software, LLC. arising out of any breach by you of any provision of these terms and conditions, or arising out of any claim that you have breached any provision of these terms and conditions.
          </p>

          <h2>Breaches of these terms and conditions</h2>
          <p>
            Without prejudice to OnePage Software, LLC. other rights under these terms and conditions, if you breach these terms and conditions in any way, OnePage Software, LLC. may take such action as OnePage Software, LLC. deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.
          </p>

          <h2>Variation</h2>
          <p>
            OnePage Software, LLC. may revise these terms and conditions from time-to-time.  Revised terms and conditions will apply to the use of this website from the date of the publication of the revised terms and conditions on this website. Please check this page regularly to ensure you are familiar with the current version.
          </p>

          <h2>Assignment</h2>
          <p>
            OnePage Software, LLC. may transfer, sub-contract or otherwise deal with OnePage Software, LLC. rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.
          </p>
          <p>
            You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.  
          </p>

          <h2>Severability</h2>
          <p>
            If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect.  If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect. 
          </p>

          <h2>Entire Agreement</h2>
          <p>
            These terms and conditions constitute the entire agreement between you and OnePage Software, LLC. in relation to your use of this website, and supersede all previous agreements in respect of your use of this website.
          </p>

          <h2>Law and Jurisdiction</h2>
          <p>
            These terms and conditions will be governed by and construed in accordance with laws of the State of Maryland and any disputes relating to these terms and conditions will be subject to the [non-]exclusive jurisdiction of the courts of the State of Maryland.
          </p>

          <h2>
            Contacting Us
          </h2>
          <p>
            If there are any questions regarding these terms of service, you may contact us using the information below.
          </p>
          <div>onepagesoftware.com</div>
          <div>248 Elkins Ln</div>
          <div>Lusby, MD 20657</div>
          <div>United States</div>
          <div><b>info@onepagesoftware.com</b></div>
          <div><b>301-752-0016</b></div>
        </div>
      </div>
    </Layout>
  )
}

export default TermsOfServicePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
